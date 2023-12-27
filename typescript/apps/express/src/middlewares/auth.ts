'use strict';
import * as log4js from 'log4js';
import { getPackageRelativeFilename } from '@iamsupercb/common';
const logger = log4js.getLogger(getPackageRelativeFilename(__filename));
logger.debug('== begins ==');
import { Request, Response, NextFunction } from 'express';
export function auth(req: Request, res: Response, next: NextFunction) {
  logger.debug('== auth begins ==');
  logger.debug('== auth ends ==');
  next();
}
logger.debug('== ends ==');
