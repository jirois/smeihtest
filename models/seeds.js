/* eslint-disable no-console */
const User = require('./User');


User.create(
  [
    {
      email: 'luke@schoen.com',
      password: '123456',
      firstName: 'Luke',
      lastName: 'James',
      accountType: 'Investor'

    },
    {
      email: 'nathan@waters.com',
      firstName: 'Lukas',
      lastName: 'cage',
      accountType: 'Investee',
      password: '123456'

    }
  ]
)
  .then((users) => {
    console.log('Created users: ', users);
    process.exit();
  })
  .catch((error) => {
    console.error('Error creating users: ', error);
    process.exit();
  });
