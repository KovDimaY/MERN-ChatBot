import { fromJS } from 'immutable';

import {
  selectDiscovered,
  selectCornerjob,
  selectBigfinite,
  selectEnixan,
  selectMbas,
  selectIcicle,
} from '../selectors';

describe('containers/ExperiencePage/selectors', () => {
  describe('selectDiscovered', () => {
    it('should select discovered', () => {
      const selector = selectDiscovered();
      const discovered = true;
      const experiencePageDomain = fromJS({ discovered });
      const mockedState = fromJS({ experiencePageDomain });

      expect(selector(mockedState)).toEqual(discovered);
    });
  });

  describe('selectCornerjob', () => {
    it('should select cornerjob', () => {
      const selector = selectCornerjob();
      const cornerjob = { cornerjob: 'cornerjob' };
      const experiencePageDomain = fromJS({ cornerjob });
      const mockedState = fromJS({ experiencePageDomain });

      expect(selector(mockedState)).toEqual(cornerjob);
    });
  });

  describe('selectBigfinite', () => {
    it('should select bigfinite', () => {
      const selector = selectBigfinite();
      const bigfinite = { bigfinite: 'bigfinite' };
      const experiencePageDomain = fromJS({ bigfinite });
      const mockedState = fromJS({ experiencePageDomain });

      expect(selector(mockedState)).toEqual(bigfinite);
    });
  });

  describe('selectEnixan', () => {
    it('should select enixan', () => {
      const selector = selectEnixan();
      const enixan = { enixan: 'enixan' };
      const experiencePageDomain = fromJS({ enixan });
      const mockedState = fromJS({ experiencePageDomain });

      expect(selector(mockedState)).toEqual(enixan);
    });
  });

  describe('selectMbas', () => {
    it('should select mbas', () => {
      const selector = selectMbas();
      const mbas = { mbas: 'mbas' };
      const experiencePageDomain = fromJS({ mbas });
      const mockedState = fromJS({ experiencePageDomain });

      expect(selector(mockedState)).toEqual(mbas);
    });
  });

  describe('selectIcicle', () => {
    it('should select icicle', () => {
      const selector = selectIcicle();
      const icicle = { icicle: 'icicle' };
      const experiencePageDomain = fromJS({ icicle });
      const mockedState = fromJS({ experiencePageDomain });

      expect(selector(mockedState)).toEqual(icicle);
    });
  });
});
