"use strict";
import * as log4js from "@log4js-node/log4js-api";
import { getPackageRelativeFilename } from "@iamsupercb/common";
import { IScenario } from "./iScenario";
const logger = log4js.getLogger(getPackageRelativeFilename(module.filename));
logger.debug("== begins ==");
export interface IResultSet {
  overwrite: boolean;
  notebookName: string;
  description: string;
  startDatetime?: string;
  dataPath?: string;
  scenarios: IScenario[];
  [propName: string]: any;
  endDatetime?: string;
}
logger.debug("== ends ==");
