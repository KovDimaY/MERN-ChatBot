import { fromJS } from 'immutable';
import { actionTypes as at } from '../constants';

import reducer, { initialState } from '../reducer';

describe('containers/EducationPage/reducer', () => {
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

  it('handles actions of type DISCOVER_EDUCATION_INIT', () => {
    const state = fromJS({
      discovered: false,
      test: false,
    });
    const action = {
      type: at.DISCOVER_EDUCATION_INIT,
    };
    const expected = fromJS({
      discovered: true,
      test: false,
    });

    const newState = reducer(state, action);

    expect(newState).toEqual(expected);
  });

  it('handles actions of type DISCOVER_EDUCATION_CERTIFICATES', () => {
    const state = fromJS({
      discovered: false,
      certificates: false,
      other: false,
    });
    const action = {
      type: at.DISCOVER_EDUCATION_CERTIFICATES,
    };
    const expected = fromJS({
      discovered: true,
      certificates: true,
      other: false,
    });

    const newState = reducer(state, action);

    expect(newState).toEqual(expected);
  });

  it('handles actions of type DISCOVER_EDUCATION_INFO', () => {
    const state = fromJS({
      discovered: false,
      certificates: false,
      master: fromJS({
        topic: false,
        activity: false,
      }),
    });
    const action = {
      type: at.DISCOVER_EDUCATION_INFO,
      payload: {
        section: 'master',
        data: 'topic',
      },
    };
    const expected = fromJS({
      discovered: true,
      certificates: false,
      master: fromJS({
        topic: true,
        activity: false,
      }),
    });

    const newState = reducer(state, action);

    expect(newState).toEqual(expected);
  });
});
