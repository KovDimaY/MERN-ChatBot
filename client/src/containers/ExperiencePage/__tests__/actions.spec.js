import { actionTypes as at } from '../constants';

import { discoverExperiencePageInit, discoverExperiencePageInfo } from '../actions';

describe('containers/ExperiencePage/actions', () => {
  describe('discoverExperiencePageInit', () => {
    it('should return correct action', () => {
      const expected = {
        type: at.DISCOVER_EXPERIENCE_INIT,
      };

      const result = discoverExperiencePageInit();

      expect(result).toEqual(expected);
    });
  });

  describe('discoverExperiencePageInfo', () => {
    it('should return correct action', () => {
      const section = 'section';
      const data = 'data';
      const expected = {
        type: at.DISCOVER_EXPERIENCE_INFO,
        payload: { section, data },
      };

      const result = discoverExperiencePageInfo(section, data);

      expect(result).toEqual(expected);
    });
  });
});
