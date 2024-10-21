const request = require('supertest');
const baseURL = 'https://swapi.dev/api';

describe('Testes de Erros da SWAPI', () => {
  
  test('deve retornar 404 para rota inexistente', async () => {
    const response = await request(baseURL).get('/heroes'); // Rota inexistente
    console.log(`Status recebido: ${response.status}`); // Exibe status no console
    expect(response.status).toBe(404);
  });

  test('deve retornar 404 ao tentar acessar um ID inválido de pessoa', async () => {
    const response = await request(baseURL).get('/people/9999'); // ID inválido que não existe
    console.log(`Status recebido: ${response.status}`); // Exibe status no console
    expect(response.status).toBe(404);
  });

  test('deve retornar 404 ao tentar acessar um ID inválido de planeta', async () => {
    const response = await request(baseURL).get('/planets/9999'); // ID inválido que não existe
    console.log(`Status recebido: ${response.status}`); // Exibe status no console
    expect(response.status).toBe(404);
  });

});