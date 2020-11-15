import React from 'react';
import { create } from 'react-test-renderer';

import Layout from '../layout';

jest.mock('components/Header', () => 'Header');
jest.mock('containers/ChatBot', () => 'ChatBot');

const mockComponent = props => <Layout {...props} />;

describe('hoc/layout', () => {
  it('should render component', () => {
    const props = {
      children: <div>test</div>,
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
