import React from 'react';
import { create } from 'react-test-renderer';

import { EducationPageContainer } from '../../EducationPage';

jest.mock('components/Pages/Education', () => 'EducationPage');

const mockComponent = props => (
  <EducationPageContainer {...props} />
);

describe('containers/<EducationPage />', () => {
  it('should render component', () => {
    const props = {
      discovered: true,
      certificates: true,
      bachelor: {},
      master: {},
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
