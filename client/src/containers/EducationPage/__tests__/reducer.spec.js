import { fromJS } from 'immutable';
import { actionTypes as at } from '../constants';

import reducer, { initialState } from '../reducer';

describe('containers/ExperiencePage/reducer', () => {
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

  it('handles actions of type DISCOVER_EXPERIENCE_INIT', () => {
    const state = fromJS({
      discovered: false,
      test: false,
    });
    const action = {
      type: at.DISCOVER_EXPERIENCE_INIT,
    };
    const expected = fromJS({
      discovered: true,
      test: false,
    });

    const newState = reducer(state, action);

    expect(newState).toEqual(expected);
  });

  it('handles actions of type DISCOVER_EXPERIENCE_INFO', () => {
    const state = fromJS({
      discovered: false,
      cornerjob: fromJS({
        position: false,
        duration: false,
      }),
    });
    const action = {
      type: at.DISCOVER_EXPERIENCE_INFO,
      payload: {
        section: 'cornerjob',
        data: 'position',
      },
    };
    const expected = fromJS({
      discovered: true,
      cornerjob: fromJS({
        position: true,
        duration: false,
      }),
    });

    const newState = reducer(state, action);

    expect(newState).toEqual(expected);
  });
});
