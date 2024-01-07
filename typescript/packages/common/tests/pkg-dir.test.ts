import {
  getPackageRoot,
  getPackageInfo,
  getPackageRelativeFilename,
} from "../src/pkg-dir";
import * as path from "path";
import { describe, expect, test } from "@jest/globals";

describe("pkg-dir", () => {
  const moduleFilename = __filename;

  test("getPackageRoot", () => {
    const result = getPackageRoot(moduleFilename);
    expect(result).toEqual(path.dirname(path.dirname(moduleFilename)));
  });

  test("getPackageInfo", () => {
    const result = getPackageInfo(moduleFilename);
    expect(result).toHaveProperty("name");
    expect(result).toHaveProperty("version");
  });

  test("getPackageRelativeFilename", () => {
    const result = getPackageRelativeFilename(moduleFilename);
    expect(result).toContain(path.basename(moduleFilename));
  });
});
