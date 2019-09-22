import { fromJS } from 'immutable';
import { actionTypes as at } from '../constants';

import reducer, { initialState } from '../reducer';

describe('containers/ProjectsPage/reducer', () => {
  it('should return initial state', () => {
    const newState = reducer(undefined, {});

    expect(newState).toEqual(initialState);
  });

  it('handles actions of unknown type', () => {
    const action = {
      type: 'THIS IS UNKNOWN TYPE',
      payload: 'test',
    };
    const state = fromJS({
      test: false,
    });
    const expected = state;

    const newState = reducer(state, action);

    expect(newState).toEqual(expected);
  });

  it('handles actions of type DISCOVER_PROJECTS_INIT', () => {
    const state = fromJS({
      discovered: false,
      test: false,
    });
    const action = {
      type: at.DISCOVER_PROJECTS_INIT,
    };
    const expected = fromJS({
      discovered: true,
      test: false,
    });

    const newState = reducer(state, action);

    expect(newState).toEqual(expected);
  });

  it('handles actions of type DISCOVER_PROJECTS_INFO', () => {
    const state = fromJS({
      discovered: false,
      kovdimay: fromJS({
        topic: false,
        other: false,
      }),
    });
    const action = {
      type: at.DISCOVER_PROJECTS_INFO,
      payload: {
        section: 'kovdimay',
        data: 'topic',
      },
    };
    const expected = fromJS({
      discovered: true,
      kovdimay: fromJS({
        topic: true,
        other: false,
      }),
    });

    const newState = reducer(state, action);

    expect(newState).toEqual(expected);
  });
});
