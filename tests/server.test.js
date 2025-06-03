const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should return 200', async () => {
    await request(app)
      .get('/')
      .expect(200);
  });
});
