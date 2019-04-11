import React from 'react';
import { create } from 'react-test-renderer';

import CertificationItem from '../../CertificationItem';

const mockComponent = props => (
  <CertificationItem {...props} />
);

describe('components/Common/<CertificationItem />', () => {
  it('should render component with required props', () => {
    const props = {
      title: 'title',
      image: 'image',
      url: 'url',
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
