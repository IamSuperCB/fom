'use strict';
import * as log4js from '@log4js-node/log4js-api';
import { getPackageRelativeFilename } from '@iamsupercb/common';
const logger = log4js.getLogger(getPackageRelativeFilename(module.filename));
logger.debug('== begins ==');
import { Router } from 'express';
import { me } from './me';
import { audit, auth } from '../middlewares';
export * as me from './me';
export const common = Router();
common.use(auth);
common.use(audit);
common.use('/me', me);

logger.debug('== ends ==');
