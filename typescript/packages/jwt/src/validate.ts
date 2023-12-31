'use strict';
import * as log4js from '@log4js-node/log4js-api';
import { getPackageRelativeFilename } from '@iamsupercb/common';
const logger = log4js.getLogger(getPackageRelativeFilename(module.filename));
logger.debug('== begins ==');
import jwt from 'jsonwebtoken';
import { jwksClients } from './cache';
import { SigningKey } from 'jwks-rsa';
export async function validate(token: string): Promise<jwt.JwtPayload> {
  return new Promise((resolve, reject) => {
    const decodedToken: any = jwt.decode(token, { complete: true });
    if (!decodedToken) {
      reject('Token could not be decoded');
    } else if (typeof decodedToken === 'string') {
      reject('Token could not be decoded');
    } else {
      logger.debug(`tid: ${decodedToken.payload.tid}`);
      let jwksClient = jwksClients.find(
        (jwksClient) => jwksClient.key === decodedToken.payload.tid
      );
      if (jwksClient === undefined) {
        reject('Token could not be decoded');
      } else {
        jwt.verify(
          token,
          (header, callback) => {
            if (jwksClient)
              jwksClient.client.getSigningKey(
                header.kid,
                function (err, key: SigningKey | undefined) {
                  if (!err && key) {
                    var signingKey: string = key.getPublicKey();
                    callback(err, signingKey);
                  }
                }
              );
          },
          { algorithms: ['RS256'] },
          function (err, decoded) {
            if (err) {
              if (err.name === 'TokenExpiredError') {
                logger.error('Token has expired');
              } else {
                logger.error('Token could not be decoded: ', err);
              }
              reject(err);
            } else if (decoded && typeof decoded === 'object') {
              resolve(decoded);
            }
          }
        );
      }
    }
  });
}
logger.debug('== ends ==');
