import {
  discoverHomePageSimpleElement,
  discoverHomePageHobbiesElement,
} from 'containers/HomePage/actions';

import {
  discoverExperiencePageInit,
  discoverExperiencePageInfo,
} from 'containers/ExperiencePage/actions';

import {
  discoverEducationPageInit,
  discoverEducationPageCertificates,
  discoverEducationPageInfo,
} from 'containers/EducationPage/actions';

import {
  discoverProjectsPageInit,
  discoverProjectsPageInfo,
} from 'containers/ProjectsPage/actions';

const checkHomePageDiscovery = (intentArray, dispatch) => {
  if (intentArray.length === 2) {
    return dispatch(discoverHomePageSimpleElement(intentArray[1]));
  }

  return dispatch(discoverHomePageHobbiesElement(intentArray[2]));
};

const checkExperienceDiscovery = (intentArray, params, dispatch) => {
  const companyName = params['experience-companies'];

  if (companyName) {
    return dispatch(discoverExperiencePageInfo(companyName, intentArray[1]));
  }

  if (intentArray[1] === 'init') {
    return dispatch(discoverExperiencePageInit());
  }

  return null;
};

const checkEducationDiscovery = (intentArray, params, dispatch) => {
  const degreeName = params['education-degree'];

  if (degreeName) {
    return dispatch(discoverEducationPageInfo(degreeName, intentArray[1]));
  }

  switch (intentArray[1]) {
    case 'init':
      return dispatch(discoverEducationPageInit());
    case 'certificates':
      return dispatch(discoverEducationPageCertificates());
    default:
      return null;
  }
};

const checkProjectsDiscovery = (intentArray, params, dispatch) => {
  const projectName = params['projects-project'];

  if (projectName) {
    return dispatch(discoverProjectsPageInfo(projectName, intentArray[1]));
  }

  if (intentArray[1] === 'init') {
    return dispatch(discoverProjectsPageInit());
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
    case 'education':
      return checkEducationDiscovery(splitted, params, dispatch);
    case 'projects':
      return checkProjectsDiscovery(splitted, params, dispatch);
    default:
      return intent;
  }
};
