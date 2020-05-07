/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable func-names */

const chai = require('chai');

const { expect } = chai;
const app = require('../../app');
const config = require('../../config/config');

const User = require('../../models/User');

chai.use(require('chai-http'));

describe('Users Routes API', (done) => {
  // Setup server for tests
  let server;
  const { port } = config;
  console.log(done);
  // Asynchronous
  before((done) => {
    server = app.listen(port, done);
  });

  // Shut down server after the tests
  after((done) => {
    server.close(done);
  });

  beforeEach((done) => {
    User.create({
      email: 'luke@schoen.com',
      password: '123456',
      firstName: 'Luke',
      lastName: 'James',
      phoneNumber: '08137834787',
      accountType: 'investor'
    }, done);
  });

  afterEach((done) => {
    User.remove({}, done);
  });

  // test the endpoints
  it('should return a list of users', () => chai.request(app)
    .get('/users')
    .then((res) => {
      expect(res).to.have.status(200);
      // eslint-disable-next-line no-unused-expressions
      expect(res).to.be.json;
      // expect(res.data).to.have.length(1);
    })
    .catch((err) => {
      console.log('Error: ', err);
    }));

  it('should create a user', () => chai.request(app)
    .post('/users/create')
    .field('email', 'a@b.com')
    .field('firstName', 'Luke')
    .field('lastName', 'James')
    .field('accountType', 'investor')
    .then((res) => {
      expect(res).to.have.status(201);
    }));
});
