'use strict';
import * as log4js from '@log4js-node/log4js-api';
import { getPackageRelativeFilename } from '@iamsupercb/common';
const logger = log4js.getLogger(getPackageRelativeFilename(module.filename));
logger.debug('== begins ==');
import jwksRSA from 'jwks-rsa';

// Create a client to retrieve RSA keys
export interface jwksClientCacheOptions extends jwksRSA.Options {
  key: string;
}
export const jwksClients: { key: string; client: jwksRSA.JwksClient }[] = [];

export function initJWKSClientCache(options: jwksClientCacheOptions[]): void {
  options.forEach((option: jwksClientCacheOptions) => {
    jwksClients.push({
      key: option.key,
      client: jwksRSA({
        jwksUri: option.jwksUri,
        cache: true, // Enable cache
        cacheMaxEntries: 5, // Max number of keys to store in the cache
        cacheMaxAge: 86400000, // How long to cache the key in milliseconds (86400000 ms = 24 hours)
      }),
    });
  });
}
logger.debug('== ends ==');
