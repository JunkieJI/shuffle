const request = require('supertest');
const server = require('../index.js');

beforeAll(async () => {
  // do something before anything else runs
  console.log('Jest starting!');
});
// close the server after each test
afterAll(() => {
  server.close();
  console.log('server closed!');
});

describe('episode tests', () => {
  test('get all api/episode', async () => {
    const response = await request(server).get(`/api/episode`);
    expect(response.status).toEqual(200);
  });
});

describe('series tests', () => {
  test('get all api/series', async () => {
    const response = await request(server).get('/api/series');
    expect(response.status).toEqual(200);
    // expect(response.text).toContain('affenpinscher');
  });
});
