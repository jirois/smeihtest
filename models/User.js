/* eslint-disable func-names */
const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');

require('./init');

// eslint-disable-next-line prefer-destructuring

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  accountType: String,
  password: String
});

// Plugin to add Passport email/password credentials to the UserSchema
// and adds Passport methods including `register`
UserSchema.plugin(passportLocalMongoose, {
  usernameField: 'email', // Override login field to be email instead
  usernameLowerCase: true, // Ensure all emails are lowercase
  session: false // Disable session cookies since we will use JWTs
});

UserSchema.methods.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};


const User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = User;
