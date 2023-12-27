'use strict';
import * as log4js from '@log4js-node/log4js-api';
import { getPackageRelativeFilename } from '@iamsupercb/common';
const logger = log4js.getLogger(getPackageRelativeFilename(module.filename));
logger.debug('== begins ==');
import { Request, Response, NextFunction } from 'express';
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
import jsonwebtoken from 'jsonwebtoken';
export function jwtValidate(audience: string, issuer: string) {
  return jwt({
    // Dynamically provide a signing key based on the kid in the header and the signing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://login.microsoftonline.com/common/discovery/keys`,
    }),

    // Validate the audience and the issuer.
    audience: audience,
    issuer: issuer,
    algorithms: ['RS256'],
  });
}
export function getTokenUser(req: Request, res: Response, next: NextFunction) {
  // Access the token from the request object

  const token = req.headers.authorization?.split(' ')[1];

  // Decode the token
  const decodedToken = jsonwebtoken.decode(token?.toString() as string);

  // Retrieve user information
  if (decodedToken && typeof decodedToken === 'object') {
    res.locals.user = {
      name: decodedToken.name,
      email: decodedToken.email,
    };
  } else {
    next(new Error('Invalid token'));
  }
  next();
}
logger.debug('== ends ==');
