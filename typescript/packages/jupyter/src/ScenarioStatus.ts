"use strict";
import * as log4js from "@log4js-node/log4js-api";
import { getPackageRelativeFilename } from "@iamsupercb/common";
const logger = log4js.getLogger(getPackageRelativeFilename(module.filename));
logger.debug("== begins ==");
export enum ScenarioStatus {
  NotStarted = "NotStarted",
  Started = "Started",
  Completed = "Completed",
  Failed = "Failed",
  Skipped = "Skipped",
  Aborted = "Aborted",
  Unknown = "Unknown",
}

logger.debug("== ends ==");
