'use strict';
import * as log4js from '@log4js-node/log4js-api';
import { getPackageRelativeFilename } from '@iamsupercb/common';
const logger = log4js.getLogger(getPackageRelativeFilename(module.filename));
logger.debug('== begins ==');
export * from './iConfiguration';
export * from './defaultConfiguration';
import MSAL from '@azure/msal-node';
import MSALNodeExtensions from '@azure/msal-node-extensions';
import Path from 'path';
import FS from 'fs';
import { IConfiguration } from './iConfiguration';
import { defaultConfiguration } from './defaultConfiguration';
import { defaultPersistenceConfig } from './defaultPersistance';

export async function init(
  configuration: IConfiguration = defaultConfiguration
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
          logger.debug('== beforeCacheAccess begins ==');
          const persistence =
            await MSALNodeExtensions.PersistenceCreator.createPersistence(
              defaultPersistenceConfig
            );
          const data = await persistence.load();
          cacheContext.tokenCache.deserialize(data as string);
          logger.debug('== beforeCacheAccess ends ==');
        },
        afterCacheAccess: async (cacheContext) => {
          logger.debug('== afterCacheAccess begins ==');
          if (cacheContext.cacheHasChanged) {
            const persistence =
              await MSALNodeExtensions.PersistenceCreator.createPersistence(
                defaultPersistenceConfig
              );
            await persistence.save(cacheContext.tokenCache.serialize());
          }
          logger.debug('== afterCacheAccess ends ==');
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
logger.debug('== ends ==');
