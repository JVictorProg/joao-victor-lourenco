const request = require('supertest');
const baseURL = 'https://swapi.dev/api';

describe('Testes da SWAPI para Naves Estelares', () => {
  test('deve buscar uma lista de naves estelares', async () => {
    const response = await request(baseURL).get('/starships');
    console.log('Resposta da lista de naves estelares:', response.body);
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('results');
    expect(response.body.results.length).toBeGreaterThan(0);
  });

  test('deve buscar uma nave estelar específica por ID', async () => {
    const response = await request(baseURL).get('/starships/9');
    console.log('Resposta da nave estelar específica:', response.body);
    
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Death Star');
  });

  test('deve retornar erro para nave estelar inexistente', async () => {
    const response = await request(baseURL).get('/starships/9999');
    console.log('Resposta para nave estelar inexistente:', response.body);
    
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('detail', 'Not found');
  });
});