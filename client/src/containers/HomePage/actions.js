import { actionTypes as at } from './constants';

export const discoverHomePageSimpleElement = element => ({
  type: at.DISCOVER_SIMPLE_ELEMENT,
  payload: element,
});

export const discoverHomePageHobbiesElement = element => ({
  type: at.DISCOVER_HOBBIES_ELEMENT,
  payload: element,
});
