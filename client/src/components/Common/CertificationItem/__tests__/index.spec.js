import React from 'react';
import { create } from 'react-test-renderer';

import CertificationItem from '../../CertificationItem';

const mockComponent = props => (
  <CertificationItem {...props} />
);

describe('components/Common/<CertificationItem />', () => {
  it('should render component with required props when not discovered', () => {
    const props = {
      title: 'title',
      image: 'image',
      url: 'url',
      discovered: false,
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with required props when discovered', () => {
    const props = {
      title: 'title',
      image: 'image',
      url: 'url',
      discovered: true,
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
