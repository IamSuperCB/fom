import { defaultPersistenceConfig, cachePath } from '../src/defaultPersistance';
import * as Path from 'path';
import * as FS from 'fs';
import MSALNodeExtensions from '@azure/msal-node-extensions';
import { describe, expect, beforeEach, it } from '@jest/globals';

describe('defaultPersistenceConfig', () => {
  it('should have correct properties', () => {
    expect(defaultPersistenceConfig).toHaveProperty('cachePath');
    expect(defaultPersistenceConfig).toHaveProperty('dataProtectionScope');
    expect(defaultPersistenceConfig).toHaveProperty('serviceName');
    expect(defaultPersistenceConfig).toHaveProperty('accountName');
    expect(defaultPersistenceConfig).toHaveProperty('usePlaintextFileOnLinux');
  });

  it('should have correct values', () => {
    expect(defaultPersistenceConfig.cachePath).toEqual(cachePath);
    expect(defaultPersistenceConfig.dataProtectionScope).toEqual(
      MSALNodeExtensions.DataProtectionScope.CurrentUser
    );
    expect(defaultPersistenceConfig.serviceName).toEqual('serviceName');
    expect(defaultPersistenceConfig.accountName).toEqual('accountName');
    expect(defaultPersistenceConfig.usePlaintextFileOnLinux).toEqual(true);
  });
});

describe('cachePath', () => {
  it('should exist', () => {
    expect(FS.existsSync(cachePath)).toEqual(true);
  });

  it('should be a file', () => {
    expect(FS.lstatSync(cachePath).isFile()).toEqual(true);
  });
});
