const request = require('supertest');
const baseURL = 'https://swapi.dev/api';

describe('Testes da SWAPI - Planetas', () => {
  test('deve buscar uma lista de planetas', async () => {
    const response = await request(baseURL).get('/planets');
    console.log('Resposta da lista de planetas:', response.body);
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('results');
    console.log('Teste de lista de planetas concluído com sucesso.');
  });

  test('deve buscar um planeta específico por ID', async () => {
    const response = await request(baseURL).get('/planets/1');
    console.log('Resposta do planeta específico:', response.body);
    
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Tatooine');
    console.log('Teste de busca de planeta específico concluído com sucesso.');
  });
});