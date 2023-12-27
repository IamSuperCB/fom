import { IScenario } from '../src/iScenario';
import { ScenarioStatus } from '../src/ScenarioStatus';
import { describe, expect, beforeEach, it } from '@jest/globals';

describe('IScenario', () => {
  describe('minimal', () => {
    it('should have correct properties', () => {
      const scenario: IScenario = {
        name: 'Test Scenario',
        description: 'Test Description',
        startDatetime: '2022-01-01T00:00:00Z',
        status: ScenarioStatus.NotStarted,
        customProp: 'Custom Property',
      };

      expect(scenario).toHaveProperty('name');
      expect(scenario).toHaveProperty('description');
      expect(scenario).toHaveProperty('startDatetime');
      expect(scenario).toHaveProperty('status');
      expect(scenario).toHaveProperty('customProp');
    });
  });
});
