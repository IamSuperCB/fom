'use strict';
import * as log4js from '@log4js-node/log4js-api';
import {getPackageRelativeFilename} from './pkg-dir';
const logger = log4js.getLogger(getPackageRelativeFilename(module.filename));
logger.debug('== begins ==');

/**
 * Default Log4JS configuration
 */
export const defaultLog4JSConfiguration = {
  appenders: {
    out: {
      type: 'console',
      layout: {
        type: 'pattern',
        pattern: '%[%d %p %c :%] %m',
      },
    },
  },
  categories: {
    default: {
      appenders: ['out'],
      level: process.env.LOG4JS_DEFAULT_LEVEL ?? 'info',
    },
  },
};
logger.debug('== ends ==');
