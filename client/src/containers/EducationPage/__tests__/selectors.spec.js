import { fromJS } from 'immutable';

import {
  selectDiscovered,
  selectCertificates,
  selectMaster,
  selectBachelor,
  selectDiscoveryPercent,
} from '../selectors';

jest.mock('utils/common', () => ({
  getDiscoveryPercentage: () => ({ discovered: 5, total: 10 }),
}));

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

  describe('selectDiscoveryPercent', () => {
    it('should select discovery persentage', () => {
      const selector = selectDiscoveryPercent();
      const whatever = { whatever: 'whatever' };
      const educationPageDomain = fromJS({ whatever });
      const mockedState = fromJS({ educationPageDomain });

      expect(selector(mockedState)).toEqual(50);
    });
  });
});
