"use strict";
import * as log4js from "log4js";
import {
  getPackageRelativeFilename,
  defaultLog4JSConfiguration,
} from "@iamsupercb/common";
const logger = log4js.getLogger(getPackageRelativeFilename(module.filename));
log4js.configure(defaultLog4JSConfiguration);
logger.debug("== begins ==");
import * as MSAL from "@azure/msal-node";
import { init, defaultConfiguration } from "../src";
(async () => {
  const pca = await init(defaultConfiguration);
  if (!pca) {
    throw new Error("context.pca is undefined");
  }
  const tokenCache = await pca.getTokenCache();
  return (await tokenCache.getAccountByHomeId(
    process.env.MSAL_HOME_ACCOUNT_ID as string
  )) as MSAL.AccountInfo;
})()
  .then((result) => logger.debug(JSON.stringify(result, null, 2)))
  .catch((reason) => logger.error(JSON.stringify(reason, null, 2)))
  .finally(() => logger.debug("== ends =="));
