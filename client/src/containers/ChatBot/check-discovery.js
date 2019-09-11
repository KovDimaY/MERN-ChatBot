import {
  discoverHomePage, discoverName,
  discoverPosition, discoverLocation,
  discoverContactInfo, discoverAge,
  discoverNationality, discoverAboutMe,
  discoverLanguages, discoverHobbies,
} from '../../containers/HomePage/actions';

let homePageDiscovered = false;

export const checkDiscovery = (intent, dispatch) => {
  if (!homePageDiscovered && intent.split('-')[0] === 'homepage') {
    dispatch(discoverHomePage());
    homePageDiscovered = true;
  }

  switch (intent) {
    case 'homepage-name':
      return dispatch(discoverName());
    case 'homepage-profession':
      return dispatch(discoverPosition());
    case 'homepage-location':
      return dispatch(discoverLocation());
    case 'homepage-contacts':
      return dispatch(discoverContactInfo());
    case 'homepage-age':
      return dispatch(discoverAge());
    case 'homepage-nationality':
      return dispatch(discoverNationality());
    case 'homepage-aboutme':
      return dispatch(discoverAboutMe());
    case 'homepage-languages':
      return dispatch(discoverLanguages());
    case 'homepage-hobbies':
      return dispatch(discoverHobbies());
    default:
      return null;
  }
};
