import {
  discoverHomePageSimpleElement,
  discoverHomePageHobbiesElement,
} from '../../containers/HomePage/actions';

const checkHomePageDiscovery = (intentArray, dispatch) => {
  if (intentArray.length === 2) {
    return dispatch(discoverHomePageSimpleElement(intentArray[1]));
  }

  return dispatch(discoverHomePageHobbiesElement(intentArray[2]));
};

export const checkDiscovery = (intent, dispatch) => {
  const splitted = intent.split('-');

  if (splitted[0] === 'homepage') {
    checkHomePageDiscovery(splitted, dispatch);
  }
};
