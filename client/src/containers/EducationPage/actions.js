import { actionTypes as at } from './constants';

export const discoverEducationPageInit = () => ({
  type: at.DISCOVER_EDUCATION_INIT,
});

export const discoverEducationPageCertificates = () => ({
  type: at.DISCOVER_EDUCATION_CERTIFICATES,
});

export const discoverEducationPageInfo = (section, data) => ({
  type: at.DISCOVER_EDUCATION_INFO,
  payload: { section, data },
});
