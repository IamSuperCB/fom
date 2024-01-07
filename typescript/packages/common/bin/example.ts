'use strict';
import * as log4js from 'log4js';
import { getPackageRelativeFilename, defaultLog4JSConfiguration } from '../src/index';
const logger = log4js.getLogger(getPackageRelativeFilename(module.filename));
log4js.configure(defaultLog4JSConfiguration);
logger.debug('== begins ==');
logger.debug('debug');
logger.info('info');
logger.warn('warn');
logger.error('error');
logger.fatal('fatal');
logger.debug('== ends ==');
