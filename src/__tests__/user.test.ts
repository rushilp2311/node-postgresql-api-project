const request = require("supertest");
let server: any;

describe('testing mock function ', () => {
  beforeEach(() => { server = require("../index") })
  afterEach(() => { server.close(); })
  it('should pass the test', async () => {
    const response = await request(server).get("/api/users/");
    console.log(JSON.parse(response.text))
    expect(response.status).toBe(200);
  })
})