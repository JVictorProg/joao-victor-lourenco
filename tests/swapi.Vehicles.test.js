const request = require('supertest');
const baseURL = 'https://swapi.dev/api';

describe('Testes da SWAPI - Veículos', () => {
  test('deve buscar uma lista de veículos', async () => {
    const response = await request(baseURL).get('/vehicles');
    console.log('Resposta da lista de veículos:', response.body);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('results');
  });

  test('deve buscar um veículo específico pelo ID', async () => {
    const response = await request(baseURL).get('/vehicles/4');
    console.log('Resposta do veículo específico:', response.body);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Sand Crawler');
  });

  test('deve retornar 404 para um veículo inexistente', async () => {
    const response = await request(baseURL).get('/vehicles/999');
    console.log('Resposta do veículo inexistente:', response.body);
    expect(response.status).toBe(404);
  });
});