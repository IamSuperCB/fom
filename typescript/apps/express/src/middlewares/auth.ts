'use strict';
import * as log4js from 'log4js';
import { getPackageRelativeFilename } from '@iamsupercb/common';
const logger = log4js.getLogger(getPackageRelativeFilename(__filename));
logger.debug('== begins ==');
import { Request, Response, NextFunction } from 'express';
import { validate } from '@iamsupercb/jwt';

export async function auth(req: Request, res: Response, next: NextFunction) {
  logger.debug('== auth begins ==');
  const token: string | undefined = req.headers.authorization?.split(' ')[1]; // Assuming the token is in the format: Bearer <token>
  if (!token) {
    return res.status(401).send('Unauthorized');
  }
  const decoded = await validate(token);
  res.locals.user = decoded;
  next();
}
logger.debug('== ends ==');
