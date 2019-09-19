import { createSelector } from 'reselect';

const selectEducationPageDomain = () => state => state.get('educationPageDomain');

const selectDiscovered = () => createSelector(
  selectEducationPageDomain(),
  experiencePageDomain => experiencePageDomain.get('discovered'),
);

const selectCertificates = () => createSelector(
  selectEducationPageDomain(),
  experiencePageDomain => experiencePageDomain.get('certificates'),
);

const selectMaster = () => createSelector(
  selectEducationPageDomain(),
  experiencePageDomain => experiencePageDomain.get('master').toJS(),
);

const selectBachelor = () => createSelector(
  selectEducationPageDomain(),
  experiencePageDomain => experiencePageDomain.get('bachelor').toJS(),
);

export {
  selectDiscovered,
  selectCertificates,
  selectMaster,
  selectBachelor,
};
