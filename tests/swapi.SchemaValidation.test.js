const request = require('supertest');
const baseURL = 'https://swapi.dev/api';

describe('Testes de Validação de Esquema da SWAPI', () => {
  test('deve validar o esquema da resposta de pessoas', async () => {
    const response = await request(baseURL).get('/people');
    console.log('Resposta do endpoint /people:', response.body);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('results');
    
    // Validando o esquema da primeira pessoa
    if (response.body.results.length > 0) {
      const firstPerson = response.body.results[0];
      console.log('Primeira pessoa:', firstPerson);

      expect(firstPerson).toHaveProperty('name');
      expect(firstPerson).toHaveProperty('height');
      expect(firstPerson).toHaveProperty('mass');
      expect(firstPerson).toHaveProperty('hair_color');
      expect(firstPerson).toHaveProperty('skin_color');
      expect(firstPerson).toHaveProperty('eye_color');
      expect(firstPerson).toHaveProperty('birth_year');
      expect(firstPerson).toHaveProperty('gender');
      expect(firstPerson).toHaveProperty('homeworld');
      expect(firstPerson).toHaveProperty('films');
      expect(firstPerson).toHaveProperty('species');
      expect(firstPerson).toHaveProperty('vehicles');
      expect(firstPerson).toHaveProperty('starships');
      expect(firstPerson).toHaveProperty('created');
      expect(firstPerson).toHaveProperty('edited');
      expect(firstPerson).toHaveProperty('url');
    }
  });

  test('deve validar o esquema da resposta de planetas', async () => {
    const response = await request(baseURL).get('/planets');
    console.log('Resposta do endpoint /planets:', response.body);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('results');
    
    // Validando o esquema do primeiro planeta
    if (response.body.results.length > 0) {
      const firstPlanet = response.body.results[0];
      console.log('Primeiro planeta:', firstPlanet);

      expect(firstPlanet).toHaveProperty('name');
      expect(firstPlanet).toHaveProperty('rotation_period');
      expect(firstPlanet).toHaveProperty('orbital_period');
      expect(firstPlanet).toHaveProperty('diameter');
      expect(firstPlanet).toHaveProperty('climate');
      expect(firstPlanet).toHaveProperty('gravity');
      expect(firstPlanet).toHaveProperty('terrain');
      expect(firstPlanet).toHaveProperty('surface_water');
      expect(firstPlanet).toHaveProperty('population');
      expect(firstPlanet).toHaveProperty('residents');
      expect(firstPlanet).toHaveProperty('films');
      expect(firstPlanet).toHaveProperty('created');
      expect(firstPlanet).toHaveProperty('edited');
      expect(firstPlanet).toHaveProperty('url');
    }
  });
});