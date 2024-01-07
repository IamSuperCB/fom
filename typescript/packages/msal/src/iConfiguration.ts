'use strict';
import * as log4js from '@log4js-node/log4js-api';
import { getPackageRelativeFilename } from '@iamsupercb/common';
const logger = log4js.getLogger(getPackageRelativeFilename(module.filename));
logger.debug('== begins ==');
export interface IConfiguration {
  tenantId: string;
  clientId: string;
  endpointHost: string;
  homeAccountId?: string;
}
logger.debug('== ends ==');
