import { IResultSet } from '../src/iResultSet';
import { IScenario } from '../src/iScenario';
import { describe, expect, beforeEach, it } from '@jest/globals';

describe('Minimal IResultSet', () => {
  it('should have correct properties', () => {
    const resultSet: IResultSet = {
      overwrite: true,
      notebookName: 'Test Notebook',
      description: 'Test Description',
      scenarios: [] as IScenario[],
      customProp: 'Custom Property',
    };

    expect(resultSet).toHaveProperty('overwrite');
    expect(resultSet).toHaveProperty('notebookName');
    expect(resultSet).toHaveProperty('description');
    expect(resultSet).toHaveProperty('scenarios');
    expect(resultSet).toHaveProperty('customProp');
  });
});
