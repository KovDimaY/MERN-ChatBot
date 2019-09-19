import {
  discoverHomePageSimpleElement,
  discoverHomePageHobbiesElement,
} from 'containers/HomePage/actions';

import {
  discoverExperiencePageInit,
  discoverExperiencePageInfo,
} from 'containers/ExperiencePage/actions';

const checkHomePageDiscovery = (intentArray, dispatch) => {
  if (intentArray.length === 2) {
    return dispatch(discoverHomePageSimpleElement(intentArray[1]));
  }

  return dispatch(discoverHomePageHobbiesElement(intentArray[2]));
};

const checkExperienceDiscovery = (intentArray, params, dispatch) => {
  if (intentArray[1] === 'init') {
    return dispatch(discoverExperiencePageInit());
  }

  if (params['experience-companies']) {
    return dispatch(discoverExperiencePageInfo(params['experience-companies'], intentArray[1]));
  }

  return null;
};

export const checkDiscovery = (intent, params, dispatch) => {
  const splitted = intent.split('-');

  switch (splitted[0]) {
    case 'homepage':
      return checkHomePageDiscovery(splitted, dispatch);
    case 'experience':
      return checkExperienceDiscovery(splitted, params, dispatch);
    default:
      return intent;
  }
};
