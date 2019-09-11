import { createSelector } from 'reselect';

const selectHomePageDomain = () => state => state.get('homePageDomain');

const selectDiscovered = () => createSelector(
  selectHomePageDomain(),
  homePageDomain => homePageDomain.get('discovered'),
);

const selectName = () => createSelector(
  selectHomePageDomain(),
  homePageDomain => homePageDomain.get('name'),
);

const selectPosition = () => createSelector(
  selectHomePageDomain(),
  homePageDomain => homePageDomain.get('position'),
);

const selectLocation = () => createSelector(
  selectHomePageDomain(),
  homePageDomain => homePageDomain.get('location'),
);

const selectContacts = () => createSelector(
  selectHomePageDomain(),
  homePageDomain => homePageDomain.get('contacts'),
);

const selectAge = () => createSelector(
  selectHomePageDomain(),
  homePageDomain => homePageDomain.get('age'),
);

const selectNationality = () => createSelector(
  selectHomePageDomain(),
  homePageDomain => homePageDomain.get('nationality'),
);

const selectAboutMe = () => createSelector(
  selectHomePageDomain(),
  homePageDomain => homePageDomain.get('about'),
);

const selectLanguages = () => createSelector(
  selectHomePageDomain(),
  homePageDomain => homePageDomain.get('languages'),
);

const selectHobbies = () => createSelector(
  selectHomePageDomain(),
  homePageDomain => homePageDomain.get('hobbies').toJS(),
);

export {
  selectDiscovered,
  selectName,
  selectPosition,
  selectLocation,
  selectContacts,
  selectAge,
  selectNationality,
  selectAboutMe,
  selectLanguages,
  selectHobbies,
};
