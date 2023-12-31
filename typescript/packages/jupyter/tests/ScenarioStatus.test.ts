import { ScenarioStatus } from '../src/ScenarioStatus';
import { describe, expect, beforeEach, it } from '@jest/globals';

describe('ScenarioStatus', () => {
  it('should have correct properties', () => {
    expect(ScenarioStatus).toHaveProperty('NotStarted');
    expect(ScenarioStatus).toHaveProperty('Started');
    expect(ScenarioStatus).toHaveProperty('Completed');
    expect(ScenarioStatus).toHaveProperty('Failed');
    expect(ScenarioStatus).toHaveProperty('Skipped');
    expect(ScenarioStatus).toHaveProperty('Aborted');
    expect(ScenarioStatus).toHaveProperty('Unknown');
  });

  it('should have correct values', () => {
    expect(ScenarioStatus.NotStarted).toEqual('NotStarted');
    expect(ScenarioStatus.Started).toEqual('Started');
    expect(ScenarioStatus.Completed).toEqual('Completed');
    expect(ScenarioStatus.Failed).toEqual('Failed');
    expect(ScenarioStatus.Skipped).toEqual('Skipped');
    expect(ScenarioStatus.Aborted).toEqual('Aborted');
    expect(ScenarioStatus.Unknown).toEqual('Unknown');
  });
});
