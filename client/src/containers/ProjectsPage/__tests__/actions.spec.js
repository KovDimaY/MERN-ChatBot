import { actionTypes as at } from '../constants';

import { discoverProjectsPageInit, discoverProjectsPageInfo } from '../actions';

describe('containers/ProjectsPage/actions', () => {
  describe('discoverProjectsPageInit', () => {
    it('should return correct action', () => {
      const expected = {
        type: at.DISCOVER_PROJECTS_INIT,
      };

      const result = discoverProjectsPageInit();

      expect(result).toEqual(expected);
    });
  });

  describe('discoverProjectsPageInfo', () => {
    it('should return correct action', () => {
      const section = 'section';
      const data = 'data';
      const expected = {
        type: at.DISCOVER_PROJECTS_INFO,
        payload: { section, data },
      };

      const result = discoverProjectsPageInfo(section, data);

      expect(result).toEqual(expected);
    });
  });
});
