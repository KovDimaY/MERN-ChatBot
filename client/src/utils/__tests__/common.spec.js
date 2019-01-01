import {
  getRandomElementOfArray,
  getRandomInteger,
  getAgeByBirthdate,
} from '../common';

const TIMES_TO_RUN = 1000;

describe('utils/common.js', () => {
  describe('getRandomInteger()', () => {
    it(`should generate correct random integers ${TIMES_TO_RUN} times in a row`, () => {
      const min = 1;
      const max = 20;

      for (let i = 0; i < TIMES_TO_RUN; i += 1) {
        const result = getRandomInteger(min, max);

        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
      }
    });
  });

  describe('getRandomElementOfArray()', () => {
    it(`should return correct random integers from array ${TIMES_TO_RUN} times in a row`, () => {
      const array = ['1', '2', '3', '4', '5'];

      for (let i = 0; i < TIMES_TO_RUN; i += 1) {
        const result = getRandomElementOfArray(array);

        expect(array).toContain(result);
      }
    });
  });

  describe('getAgeByBirthdate()', () => {
    it('should return correct age one day before the birthday', () => {
      const birthday = '1992-05-20';
      const expected = 26;
      jest.spyOn(Date, 'now').mockImplementation(() => 1558224000000);

      const result = getAgeByBirthdate(birthday);

      expect(result).toBe(expected);
    });

    it('should return correct age at the birthday', () => {
      const birthday = '1992-05-20';
      const expected = 26;
      jest.spyOn(Date, 'now').mockImplementation(() => 1558353600000);

      const result = getAgeByBirthdate(birthday);

      expect(result).toBe(expected);
    });

    it('should return correct age one day after the birthday', () => {
      const birthday = '1992-05-20';
      const expected = 27;
      jest.spyOn(Date, 'now').mockImplementation(() => 1558396800000);

      const result = getAgeByBirthdate(birthday);

      expect(result).toBe(expected);
    });
  });
});
