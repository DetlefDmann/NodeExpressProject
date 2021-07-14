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

describe("Server responds with correct headers", () => {
  it("GET content-type text/JSON", async () => {
    const response = await request(app).get("/data");
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });
  it("Get content-type text/html", async () => {
    const response = await request(app).get("/");
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("html")
    );
  });
});
