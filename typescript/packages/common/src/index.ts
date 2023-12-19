"use strict";
import * as log4js from "@log4js-node/log4js-api";
import { getPackageRelativeFilename } from "./pkg-dir";
const logger = log4js.getLogger(getPackageRelativeFilename(module.filename));
logger.debug("== begins ==");
export * from "./log4js";
export * from "./pkg-dir";
logger.debug("== ends ==");
