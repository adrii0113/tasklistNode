

const supertest = require('supertest')
const request = require('supertest');
const app = require('./../app')
const router = require('./../routes/taskroutes');
const api = supertest(app);



test('response must be 200 ok',  () => {
    // expect(sum(1,2)).toBe(3)
      api.get('/gettasks')
      .expect(200)
      .expect('Content-Type', 'application/json')
    
},60_000)



describe("Test the root path", () => {
    test("It should response the GET method", done => {
      request(app)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });
test('tasks are returned as json',  async () => {
     await api
        .post('/api/api/gettasks')
        .expect(200)
        .expect('Content-Type', /aplication\/json/)
})


