import React from 'react';
import { create } from 'react-test-renderer';

import Education from '../../Education';

jest.mock('components/Common/EmptyView', () => 'EmptyView');
jest.mock('components/Common/ProgressBar', () => 'ProgressBar');
jest.mock('components/Common/EducationItem', () => 'EducationItem');
jest.mock('components/Common/CertificationItem', () => 'CertificationItem');

const mockComponent = props => (
  <Education {...props} />
);

describe('components/Pages/<Education />', () => {
  it('should render component not discovered', () => {
    const props = { discovered: false };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component discovered', () => {
    const props = {
      discovered: true,
      discoveryPercent: 50,
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
