import { getRandomElementOfArray, getRandomInteger } from '../common';

const TIMES_TO_RUN = 1000;

describe('utils/common.js', () => {
  it('getRandomInteger()', () => {
    const min = 1;
    const max = 20;

    for (let i = 0; i < TIMES_TO_RUN; i += 1) {
      const result = getRandomInteger(min, max);

      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    }
  });

  it('getRandomElementOfArray()', () => {
    const array = ['1', '2', '3', '4', '5'];

    for (let i = 0; i < TIMES_TO_RUN; i += 1) {
      const result = getRandomElementOfArray(array);

      expect(array).toContain(result);
    }
  });
});
