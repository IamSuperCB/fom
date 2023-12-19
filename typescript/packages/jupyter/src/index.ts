"use strict";
import * as log4js from "@log4js-node/log4js-api";
import { getPackageRelativeFilename } from "@iamsupercb/common";
const logger = log4js.getLogger(getPackageRelativeFilename(module.filename));
logger.debug("== begins ==");
export * from "./iResultSet";
export * from "./iScenario";
export * from "./ScenarioStatus";
logger.debug("== ends ==");
