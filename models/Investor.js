/* eslint-disable func-names */
const mongoose = require('./init');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const UserRef = {
  type: ObjectId, ref: 'User'
};

const InvestorSchema = new Schema({
  user: { user: UserRef }
});
InvestorSchema.methods.fullName = function () {
  return `${this.name}`;
};

const Investor = mongoose.models.Investor || mongoose.model('Investor', InvestorSchema);

module.exports = Investor;
