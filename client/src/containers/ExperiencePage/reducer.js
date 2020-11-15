import { fromJS } from 'immutable';

import { actionTypes as at } from './constants';

export const initialState = fromJS({
  discovered: false,
  cornerjob: fromJS({
    position: false,
    duration: false,
    description: false,
    technologies: false,
  }),
  bigfinite: fromJS({
    position: false,
    duration: false,
    description: false,
    technologies: false,
  }),
  enixan: fromJS({
    position: false,
    duration: false,
    description: false,
    responsibilities: false,
  }),
  mbas: fromJS({
    position: false,
    duration: false,
    description: false,
    responsibilities: false,
  }),
  icicle: fromJS({
    position: false,
    duration: false,
    description: false,
  }),
});

export default (state = initialState, action) => {
  switch (action.type) {
    case at.DISCOVER_EXPERIENCE_INIT:
      return state.set('discovered', true);
    case at.DISCOVER_EXPERIENCE_INFO: {
      return state
        .set('discovered', true)
        .set(
          action.payload.section,
          state.get(action.payload.section).set(action.payload.data, true)
        );
    }
    default:
      return state;
  }
};
