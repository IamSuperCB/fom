'use strict';
import * as log4js from 'log4js';
import {
  getPackageRelativeFilename,
  defaultLog4JSConfiguration,
} from '@iamsupercb/common';
const logger = log4js.getLogger(getPackageRelativeFilename(module.filename));
log4js.configure(defaultLog4JSConfiguration);

logger.debug('==  begins ==');
import client from '../src/index';
(async () => {
  await client.$connect();
  await client.$queryRaw`SELECT 1`;
})()
  .then((result) => logger.info('Database is online'))
  .catch((reason) => logger.error(JSON.stringify(reason, null, 2)))
  .finally(() => logger.debug('==  ends =='));
logger.debug('== ends ==');
