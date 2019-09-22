import { fromJS } from 'immutable';

import { actionTypes as at } from './constants';

export const initialState = fromJS({
  discovered: true,
  trips: fromJS({
    tools: false,
    description: false,
  }),
  charts: fromJS({
    tools: false,
    description: false,
  }),
  chat: fromJS({
    tools: false,
    description: false,
  }),
  memory: fromJS({
    tools: false,
    description: false,
  }),
  kovdimay: fromJS({
    tools: false,
    description: false,
  }),
});

export default (state = initialState, action) => {
  switch (action.type) {
    case at.DISCOVER_PROJECTS_INIT:
      return state.set('discovered', true);
    case at.DISCOVER_PROJECTS_INFO: {
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
