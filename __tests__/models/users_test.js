
const chai = require('chai');

const { expect } = chai;

const User = require('../../models/User');


describe('User Model', () => {
  it('should have a firstname and lastname and a phone number', () => {
    const user = new User({
      email: 'a@b.com',
      firstName: 'Luke',
      lastName: 'James',
      phoneNumber: '08137834787',
      accountType: 'investor'
    });
    expect(user.firstName()).to.equal('Luke');
    expect(user.lastName()).to.equal('James');
  });
});
