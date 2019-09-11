import { createSelector } from 'reselect';

const selectHomePageDomain = () => state => state.get('homePageDomain');

const selectDiscovered = () => createSelector(
  selectHomePageDomain(),
  applicationDomain => applicationDomain.get('discovered'),
);

const selectName = () => createSelector(
  selectHomePageDomain(),
  applicationDomain => applicationDomain.get('name'),
);

const selectPosition = () => createSelector(
  selectHomePageDomain(),
  applicationDomain => applicationDomain.get('position'),
);

const selectLocation = () => createSelector(
  selectHomePageDomain(),
  applicationDomain => applicationDomain.get('location'),
);

const selectContactInfo = () => createSelector(
  selectHomePageDomain(),
  applicationDomain => applicationDomain.get('contactInfo'),
);

const selectAge = () => createSelector(
  selectHomePageDomain(),
  applicationDomain => applicationDomain.get('age'),
);

const selectNationality = () => createSelector(
  selectHomePageDomain(),
  applicationDomain => applicationDomain.get('nationality'),
);

const selectAboutMe = () => createSelector(
  selectHomePageDomain(),
  applicationDomain => applicationDomain.get('aboutMe'),
);

const selectLanguages = () => createSelector(
  selectHomePageDomain(),
  applicationDomain => applicationDomain.get('languages'),
);

const selectHobbies = () => createSelector(
  selectHomePageDomain(),
  applicationDomain => applicationDomain.get('hobbies').toJS(),
);

export {
  selectDiscovered,
  selectName,
  selectPosition,
  selectLocation,
  selectContactInfo,
  selectAge,
  selectNationality,
  selectAboutMe,
  selectLanguages,
  selectHobbies,
};
