import { combineReducers } from 'redux-immutable';

import HomePageReducer from 'containers/HomePage/reducer';
import ExperiencePageReducer from 'containers/ExperiencePage/reducer';

const rootReducer = combineReducers({
  homePageDomain: HomePageReducer,
  experiencePageDomain: ExperiencePageReducer,
});

export default rootReducer;
