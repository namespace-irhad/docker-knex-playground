const supertest = require('supertest');

const app = require('../../app');

describe('GET /api/v1/playground', () => {
  it('the data should respond with a message', async () => {
    const response = await supertest(app)
      .get('/api/v1/playground')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.message).toEqual('Hello!');
  });
});
