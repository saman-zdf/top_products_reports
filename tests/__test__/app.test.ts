import supertest, { SuperTest, Test } from 'supertest';
import { app } from '../../src/app';

describe('GET /hello', () => {
  const request: SuperTest<Test> = supertest(app);

  it('should return a 200 status', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  it('should return json contain Health Check', async () => {
    const response = await request.get('/');
    expect(response.body.message).toBe('Health Check');
  });
});
