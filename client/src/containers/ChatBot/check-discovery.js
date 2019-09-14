import {
  discoverHomePageSimpleElement,
  discoverHomePageHobbiesElement,
} from 'containers/HomePage/actions';

const checkHomePageDiscovery = (intentArray, dispatch) => {
  if (intentArray.length === 2) {
    return dispatch(discoverHomePageSimpleElement(intentArray[1]));
  }

  return dispatch(discoverHomePageHobbiesElement(intentArray[2]));
};

export const checkDiscovery = (intent, dispatch) => {
  const splitted = intent.split('-');

  switch (splitted[0]) {
    case 'homepage':
      return checkHomePageDiscovery(splitted, dispatch);
    default:
      return intent;
  }
};
