import { createSelector } from 'reselect';
import { getDiscoveryPercentage } from 'utils/common';

const selectExperiencePageDomain = () => state =>
  state.get('experiencePageDomain');

const selectDiscovered = () =>
  createSelector(selectExperiencePageDomain(), experiencePageDomain =>
    experiencePageDomain.get('discovered')
  );

const selectCornerjob = () =>
  createSelector(selectExperiencePageDomain(), experiencePageDomain =>
    experiencePageDomain.get('cornerjob').toJS()
  );

const selectBigfinite = () =>
  createSelector(selectExperiencePageDomain(), experiencePageDomain =>
    experiencePageDomain.get('bigfinite').toJS()
  );

const selectEnixan = () =>
  createSelector(selectExperiencePageDomain(), experiencePageDomain =>
    experiencePageDomain.get('enixan').toJS()
  );

const selectMbas = () =>
  createSelector(selectExperiencePageDomain(), experiencePageDomain =>
    experiencePageDomain.get('mbas').toJS()
  );

const selectIcicle = () =>
  createSelector(selectExperiencePageDomain(), experiencePageDomain =>
    experiencePageDomain.get('icicle').toJS()
  );

const selectDiscoveryPercent = () =>
  createSelector(selectExperiencePageDomain(), experiencePageDomain => {
    const { discovered, total } = getDiscoveryPercentage(experiencePageDomain);

    return Math.round((discovered * 100) / total);
  });

export {
  selectDiscovered,
  selectCornerjob,
  selectBigfinite,
  selectEnixan,
  selectMbas,
  selectIcicle,
  selectDiscoveryPercent,
};
