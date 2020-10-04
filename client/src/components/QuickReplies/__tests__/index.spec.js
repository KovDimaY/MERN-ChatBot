import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import QuickReplies from '../../QuickReplies';

jest.mock('../../Common/QuickReplyItem', () => 'QuickReplyItem');

const mockComponent = props => <QuickReplies {...props} />;

describe('components/<QuickReplies />', () => {
  it('should render component with no data', () => {
    const props = { data: {} };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with data', () => {
    const props = {
      data: {
        values: [
          {
            id: 'id-1',
            type: 'link',
            text: 'test-link',
            value: 'value-link',
          },
          {
            id: 'id-2',
            type: 'text',
            text: 'test-text',
            value: 'value-text',
          },
          {
            id: 'id-3',
            type: 'trigger',
            text: 'test-trigger',
            value: 'value-trigger',
          },
        ],
      },
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call onReply and setState when handleReply is called', () => {
    const onReply = jest.fn();
    const setState = jest.fn();
    const type = 'type';
    const value = 'value';
    const props = { onReply };

    const instance = mount(mockComponent(props)).instance();

    instance.setState = setState;
    instance.handleReply(type, value);

    expect(onReply).toHaveBeenCalledWith(type, value);
    expect(setState).toHaveBeenCalledWith({ answered: true });
  });
});
