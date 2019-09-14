import { combineReducers } from 'redux-immutable';

import HomePageReducer from 'containers/HomePage/reducer';

const rootReducer = combineReducers({
  homePageDomain: HomePageReducer,
});

export default rootReducer;
