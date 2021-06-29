const request = require("supertest");
const app = require("./app");

describe("Test the API", () => {
  it("GET /todos ==> array of todos", () => {
    return request(app)
      .get("/todos")
      .expect("Content-type", /json/)
      .expect(200)
      .then((response) => {
        expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
            completed: expect.any(Boolean),
          }),
        ]);
      });
  });
  it("GET /todos/id ==> todo with id", () => {
    return request(app)
      .get("/todos/id")
      .expect("Content-type", /json/)
      .expect(200)
      .then((response) => {
        expect.objectContaining({
          name: expect.any(String),
          completed: expect.any(Boolean),
        });
      });
  });
  it("POST /todos/id ==> todo with id", () => {
    return request(app)
      .post("/todos")
      .expect("Content-type", /json/)
      .expect(201)
      .then((response) => {
        expect.objectContaining({
          name: expect.any(String),
          completed: expect.any(Boolean),
        });
      });
  });
  it("GET /todos/id ==> todo with id", () => {});
});
