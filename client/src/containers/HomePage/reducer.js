import { fromJS } from 'immutable';

import { actionTypes as at } from './constants';

const initialState = fromJS({
  discovered: false,
  name: false,
  position: false,
  location: false,
  contactInfo: false,
  age: false,
  nationality: false,
  aboutMe: false,
  languages: false,
  hobbies: fromJS({
    discovered: false,
    programming: false,
    sports: false,
    puzzles: false,
    numismatics: false,
    photography: false,
  }),
});

export default (state = initialState, action) => {
  console.log("HomePage reducer: ", state, action);
  switch (action.type) {
    case at.DISCOVER_HOME_PAGE:
      return state.set('discovered', true);
    case at.DISCOVER_NAME:
      return state.set('name', true);
    case at.DISCOVER_POSITION:
      return state.set('position', true);
    case at.DISCOVER_LOCATION:
      return state.set('location', true);
    case at.DISCOVER_CONTACT_INFO:
      return state.set('contactInfo', true);
    case at.DISCOVER_AGE:
      return state.set('age', true);
    case at.DISCOVER_NATIONALITY:
      return state.set('nationality', true);
    case at.DISCOVER_ABOUT_ME:
      return state.set('aboutMe', true);
    case at.DISCOVER_LANGUAGES:
      return state.set('languages', true);
    case at.DISCOVER_HOBBIES:
      return state.set('hobbies', state.get('hobbies').set('discovered', true));
    default:
      return state;
  }
};
