const request = require('supertest');
const baseURL = 'https://swapi.dev/api';

describe('Testes da SWAPI - Pessoas', () => {
  test('Deve buscar uma lista de pessoas', async () => {
    const response = await request(baseURL).get('/people');
    console.log('Status da resposta:', response.status);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('results');
    console.log('Número de pessoas:', response.body.results.length);
  });

  test('Deve buscar uma pessoa específica pelo ID', async () => {
    const response = await request(baseURL).get('/people/1');
    console.log('Status da resposta:', response.status);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Luke Skywalker');
    console.log('Nome da pessoa:', response.body.name);
  });

  test('Deve retornar um erro ao buscar uma pessoa com ID inválido', async () => {
    const response = await request(baseURL).get('/people/999');
    console.log('Status da resposta para ID inválido:', response.status);
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('detail');
    console.log('Mensagem de erro:', response.body.detail);
  });
});