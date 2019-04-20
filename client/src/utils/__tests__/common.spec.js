import {
  getRandomElementOfArray,
  getRandomInteger,
  getAgeByBirthdate,
  getDuration,
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

  describe('getDuration()', () => {
    it('should return correct value for the same date', () => {
      const start = new Date('1992-05');
      const end = new Date('1992-05');

      const result = getDuration(start, end);
      const expected = 'Less than a month';

      expect(result).toEqual(expected);
    });

    it('should return correct value for the singular months', () => {
      const start = new Date('1992-05');
      const end = new Date('1992-06');

      const result = getDuration(start, end);
      const expected = '1 month';

      expect(result).toEqual(expected);
    });

    it('should return correct value for the plural months', () => {
      const start = new Date('1992-05');
      const end = new Date('1992-10');

      const result = getDuration(start, end);
      const expected = '5 months';

      expect(result).toEqual(expected);
    });

    it('should return correct value for the singular years and no months', () => {
      const start = new Date('1992-05-01');
      const end = new Date('1993-05-02');

      const result = getDuration(start, end);
      const expected = '1 year';

      expect(result).toEqual(expected);
    });

    it('should return correct value for the singular years and singular months', () => {
      const start = new Date('1992-05');
      const end = new Date('1993-06');

      const result = getDuration(start, end);
      const expected = '1 yr, 1 mo';

      expect(result).toEqual(expected);
    });

    it('should return correct value for the singular years and multiple months', () => {
      const start = new Date('1992-05');
      const end = new Date('1993-10');

      const result = getDuration(start, end);
      const expected = '1 yr, 5 mos';

      expect(result).toEqual(expected);
    });

    it('should return correct value for the multiple years and no months', () => {
      const start = new Date('1992-05-01');
      const end = new Date('1997-05-02');

      const result = getDuration(start, end);
      const expected = '5 years';

      expect(result).toEqual(expected);
    });

    it('should return correct value for the multiple years and multiple months', () => {
      const start = new Date('1992-05');
      const end = new Date('1997-10');

      const result = getDuration(start, end);
      const expected = '5 yrs, 5 mos';

      expect(result).toEqual(expected);
    });
  });
});
