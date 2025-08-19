/**
 * Test Node.js Express application endpoints.
 */

const request = require('supertest');
const app = require('../src/node/index');

describe('Node.js API Endpoints', () => {
  test('GET / should return health status', async () => {
    const response = await request(app)
      .get('/')
      .expect(200);
    
    expect(response.body.status).toBe('healthy');
    expect(response.body.service).toBe('sphere-ai-node');
    expect(response.body.version).toBe('0.1.0');
    expect(response.body.timestamp).toBeDefined();
  });

  test('GET /api/status should return API status', async () => {
    const response = await request(app)
      .get('/api/status')
      .expect(200);
    
    expect(response.body.status).toBe('operational');
    expect(response.body.features).toBeDefined();
    expect(response.body.supportedLanguages).toContain('en');
  });

  test('POST /api/search-providers should accept search criteria', async () => {
    const searchData = {
      language: 'es',
      specialty: 'cardiology',
      location: 'New York'
    };

    const response = await request(app)
      .post('/api/search-providers')
      .send(searchData)
      .expect(200);
    
    expect(response.body.searchCriteria.language).toBe('es');
    expect(response.body.searchCriteria.specialty).toBe('cardiology');
    expect(response.body.results).toEqual([]);
  });

  test('GET /nonexistent should return 404', async () => {
    const response = await request(app)
      .get('/nonexistent')
      .expect(404);
    
    expect(response.body.error).toBe('Not found');
  });
});