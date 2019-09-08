import React from 'react';
import { create } from 'react-test-renderer';

import Home from '../../Home';

jest.mock('components/Common/EmptyView', () => 'EmptyView');
jest.mock('components/Common/LanguageItem', () => 'LanguageItem');
jest.mock('components/Common/HobbyItem', () => 'HobbyItem');
jest.mock('utils/common', () => ({
  getAgeByBirthdate: jest.fn(() => 26),
}));

const mockComponent = props => (
  <Home {...props} />
);

describe('components/Pages/<Home />', () => {
  it('should render component', () => {
    const tree = create(mockComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
