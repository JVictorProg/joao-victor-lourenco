const request = require('supertest');
const baseURL = 'https://swapi.dev/api';

describe('Testes da API SWAPI - Espécies', () => {
  test('deve buscar uma lista de espécies', async () => {
    const response = await request(baseURL).get('/species');
    console.log('Resposta da API:', response.body); // Exibe a resposta da API
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('results');
    console.log('Lista de espécies recebida com sucesso!');
  });

  test('deve buscar uma espécie específica pelo ID', async () => {
    const response = await request(baseURL).get('/species/1');
    console.log('Resposta da API para espécie ID 1:', response.body); // Exibe a resposta da API
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Human');
    console.log('Espécie encontrada com sucesso!');
  });

  test('deve retornar erro ao buscar uma espécie com ID inválido', async () => {
    const response = await request(baseURL).get('/species/9999');
    console.log('Resposta da API para ID inválido:', response.body); // Exibe a resposta da API
    expect(response.status).toBe(404);
    expect(response.body.detail).toBe('Not found');
    console.log('Erro retornado corretamente para ID inválido.');
  });
});