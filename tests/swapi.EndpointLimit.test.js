const request = require('supertest');
const baseURL = 'https://swapi.dev/api';

describe('Teste de Limite de Endpoints da SWAPI', () => {
  test('deve retornar uma lista limitada de resultados para o endpoint /people', async () => {
    const response = await request(baseURL).get('/people/?page=1');
    console.log('Status da resposta:', response.status);
    console.log('Resultados recebidos:', response.body.results.length);
    
    expect(response.status).toBe(200);
    expect(response.body.results.length).toBeLessThanOrEqual(10);
  }, 10000); // Aumentando o tempo limite para 10 segundos

  test('deve retornar uma lista limitada de resultados para o endpoint /planets', async () => {
    const response = await request(baseURL).get('/planets/?page=1');
    console.log('Status da resposta:', response.status);
    console.log('Resultados recebidos:', response.body.results.length);
    
    expect(response.status).toBe(200);
    expect(response.body.results.length).toBeLessThanOrEqual(10);
  }, 10000); // Aumentando o tempo limite para 10 segundos
});