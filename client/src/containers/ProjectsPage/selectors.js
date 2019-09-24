import { createSelector } from 'reselect';
import { getDiscoveryPercentage } from 'utils/common';

const selectProjectsPageDomain = () => state => state.get('projectsPageDomain');

const selectDiscovered = () => createSelector(
  selectProjectsPageDomain(),
  projectsPageDomain => projectsPageDomain.get('discovered'),
);

const selectTrips = () => createSelector(
  selectProjectsPageDomain(),
  projectsPageDomain => projectsPageDomain.get('trips').toJS(),
);

const selectCharts = () => createSelector(
  selectProjectsPageDomain(),
  projectsPageDomain => projectsPageDomain.get('charts').toJS(),
);

const selectChat = () => createSelector(
  selectProjectsPageDomain(),
  projectsPageDomain => projectsPageDomain.get('chat').toJS(),
);

const selectMemory = () => createSelector(
  selectProjectsPageDomain(),
  projectsPageDomain => projectsPageDomain.get('memory').toJS(),
);

const selectKovdimay = () => createSelector(
  selectProjectsPageDomain(),
  projectsPageDomain => projectsPageDomain.get('kovdimay').toJS(),
);

const selectDiscoveryPercent = () => createSelector(
  selectProjectsPageDomain(),
  (projectsPageDomain) => {
    const { discovered, total } = getDiscoveryPercentage(projectsPageDomain);

    return Math.round((discovered * 100) / total);
  },
);

export {
  selectDiscovered,
  selectTrips,
  selectCharts,
  selectChat,
  selectMemory,
  selectKovdimay,
  selectDiscoveryPercent,
};
