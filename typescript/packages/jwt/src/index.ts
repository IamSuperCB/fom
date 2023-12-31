'use strict';
import * as log4js from '@log4js-node/log4js-api';
import { getPackageRelativeFilename } from '@iamsupercb/common';
const logger = log4js.getLogger(getPackageRelativeFilename(module.filename));
logger.debug('== begins ==');
import * as jwt from 'jsonwebtoken';
import jwksRSA from 'jwks-rsa';
import { validateHeaderName } from 'http';

// Create a client to retrieve RSA keys
const client = jwksRSA({
  jwksUri:
    'https://login.microsoftonline.com/fb03ccd6-4475-47ed-bccb-746d787a5e60/discovery/v2.0/keys',
});

function getKey(header: any, callback: any) {
  client.getSigningKey(header.kid, function (err: any, key: any) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

export function validate(token: string): Promise<any> {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      getKey,
      { algorithms: ['RS256'] },
      function (err, decoded) {
        if (err) {
          reject(err);
        } else {
          resolve(decoded);
        }
      }
    );
  });
}
logger.debug('== ends ==');
