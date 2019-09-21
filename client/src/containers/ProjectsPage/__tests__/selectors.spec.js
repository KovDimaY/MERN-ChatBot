import { fromJS } from 'immutable';

import {
  selectDiscovered,
  selectCertificates,
  selectMaster,
  selectBachelor,
} from '../selectors';

describe('containers/EducationPage/selectors', () => {
  describe('selectDiscovered', () => {
    it('should select discovered', () => {
      const selector = selectDiscovered();
      const discovered = true;
      const educationPageDomain = fromJS({ discovered });
      const mockedState = fromJS({ educationPageDomain });

      expect(selector(mockedState)).toEqual(discovered);
    });
  });

  describe('selectCertificates', () => {
    it('should select certificates', () => {
      const selector = selectCertificates();
      const certificates = true;
      const educationPageDomain = fromJS({ certificates });
      const mockedState = fromJS({ educationPageDomain });

      expect(selector(mockedState)).toEqual(certificates);
    });
  });

  describe('selectMaster', () => {
    it('should select master', () => {
      const selector = selectMaster();
      const master = { master: 'master' };
      const educationPageDomain = fromJS({ master });
      const mockedState = fromJS({ educationPageDomain });

      expect(selector(mockedState)).toEqual(master);
    });
  });

  describe('selectBachelor', () => {
    it('should select bachelor', () => {
      const selector = selectBachelor();
      const bachelor = { bachelor: 'bachelor' };
      const educationPageDomain = fromJS({ bachelor });
      const mockedState = fromJS({ educationPageDomain });

      expect(selector(mockedState)).toEqual(bachelor);
    });
  });
});
