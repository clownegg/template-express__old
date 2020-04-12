import {describe, it} from 'mocha';
import request from 'supertest';

import '@/config/env';

const SERVER_URL = process.env.API_ENDPOINT;

describe('GET /todos[全件取得]', () => {
  it('responds with json', (done) => {
    request(SERVER_URL)
      .get('/todos')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, done);
  });
});
