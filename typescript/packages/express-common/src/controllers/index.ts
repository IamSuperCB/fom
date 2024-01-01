'use strict';
import * as log4js from '@log4js-node/log4js-api';
import { getPackageRelativeFilename } from '@iamsupercb/common';
const logger = log4js.getLogger(getPackageRelativeFilename(module.filename));
logger.debug('== begins ==');
import { Router } from 'express';
import { me } from './me';
import { auth } from '../middlewares';
export const common = Router();
common.use(auth);
common.use('/me', me);

logger.debug('== ends ==');
