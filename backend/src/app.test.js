const supertest = require('supertest');
// supertest i jest biblioteke
const app = require('./app');

describe('GET /', () => {
  it('the data should respond with a message', async () => {
    const response = await supertest(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.message).toEqual('🎂 Testing Application');
  });
});
