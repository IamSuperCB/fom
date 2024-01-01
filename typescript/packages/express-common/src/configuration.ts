'use strict';
import * as log4js from '@log4js-node/log4js-api';
import { getPackageRelativeFilename } from '@iamsupercb/common';
const logger = log4js.getLogger(getPackageRelativeFilename(module.filename));
logger.debug('== begins ==');
import { IConfiguration } from './iConfiguration';
export const configuration: IConfiguration = {
  tenantIds: JSON.parse(process.env.FOM_TENANT_IDS || '[]'),
  databaseUrl: process.env.FOM_DATABASE_URL || '',
};
logger.debug('== ends ==');
