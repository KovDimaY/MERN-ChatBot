import React from 'react';
import { create } from 'react-test-renderer';

import Experience from '../../Experience';

jest.mock('../../../Common/ExperienceItem', () => 'ExperienceItem');

const mockComponent = props => (
  <Experience {...props} />
);

describe('components/Pages/<Experience />', () => {
  it('should render component', () => {
    const tree = create(mockComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
