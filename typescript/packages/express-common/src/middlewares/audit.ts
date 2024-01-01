'use strict';
import * as log4js from 'log4js';
import { getPackageRelativeFilename } from '@iamsupercb/common';
const logger = log4js.getLogger(getPackageRelativeFilename(__filename));
logger.debug('== begins ==');
import { Request, Response, NextFunction } from 'express';
export function audit(req: Request, res: Response, next: NextFunction) {
  logger.debug('== audit begins ==');
  res.on('finish', () => {
    logger.info(`${req.ip} ${req.method} ${req.originalUrl} ${res.statusCode}`);
    logger.debug('== audit ends ==');
  });
  next();
}
logger.debug('== ends ==');
