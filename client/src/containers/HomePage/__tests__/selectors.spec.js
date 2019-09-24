import { fromJS } from 'immutable';

import {
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
  selectDiscoveryPercent,
} from '../selectors';

jest.mock('utils/common', () => ({
  getDiscoveryPercentage: () => ({ discovered: 5, total: 10 }),
}));

describe('containers/HomePage/selectors', () => {
  describe('selectDiscovered', () => {
    it('should select discovered', () => {
      const selector = selectDiscovered();
      const discovered = true;
      const homePageDomain = fromJS({ discovered });
      const mockedState = fromJS({ homePageDomain });

      expect(selector(mockedState)).toEqual(discovered);
    });
  });

  describe('selectName', () => {
    it('should select name', () => {
      const selector = selectName();
      const name = true;
      const homePageDomain = fromJS({ name });
      const mockedState = fromJS({ homePageDomain });

      expect(selector(mockedState)).toEqual(name);
    });
  });

  describe('selectPosition', () => {
    it('should select position', () => {
      const selector = selectPosition();
      const position = true;
      const homePageDomain = fromJS({ position });
      const mockedState = fromJS({ homePageDomain });

      expect(selector(mockedState)).toEqual(position);
    });
  });

  describe('selectLocation', () => {
    it('should select location', () => {
      const selector = selectLocation();
      const location = true;
      const homePageDomain = fromJS({ location });
      const mockedState = fromJS({ homePageDomain });

      expect(selector(mockedState)).toEqual(location);
    });
  });

  describe('selectContacts', () => {
    it('should select contacts', () => {
      const selector = selectContacts();
      const contacts = true;
      const homePageDomain = fromJS({ contacts });
      const mockedState = fromJS({ homePageDomain });

      expect(selector(mockedState)).toEqual(contacts);
    });
  });

  describe('selectAge', () => {
    it('should select age', () => {
      const selector = selectAge();
      const age = true;
      const homePageDomain = fromJS({ age });
      const mockedState = fromJS({ homePageDomain });

      expect(selector(mockedState)).toEqual(age);
    });
  });

  describe('selectNationality', () => {
    it('should select nationality', () => {
      const selector = selectNationality();
      const nationality = true;
      const homePageDomain = fromJS({ nationality });
      const mockedState = fromJS({ homePageDomain });

      expect(selector(mockedState)).toEqual(nationality);
    });
  });

  describe('selectAboutMe', () => {
    it('should select about', () => {
      const selector = selectAboutMe();
      const about = true;
      const homePageDomain = fromJS({ about });
      const mockedState = fromJS({ homePageDomain });

      expect(selector(mockedState)).toEqual(about);
    });
  });

  describe('selectLanguages', () => {
    it('should select languages', () => {
      const selector = selectLanguages();
      const languages = true;
      const homePageDomain = fromJS({ languages });
      const mockedState = fromJS({ homePageDomain });

      expect(selector(mockedState)).toEqual(languages);
    });
  });

  describe('selectHobbies', () => {
    it('should select hobbies', () => {
      const selector = selectHobbies();
      const hobbies = { discovered: true };
      const homePageDomain = fromJS({ hobbies });
      const mockedState = fromJS({ homePageDomain });

      expect(selector(mockedState)).toEqual(hobbies);
    });
  });

  describe('selectDiscoveryPercent', () => {
    it('should select discovery persentage', () => {
      const selector = selectDiscoveryPercent();
      const whatever = { whatever: 'whatever' };
      const homePageDomain = fromJS({ whatever });
      const mockedState = fromJS({ homePageDomain });

      expect(selector(mockedState)).toEqual(50);
    });
  });
});
