import { fromJS } from 'immutable';

import { actionTypes as at } from './constants';

export const initialState = fromJS({
  discovered: false,
  certificates: false,
  bachelor: fromJS({
    time: false,
    topic: false,
    activities: false,
  }),
  master: fromJS({
    time: false,
    topic: false,
    activities: false,
  }),
});

export default (state = initialState, action) => {
  switch (action.type) {
    case at.DISCOVER_EDUCATION_INIT:
      return state.set('discovered', true);
    case at.DISCOVER_EDUCATION_CERTIFICATES:
      return state
        .set('discovered', true)
        .set('certificates', true);
    case at.DISCOVER_EDUCATION_INFO: {
      return state
        .set('discovered', true)
        .set(
          action.payload.section,
          state
            .get(action.payload.section)
            .set(action.payload.data, true),
        );
    }
    default:
      return state;
  }
};
