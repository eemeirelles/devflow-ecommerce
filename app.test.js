const request = require('supertest');
const app = require('./app');

describe('Testes da rota inicial', () => {
  it('Deve responder com status 200 e mensagem de status', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'DevFlow API online');
  });
});
