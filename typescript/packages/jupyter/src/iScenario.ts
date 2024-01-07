"use strict";
import * as log4js from "@log4js-node/log4js-api";
import { getPackageRelativeFilename } from "@iamsupercb/common";
const logger = log4js.getLogger(getPackageRelativeFilename(module.filename));
logger.debug("== begins ==");
import { ScenarioStatus } from "./ScenarioStatus";
export interface IScenario {
  name: string;
  description: string;
  startDatetime: string;
  result?: any;
  status?: ScenarioStatus;
  [propName: string]: any;
  endDatetime?: string;
}
logger.debug("== ends ==");
