import React from 'react';
import { create } from 'react-test-renderer';

import ProgressBar from '../../ProgressBar';

jest.mock('react-sweet-progress', () => ({ Progress: 'Progress' }));

const mockComponent = props => (
  <ProgressBar {...props} />
);

describe('components/Common/<ProgressBar />', () => {
  it('should render component with 15 percents', () => {
    const props = { percent: 15 };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with 40 percents', () => {
    const props = { percent: 40 };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with 65 percents', () => {
    const props = { percent: 65 };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with 80 percents', () => {
    const props = { percent: 80 };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with 100 percents', () => {
    const props = { percent: 100 };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with margintTop', () => {
    const props = {
      percent: 50,
      margintTop: true,
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
