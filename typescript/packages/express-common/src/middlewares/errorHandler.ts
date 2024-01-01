'use strict';
import * as log4js from 'log4js';
import { getPackageRelativeFilename } from '@iamsupercb/common';
const logger = log4js.getLogger(getPackageRelativeFilename(__filename));
logger.debug('== begins ==');
import { Request, Response, NextFunction } from 'express';
export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  logger.error(err);
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', { error: err });
}
logger.debug('== ends ==');
