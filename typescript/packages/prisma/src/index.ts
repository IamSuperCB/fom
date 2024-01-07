'use strict';
import * as log4js from '@log4js-node/log4js-api';
import { getPackageRelativeFilename } from '@iamsupercb/common';
const logger = log4js.getLogger(getPackageRelativeFilename(module.filename));
logger.debug('== begins ==');
import { PrismaClient } from '@prisma/client';

let prisma = new PrismaClient();

export default prisma;
logger.debug('== ends ==');
