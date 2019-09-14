import { actionTypes as at } from '../constants';

import {
  discoverHomePageSimpleElement,
  discoverHomePageHobbiesElement,
} from '../actions';

describe('containers/HomePage/actions', () => {
  describe('discoverHomePageSimpleElement', () => {
    it('should return correct action', () => {
      const element = 'simple-element';
      const expected = {
        type: at.DISCOVER_SIMPLE_ELEMENT,
        payload: element,
      };

      const result = discoverHomePageSimpleElement(element);

      expect(result).toEqual(expected);
    });
  });

  describe('discoverHomePageHobbiesElement', () => {
    it('should return correct action', () => {
      const element = 'hobbies-element';
      const expected = {
        type: at.DISCOVER_HOBBIES_ELEMENT,
        payload: element,
      };

      const result = discoverHomePageHobbiesElement(element);

      expect(result).toEqual(expected);
    });
  });
});
