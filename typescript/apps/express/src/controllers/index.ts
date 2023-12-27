import * as log4js from 'log4js';
import { getPackageRelativeFilename } from '@iamsupercb/common';
const logger = log4js.getLogger(getPackageRelativeFilename(__filename));
logger.debug('== begins ==');
import { Router } from 'express';
import { auth, audit } from '../middlewares';

var router = Router();
import * as me from './me';
router.use(auth);
router.use(audit);
router.use('/me', me.default);
export default router;
logger.debug('== ends ==');
