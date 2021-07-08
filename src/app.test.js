import { jest } from "@jest/globals";
import request from "supertest";
import app from "./app";

describe("Test if app is listening", () => {
  it("Returns Statuscode 200", () => {
    const response = request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});
