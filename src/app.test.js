//import { jest } from "@jest/globals";
import request from "supertest";
import app from "./app";

describe("Test if app is listening", () => {
  it("Returns Statuscode 200 when URL exists", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
  it("Returns statuscode 404 when URL doesn't exist", async () => {
    const response = await request(app).get("/onzinURL");
    expect(response.statusCode).toBe(404);
  });
});

describe("Server responds with correct headers:", () => {
  it("GET content-type text/JSON for data", async () => {
    const response = await request(app).get("/data");
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });
  it("GET content-type text/html for index page:", async () => {
    const response = await request(app).get("/");
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("html")
    );
  });
});
