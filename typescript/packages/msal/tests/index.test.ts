import { init, IConfiguration, defaultConfiguration } from "../src";
import MSAL from "@azure/msal-node";
import { describe, expect, beforeEach, it } from "@jest/globals";
describe("init function", () => {
  let config: IConfiguration;

  beforeEach(() => {
    config = { ...defaultConfiguration };
  });

  it("should return an instance of MSAL.PublicClientApplication", async () => {
    const result = await init(config);
    expect(result).toBeInstanceOf(MSAL.PublicClientApplication);
  });
});
