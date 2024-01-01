'use strict';
import * as log4js from 'log4js';
import {
  defaultLog4JSConfiguration,
  getPackageRelativeFilename,
} from '@iamsupercb/common';
const logger = log4js.getLogger(getPackageRelativeFilename(__filename));
log4js.configure(defaultLog4JSConfiguration);
logger.debug('== begins ==');
import * as https from 'https';
import * as FS from 'fs';
import * as expressCommon from '@iamsupercb/express-common';
import { initJWKSClientCache } from '@iamsupercb/jwt';
const express = require('express');
const helmet = require('helmet');
const app = express();
const port = 3000;
import { Request, Response } from 'express';
initJWKSClientCache([
  {
    key: 'fb03ccd6-4475-47ed-bccb-746d787a5e60',
    jwksUri:
      'https://login.microsoftonline.com/fb03ccd6-4475-47ed-bccb-746d787a5e60/discovery/v2.0/keys',
  },
]);
app.use(helmet());
app.disable('x-powered-by');
express.json({ type: 'application/json', strict: true });
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.use('/api/v1/common', expressCommon.controllers.common);
app.use(expressCommon.middlewares.errorHandler);

const options = {
  key: FS.readFileSync('ssl/key.pem'),
  cert: FS.readFileSync('ssl/cert.pem'),
};

const server = https.createServer(options, app);

server.listen(port, () => {
  logger.info(
    `Example app listening on port ${port} with HTTPS enabled. Go to https://localhost:${port}/`
  );
});

process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received: closing HTTPS server');
  server.close(() => {
    logger.info('HTTP server closed');
  });
});
logger.debug('== ends ==');
