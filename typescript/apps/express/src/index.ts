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
import { skunkworks, errorHandler } from './middlewares';
import * as Controllers from './controllers';
const express = require('express');
const helmet = require('helmet');
const app = express();
const port = 3000;
import { Request, Response } from 'express';
app.use(helmet());
app.disable('x-powered-by');
express.json({ type: 'application/json', strict: true });
app.use(skunkworks);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.use('/api/v1', Controllers.default);
app.use(errorHandler);

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
