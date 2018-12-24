import React from 'react';
import { create } from 'react-test-renderer';

import EmptyView from '../../EmptyView';

describe('components/Common/<EmptyView />', () => {
  it('should render component without children', () => {
    const mockComponent = <EmptyView section="test" />;
    const tree = create(mockComponent).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with children', () => {
    const mockComponent = <EmptyView section="test">This is a test</EmptyView>;
    const tree = create(mockComponent).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
