import { actionTypes as at } from './constants';

export const discoverProjectsPageInit = () => ({
  type: at.DISCOVER_PROJECTS_INIT,
});

export const discoverProjectsPageInfo = (section, data) => ({
  type: at.DISCOVER_PROJECTS_INFO,
  payload: { section, data },
});
