import { createSelector } from 'reselect';
import { getDiscoveryPercentage } from 'utils/common';

const selectEducationPageDomain = () => state =>
  state.get('educationPageDomain');

const selectDiscovered = () =>
  createSelector(selectEducationPageDomain(), educationPageDomain =>
    educationPageDomain.get('discovered')
  );

const selectCertificates = () =>
  createSelector(selectEducationPageDomain(), educationPageDomain =>
    educationPageDomain.get('certificates')
  );

const selectMaster = () =>
  createSelector(selectEducationPageDomain(), educationPageDomain =>
    educationPageDomain.get('master').toJS()
  );

const selectBachelor = () =>
  createSelector(selectEducationPageDomain(), educationPageDomain =>
    educationPageDomain.get('bachelor').toJS()
  );

const selectDiscoveryPercent = () =>
  createSelector(selectEducationPageDomain(), educationPageDomain => {
    const { discovered, total } = getDiscoveryPercentage(educationPageDomain);

    return Math.round((discovered * 100) / total);
  });

export {
  selectDiscovered,
  selectCertificates,
  selectMaster,
  selectBachelor,
  selectDiscoveryPercent,
};
