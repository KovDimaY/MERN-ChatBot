import { fromJS } from 'immutable';

import { actionTypes as at } from './constants';

export const initialState = fromJS({
  discovered: false,
  name: false,
  position: false,
  location: false,
  contacts: false,
  age: false,
  nationality: false,
  about: false,
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
  switch (action.type) {
    case at.DISCOVER_SIMPLE_ELEMENT: {
      return state
        .set('discovered', true)
        .set(action.payload, true);
    }
    case at.DISCOVER_HOBBIES_ELEMENT: {
      return state
        .set('discovered', true)
        .set(
          'hobbies',
          state.get('hobbies')
            .set('discovered', true)
            .set(action.payload, true),
        );
    }
    default:
      return state;
  }
};
