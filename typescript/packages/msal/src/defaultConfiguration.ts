'use strict';
import * as log4js from '@log4js-node/log4js-api';
import { getPackageRelativeFilename } from '@iamsupercb/common';
const logger = log4js.getLogger(getPackageRelativeFilename(module.filename));
logger.debug('== begins ==');
import { IConfiguration } from './iConfiguration';
export const defaultConfiguration: IConfiguration = {
  tenantId: process.env.AAD_TENANT_ID || 'fb03ccd6-4475-47ed-bccb-746d787a5e60',
  clientId: process.env.AAD_CLIENT_ID || '57f2cc55-4921-427d-bd7e-3c9da05265f9',
  endpointHost:
    process.env.AAD_ENDPOINT_HOST || 'https://login.microsoftonline.com',
  homeAccountId:
    process.env.MSAL_HOME_ACCOUNT_ID ||
    '00000000-0000-0000-3ea9-bbc9521feb63.9188040d-6c67-4c5b-b112-36a304b66dad',
};
logger.debug('== ends ==');
