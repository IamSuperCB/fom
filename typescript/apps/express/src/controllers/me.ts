'use strict';
import * as log4js from 'log4js';
import { getPackageRelativeFilename } from '@iamsupercb/common';
const logger = log4js.getLogger(getPackageRelativeFilename(__filename));
logger.debug('== begins ==');
import { Router, Request, Response, NextFunction } from 'express';
import { register } from 'module';
var router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.debug('== me begins ==');
  res.json(res.locals.user);
  next();
  logger.debug('== me ends ==');
});
export default router;
logger.debug('== ends ==');
