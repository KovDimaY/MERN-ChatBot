import React from 'react';
import { create } from 'react-test-renderer';

import Home from '../../Home';

jest.mock('components/Common/EmptyView', () => 'EmptyView');
jest.mock('components/Common/ProgressBar', () => 'ProgressBar');
jest.mock('components/Common/LanguageItem', () => 'LanguageItem');
jest.mock('components/Common/HobbyItem', () => 'HobbyItem');
jest.mock('utils/common', () => ({
  getAgeByBirthdate: jest.fn(() => 26),
  showHiddenText: jest.fn(() => '***'),
}));

const mockComponent = props => <Home {...props} />;

describe('components/Pages/<Home />', () => {
  it('should render component with empty props', () => {
    const tree = create(mockComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with discovered but all hidden', () => {
    const props = {
      discovered: true,
      discoveryPercent: 50,
      hobbies: {},
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with all discovered', () => {
    const props = {
      discovered: true,
      discoveryPercent: 100,
      name: true,
      position: true,
      location: true,
      contacts: true,
      age: true,
      nationality: true,
      aboutMe: true,
      languages: true,
      hobbies: {
        discovered: true,
        programming: true,
        sports: true,
        puzzles: true,
        numismatics: true,
        photography: true,
      },
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
