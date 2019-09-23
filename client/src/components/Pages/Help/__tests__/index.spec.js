import React from 'react';
import { create } from 'react-test-renderer';

import Help from '../../Help';

const mockComponent = props => (
  <Help {...props} />
);

describe('components/Pages/<Help />', () => {
  it('should render component with no feedbacks', () => {
    const tree = create(mockComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
