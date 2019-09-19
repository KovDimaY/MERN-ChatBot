import { combineReducers } from 'redux-immutable';

import HomePageReducer from 'containers/HomePage/reducer';
import ExperiencePageReducer from 'containers/ExperiencePage/reducer';
import EducationPageReducer from 'containers/EducationPage/reducer';

const rootReducer = combineReducers({
  homePageDomain: HomePageReducer,
  experiencePageDomain: ExperiencePageReducer,
  educationPageDomain: EducationPageReducer,
});

export default rootReducer;
