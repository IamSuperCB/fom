"use strict";
import * as log4js from "@log4js-node/log4js-api";
import PGHDIR from "pkg-dir";
import * as Path from "path";
import { PackageJson } from "type-fest";
const logger = log4js.getLogger(getPackageRelativeFilename(module.filename));
logger.debug("== begins ==");

/**
 * Returns package root for a given module filename
 * @param {string} moduleFilename
 */
export function getPackageRoot(moduleFilename: string): string | undefined {
  return PGHDIR.sync(Path.dirname(moduleFilename));
}

/**
 * Returns package info for a given module filename
 * @param {*} moduleFileName - module filename
 */
export function getPackageInfo(
  moduleFilename: string
): PackageJson | undefined {
  const packageRoot: string | undefined = getPackageRoot(moduleFilename);
  const packageFilename = Path.join(packageRoot || "UNKNOWN", "package.json");
  return require(packageFilename);
}

/**
 * Returns package relative filename
 * @param {string} moduleFilename
 */
export function getPackageRelativeFilename(moduleFilename: string): string {
  const packageRoot: string | undefined = getPackageRoot(moduleFilename);
  const packageInfo = getPackageInfo(moduleFilename);
  if (packageInfo) {
    return `${packageInfo.name}-${packageInfo.version}/${Path.relative(
      packageRoot || "UKNOWN",
      moduleFilename
    )}`;
  } else {
    return moduleFilename;
  }
}
logger.debug("== ends ==");
