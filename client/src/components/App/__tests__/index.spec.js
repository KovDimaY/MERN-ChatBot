import React from 'react';
import { create } from 'react-test-renderer';

import App from '../../App';

jest.mock('../../Pages/Disclaimer', () => 'Disclaimer');
jest.mock('../../Pages/Home', () => 'Home');
jest.mock('../../Pages/Education', () => 'Education');
jest.mock('../../Pages/Experience', () => 'Experience');
jest.mock('../../Pages/Projects', () => 'Projects');
jest.mock('../../Pages/Feedback', () => 'Feedback');
jest.mock('../../../hoc/layout', () => 'Layout');
jest.mock('react-router-dom', () => ({
  Switch: 'Switch',
  Route: 'Route',
  BrowserRouter: 'BrowserRouter',
}));

const mockComponent = props => (
  <App {...props} />
);

describe('components/<App />', () => {
  it('should render component', () => {
    const tree = create(mockComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
