import { jest } from "@jest/globals";
import request from "supertest";
import app from "./app";

describe("Test if app is listening", () => {
  it("Returns Statuscode 200 when existing URL", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
  it("returns statuscode 404 when not existing URL", async () => {
    const response = await request(app).get("/onzinURL");
    expect(response.statusCode).toBe(404);
  });
});
