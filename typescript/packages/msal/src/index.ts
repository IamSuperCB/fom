"use strict";
import * as log4js from "@log4js-node/log4js-api";
import { getPackageRelativeFilename } from "@iamsupercb/common";
const logger = log4js.getLogger(getPackageRelativeFilename(module.filename));
logger.debug("== begins ==");
import MSAL from "@azure/msal-node";
import MSALNodeExtensions from "@azure/msal-node-extensions";
import Path from "path";
import FS from "fs";
export interface IConfiguration {
  tenantId: string;
  clientId: string;
  endpointHost: string;
  homeAccountId?: string;
}
export const defaultConfiguration: IConfiguration = {
  tenantId: process.env.AAD_TENANT_ID || "fb03ccd6-4475-47ed-bccb-746d787a5e60",
  clientId: process.env.AAD_CLIENT_ID || "57f2cc55-4921-427d-bd7e-3c9da05265f9",
  endpointHost:
    process.env.AAD_ENDPOINT_HOST || "https://login.microsoftonline.com",
  homeAccountId:
    process.env.MSAL_HOME_ACCOUNT_ID ||
    "00000000-0000-0000-3ea9-bbc9521feb63.9188040d-6c67-4c5b-b112-36a304b66dad",
};
export const cachePath = process.env.MSAL_CACHE_LOCATION
  ? Path.join(process.env.MSAL_CACHE_LOCATION, `msal.cache.json`)
  : Path.join(process.env.HOME as string, ".fos", "msal", `msal.cache.json`);
if (!FS.existsSync(cachePath)) {
  FS.mkdirSync(Path.dirname(cachePath), { recursive: true });
}
export const defaultPersistenceConfig = {
  cachePath: cachePath,
  dataProtectionScope: MSALNodeExtensions.DataProtectionScope.CurrentUser,
  serviceName: "serviceName",
  accountName: "accountName",
  usePlaintextFileOnLinux: true,
};
export async function init(
  configuration: IConfiguration
): Promise<MSAL.PublicClientApplication> {
  logger.debug(`configuration: ${JSON.stringify(configuration, null, 2)}`);
  return new MSAL.PublicClientApplication({
    auth: {
      clientId: configuration.clientId,
      authority: `${configuration.endpointHost}/${configuration.tenantId}`,
    },
    cache: {
      cachePlugin: {
        beforeCacheAccess: async (cacheContext) => {
          logger.debug("== beforeCacheAccess begins ==");
          const persistence =
            await MSALNodeExtensions.PersistenceCreator.createPersistence(
              defaultPersistenceConfig
            );
          const data = await persistence.load();
          cacheContext.tokenCache.deserialize(data as string);
          logger.debug("== beforeCacheAccess ends ==");
        },
        afterCacheAccess: async (cacheContext) => {
          logger.debug("== afterCacheAccess begins ==");
          if (cacheContext.cacheHasChanged) {
            const persistence =
              await MSALNodeExtensions.PersistenceCreator.createPersistence(
                defaultPersistenceConfig
              );
            await persistence.save(cacheContext.tokenCache.serialize());
          }
          logger.debug("== afterCacheAccess ends ==");
        },
      },
    },
    system: {
      loggerOptions: {
        loggerCallback: (level, message, containsPii) => {
          logger.debug(`MSAL: ${level} ${message} ${containsPii}`);
        },
        piiLoggingEnabled: true,
      },
    },
  });
}
logger.debug("== ends ==");
