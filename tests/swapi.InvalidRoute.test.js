const request = require('supertest');
const baseURL = 'https://swapi.dev/api';

describe('Testes de Rotas Inválidas na SWAPI', () => {
  test('deve retornar 404 para rota inexistente /heroes', async () => {
    const response = await request(baseURL).get('/heroes');
    console.log('Status Code:', response.status);
    console.log('Body:', response.body);
    expect(response.status).toBe(404);
  });

  test('deve retornar 404 para rota inexistente /planetsXYZ', async () => {
    const response = await request(baseURL).get('/planetsXYZ');
    console.log('Status Code:', response.status);
    console.log('Body:', response.body);
    expect(response.status).toBe(404);
  });
});