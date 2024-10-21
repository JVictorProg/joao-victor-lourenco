const request = require('supertest');
const baseURL = 'https://swapi.dev/api';

describe('Testes de Filmes da SWAPI', () => {
  test('deve buscar uma lista de filmes', async () => {
    const response = await request(baseURL).get('/films');
    console.log("Status Code:", response.status);
    console.log("Resultado:", response.body);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('results');
  }, 10000); // Aumenta o timeout para 10 segundos

  test('deve buscar um filme específico pelo ID', async () => {
    const response = await request(baseURL).get('/films/1');
    console.log("Status Code:", response.status);
    console.log("Filme:", response.body);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('title', 'A New Hope');
  });
});