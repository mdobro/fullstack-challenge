var request = require('supertest');
describe('loading express', function () {
  var server;
  beforeEach(function () {
    delete require.cache[require.resolve('../app')];
    server = require('../app');
  });
  afterEach(function (done) {
    server.close(done);
  });
  it('can retrieve stored contacts', function testGet(done) {
  request(server)
    .get('/contacts')
    .expect(200, done);
  });
  it('can save contact', function testPath(done) {
    request(server)
      .post('/contacts')
      .send({
        first_name: "Mike",
        last_name: "Dobrowolski",
        phone_number: "111-222-3333",
        email: "test@email.com",
        address: "123 Easy St"
      })
      .expect(200, done);
  });
});