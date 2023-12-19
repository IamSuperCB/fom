"use strict";
import * as log4js from "log4js";
import * as DOTENV from "dotenv";
import * as Path from "path";
import {
  getPackageRelativeFilename,
  defaultLog4JSConfiguration,
} from "@iamsupercb/common";
const logger = log4js.getLogger(getPackageRelativeFilename(module.filename));
log4js.configure(defaultLog4JSConfiguration);
logger.debug("== begins ==");
import { init, defaultConfiguration } from "../src";
logger.debug("==  begins ==");
(async () => {
  const pca = await init(defaultConfiguration);
  if (!pca) {
    throw new Error("context.pca is undefined");
  }
  return await pca.acquireTokenByDeviceCode({
    scopes: ["https://graph.microsoft.com/.default"],
    deviceCodeCallback: (response) => {
      logger.debug(response.message);
    },
  });
})()
  .then((result) => logger.debug(JSON.stringify(result, null, 2)))
  .catch((reason) => logger.error(JSON.stringify(reason, null, 2)))
  .finally(() => logger.debug("==  ends =="));
