"use strict";
import * as log4js from "log4js";
import {
  getPackageRelativeFilename,
  defaultLog4JSConfiguration,
} from "@iamsupercb/common";
const logger = log4js.getLogger(getPackageRelativeFilename(module.filename));
log4js.configure(defaultLog4JSConfiguration);
logger.debug("== begins ==");
import { init, defaultConfiguration } from "../src";
import * as MSAL from "@azure/msal-node";
logger.debug("==  begins ==");
(async () => {
  const pca = await init(defaultConfiguration);
  if (!pca) {
    throw new Error("context.pca is undefined");
  }
  let accountInfo = (await pca
    .getTokenCache()
    .getAccountByHomeId(
      defaultConfiguration.homeAccountId as string
    )) as MSAL.AccountInfo;
  return await pca.acquireTokenSilent({
    scopes: ["https://graph.microsoft.com/.default"],
    account: accountInfo as MSAL.AccountInfo,
  });
})()
  .then((result) => logger.debug(JSON.stringify(result, null, 2)))
  .catch((reason) => logger.error(JSON.stringify(reason, null, 2)))
  .finally(() => logger.debug("==  ends =="));
