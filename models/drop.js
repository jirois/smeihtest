/* eslint-disable no-console */
const User = require('./User');

User.deleteMany()
  .then(() => {
    console.log('Deleted users');
    process.exit();
  });
