import { actionTypes as at } from '../constants';

import {
  discoverEducationPageInit,
  discoverEducationPageCertificates,
  discoverEducationPageInfo,
} from '../actions';

describe('containers/EducationPage/actions', () => {
  describe('discoverEducationPageInit', () => {
    it('should return correct action', () => {
      const expected = {
        type: at.DISCOVER_EDUCATION_INIT,
      };

      const result = discoverEducationPageInit();

      expect(result).toEqual(expected);
    });
  });

  describe('discoverEducationPageCertificates', () => {
    it('should return correct action', () => {
      const expected = {
        type: at.DISCOVER_EDUCATION_CERTIFICATES,
      };

      const result = discoverEducationPageCertificates();

      expect(result).toEqual(expected);
    });
  });

  describe('discoverEducationPageInfo', () => {
    it('should return correct action', () => {
      const section = 'section';
      const data = 'data';
      const expected = {
        type: at.DISCOVER_EDUCATION_INFO,
        payload: { section, data },
      };

      const result = discoverEducationPageInfo(section, data);

      expect(result).toEqual(expected);
    });
  });
});
