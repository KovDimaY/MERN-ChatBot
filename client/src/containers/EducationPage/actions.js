import { actionTypes as at } from './constants';

export const discoverExperiencePageInit = () => ({
  type: at.DISCOVER_EXPERIENCE_INIT,
});

export const discoverExperiencePageInfo = (section, data) => ({
  type: at.DISCOVER_EXPERIENCE_INFO,
  payload: { section, data },
});
