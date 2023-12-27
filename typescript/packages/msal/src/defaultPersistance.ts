'use strict';
import * as log4js from '@log4js-node/log4js-api';
import { getPackageRelativeFilename } from '@iamsupercb/common';
const logger = log4js.getLogger(getPackageRelativeFilename(module.filename));
logger.debug('== begins ==');
import FS from 'fs';
import Path from 'path';
import MSALNodeExtensions from '@azure/msal-node-extensions';

export const cachePath = process.env.MSAL_CACHE_LOCATION
  ? Path.join(process.env.MSAL_CACHE_LOCATION, `msal.cache.json`)
  : Path.join(process.env.HOME as string, '.fos', 'msal', `msal.cache.json`);

if (!FS.existsSync(cachePath)) {
  FS.mkdirSync(Path.dirname(cachePath), { recursive: true });
}

export const defaultPersistenceConfig = {
  cachePath: cachePath,
  dataProtectionScope: MSALNodeExtensions.DataProtectionScope.CurrentUser,
  serviceName: 'serviceName',
  accountName: 'accountName',
  usePlaintextFileOnLinux: true,
};
logger.debug('== ends ==');
