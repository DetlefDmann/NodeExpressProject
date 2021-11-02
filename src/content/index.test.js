/**
 * @jest-environment jsdom
 */
import { createAPIKey } from "./index.js";

describe("Test the function for creating an API-key:", () => {
  it("an API-key is created.", () => {
    expect(createAPIKey()).toBeTruthy();
  });
});
