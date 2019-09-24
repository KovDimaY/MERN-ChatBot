import { fromJS } from 'immutable';
import { actionTypes as at } from '../constants';

import reducer, { initialState } from '../reducer';

describe('containers/HomePage/reducer', () => {
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

  it('handles actions of type DISCOVER_SIMPLE_ELEMENT', () => {
    const state = fromJS({
      discovered: false,
      test: false,
    });
    const action = {
      type: at.DISCOVER_SIMPLE_ELEMENT,
      payload: 'test',
    };
    const expected = fromJS({
      discovered: true,
      test: true,
    });

    const newState = reducer(state, action);

    expect(newState).toEqual(expected);
  });

  it('handles actions of type DISCOVER_HOBBIES_ELEMENT', () => {
    const state = fromJS({
      discovered: false,
      hobbies: fromJS({
        discovered: false,
        test: false,
      }),
    });
    const action = {
      type: at.DISCOVER_HOBBIES_ELEMENT,
      payload: 'test',
    };
    const expected = fromJS({
      discovered: true,
      hobbies: fromJS({
        discovered: true,
        test: true,
      }),
    });

    const newState = reducer(state, action);

    expect(newState).toEqual(expected);
  });
});
