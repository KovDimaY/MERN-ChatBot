import React from 'react';
import { create } from 'react-test-renderer';

import { HomePageContainer } from '../../HomePage';

jest.mock('components/Pages/Home', () => 'Home');

const mockComponent = props => <HomePageContainer {...props} />;

describe('containers/<HomePage />', () => {
  it('should render component', () => {
    const props = {
      discovered: 'discovered',
      name: 'name',
      position: 'position',
      location: 'location',
      contacts: 'contacts',
      age: 'age',
      nationality: 'nationality',
      aboutMe: 'aboutMe',
      languages: 'languages',
      hobbies: 'hobbies',
    };
    const tree = create(mockComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
