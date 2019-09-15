import { actionTypes as at } from './constants';

export const discoverExperiencePageInfo = (section, data) => ({
  type: at.DISCOVER_EXPERIENCE_INFO,
  payload: { section, data },
});
