import React from 'react';
import { create } from 'react-test-renderer';

import HomePage from 'containers/HomePage';
import Experience from 'containers/ExperiencePage';
import Education from 'containers/EducationPage';
import Projects from 'containers/ProjectsPage';

import App, {
  HomeAdapted,
  ExperienceAdapted,
  EducationAdapted,
  ProjectsAdapted,
} from '../../App';

jest.mock('containers/HomePage', () => 'Home');
jest.mock('containers/ExperiencePage', () => 'Experience');
jest.mock('containers/EducationPage', () => 'Education');
jest.mock('containers/ProjectsPage', () => 'Projects');
jest.mock('../../Pages/Disclaimer', () => 'Disclaimer');
jest.mock('../../Pages/Feedback', () => 'Feedback');
jest.mock('hoc/layout', () => 'Layout');
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

  it('should return correct component for HomePage', () => {
    const expected = <HomePage />;

    const result = HomeAdapted();

    expect(result).toEqual(expected);
  });

  it('should return correct component for ExperiencePage', () => {
    const expected = <Experience />;

    const result = ExperienceAdapted();

    expect(result).toEqual(expected);
  });

  it('should return correct component for EducationPage', () => {
    const expected = <Education />;

    const result = EducationAdapted();

    expect(result).toEqual(expected);
  });

  it('should return correct component for ProjectsPage', () => {
    const expected = <Projects />;

    const result = ProjectsAdapted();

    expect(result).toEqual(expected);
  });
});
