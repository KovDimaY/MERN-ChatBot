import {
  discoverHomePageSimpleElement,
  discoverHomePageHobbiesElement,
} from 'containers/HomePage/actions';

import {
  discoverExperiencePageInit,
  discoverExperiencePageInfo,
} from 'containers/ExperiencePage/actions';

import {
  checkDiscovery,
} from '../check-discovery';

jest.mock('containers/HomePage/actions', () => ({
  discoverHomePageSimpleElement: jest.fn(),
  discoverHomePageHobbiesElement: jest.fn(),
}));

jest.mock('containers/ExperiencePage/actions', () => ({
  discoverExperiencePageInit: jest.fn(),
  discoverExperiencePageInfo: jest.fn(),
}));

describe('containers/Chatbot/check-discovery.js', () => {
  describe('checkDiscovery()', () => {
    it('should check homepage discovery with discoverHomePageSimpleElement', () => {
      const intent = 'homepage-something';
      const params = 'params';
      const dispatch = jest.fn();

      checkDiscovery(intent, params, dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(discoverHomePageSimpleElement).toHaveBeenCalledWith('something');
    });

    it('should check homepage discovery with discoverHomePageHobbiesElement', () => {
      const intent = 'homepage-something-else';
      const params = 'params';
      const dispatch = jest.fn();

      checkDiscovery(intent, params, dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(discoverHomePageHobbiesElement).toHaveBeenCalledWith('else');
    });

    it('should check experience discovery with discoverExperiencePageInit', () => {
      const intent = 'experience-init';
      const params = 'params';
      const dispatch = jest.fn();

      checkDiscovery(intent, params, dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(discoverExperiencePageInit).toHaveBeenCalled();
    });

    it('should check experience discovery with discoverExperiencePageInfo', () => {
      const intent = 'experience-something';
      const params = { 'experience-companies': 'test' };
      const dispatch = jest.fn();

      checkDiscovery(intent, params, dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(discoverExperiencePageInfo).toHaveBeenCalledWith('test', 'something');
    });

    it('should return intent if nothing discovered', () => {
      const intent = 'nothing-matches-this-intent';
      const params = 'params';
      const dispatch = jest.fn();

      const result = checkDiscovery(intent, params, dispatch);

      expect(dispatch).not.toHaveBeenCalled();
      expect(result).toEqual(intent);
    });
  });
});
