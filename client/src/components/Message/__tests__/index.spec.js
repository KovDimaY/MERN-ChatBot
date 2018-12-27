import React from 'react';
import { create } from 'react-test-renderer';

import Message from '../../Message';

jest.mock('../../Cards', () => 'Cards');
jest.mock('../../QuickReplies', () => 'QuickReplies');

const mockComponent = props => (
  <Message {...props} />
);

describe('components/<Message />', () => {
  it('should render component of type text from user', () => {
    const props = {
      type: 'text',
      msg: 'test',
      author: 'user',
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component of type payload (card) from bot', () => {
    const props = {
      type: 'payload',
      msg: { type: 'cards' },
      author: 'bot',
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component of type payload (quick-replies) from bot', () => {
    const props = {
      type: 'payload',
      msg: { type: 'quick-replies' },
      author: 'bot',
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component of type payload (wrong) from bot', () => {
    const props = {
      type: 'payload',
      msg: 'error message',
      author: 'bot',
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component of wrong type from user', () => {
    const props = {
      type: 'wrong',
      msg: 'test',
      author: 'user',
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
