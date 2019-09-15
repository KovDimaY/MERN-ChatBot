import { createSelector } from 'reselect';

const selectExperiencePageDomain = () => state => state.get('experiencePageDomain');

const selectDiscovered = () => createSelector(
  selectExperiencePageDomain(),
  experiencePageDomain => experiencePageDomain.get('discovered'),
);

const selectCornerjob = () => createSelector(
  selectExperiencePageDomain(),
  experiencePageDomain => experiencePageDomain.get('cornerjob').toJS(),
);

const selectBigfinite = () => createSelector(
  selectExperiencePageDomain(),
  experiencePageDomain => experiencePageDomain.get('bigfinite').toJS(),
);

const selectEnixan = () => createSelector(
  selectExperiencePageDomain(),
  experiencePageDomain => experiencePageDomain.get('enixan').toJS(),
);

const selectMbas = () => createSelector(
  selectExperiencePageDomain(),
  experiencePageDomain => experiencePageDomain.get('mbas').toJS(),
);

const selectIcicle = () => createSelector(
  selectExperiencePageDomain(),
  experiencePageDomain => experiencePageDomain.get('icicle').toJS(),
);

export {
  selectDiscovered,
  selectCornerjob,
  selectBigfinite,
  selectEnixan,
  selectMbas,
  selectIcicle,
};
