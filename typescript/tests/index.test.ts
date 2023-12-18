import { testFunction } from "../src";
import { describe, expect, test } from "@jest/globals";

describe("testFunction", () => {
  it("should parse string to number", () => {
    const input = "123";
    const expectedOutput = 123;
    expect(testFunction(input)).toBe(expectedOutput);
  });

  it("should return NaN for non-numeric strings", () => {
    const input = "abc";
    expect(isNaN(testFunction(input))).toBe(true);
  });
});
