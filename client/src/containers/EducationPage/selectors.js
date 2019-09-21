import { createSelector } from 'reselect';

const selectEducationPageDomain = () => state => state.get('educationPageDomain');

const selectDiscovered = () => createSelector(
  selectEducationPageDomain(),
  educationPageDomain => educationPageDomain.get('discovered'),
);

const selectCertificates = () => createSelector(
  selectEducationPageDomain(),
  educationPageDomain => educationPageDomain.get('certificates'),
);

const selectMaster = () => createSelector(
  selectEducationPageDomain(),
  educationPageDomain => educationPageDomain.get('master').toJS(),
);

const selectBachelor = () => createSelector(
  selectEducationPageDomain(),
  educationPageDomain => educationPageDomain.get('bachelor').toJS(),
);

export {
  selectDiscovered,
  selectCertificates,
  selectMaster,
  selectBachelor,
};
