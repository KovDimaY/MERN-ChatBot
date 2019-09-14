import {
  discoverHomePageSimpleElement,
  discoverHomePageHobbiesElement,
} from 'containers/HomePage/actions';

import {
  checkDiscovery,
} from '../check-discovery';

jest.mock('containers/HomePage/actions', () => ({
  discoverHomePageSimpleElement: jest.fn(),
  discoverHomePageHobbiesElement: jest.fn(),
}));

describe('containers/Chatbot/check-discovery.js', () => {
  describe('checkDiscovery()', () => {
    it('should check homepage discovery with discoverHomePageSimpleElement', () => {
      const intent = 'homepage-something';
      const dispatch = jest.fn();

      checkDiscovery(intent, dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(discoverHomePageSimpleElement).toHaveBeenCalledWith('something');
    });
  });

  describe('checkDiscovery()', () => {
    it('should check homepage discovery with discoverHomePageHobbiesElement', () => {
      const intent = 'homepage-something-else';
      const dispatch = jest.fn();

      checkDiscovery(intent, dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(discoverHomePageHobbiesElement).toHaveBeenCalledWith('else');
    });
  });

  describe('checkDiscovery()', () => {
    it('should return intent if nothing discovered', () => {
      const intent = 'nothing-matches-this-intent';
      const dispatch = jest.fn();

      const result = checkDiscovery(intent, dispatch);

      expect(dispatch).not.toHaveBeenCalled();
      expect(result).toEqual(intent);
    });
  });
});
