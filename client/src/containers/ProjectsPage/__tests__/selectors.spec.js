import { fromJS } from 'immutable';

import {
  selectDiscovered,
  selectTrips,
  selectCharts,
  selectChat,
  selectMemory,
  selectKovdimay,
} from '../selectors';

describe('containers/ProjectsPage/selectors', () => {
  describe('selectDiscovered', () => {
    it('should select discovered', () => {
      const selector = selectDiscovered();
      const discovered = true;
      const projectsPageDomain = fromJS({ discovered });
      const mockedState = fromJS({ projectsPageDomain });

      expect(selector(mockedState)).toEqual(discovered);
    });
  });

  describe('selectTrips', () => {
    it('should select trips', () => {
      const selector = selectTrips();
      const trips = { trips: 'trips' };
      const projectsPageDomain = fromJS({ trips });
      const mockedState = fromJS({ projectsPageDomain });

      expect(selector(mockedState)).toEqual(trips);
    });
  });

  describe('selectCharts', () => {
    it('should select charts', () => {
      const selector = selectCharts();
      const charts = { charts: 'charts' };
      const projectsPageDomain = fromJS({ charts });
      const mockedState = fromJS({ projectsPageDomain });

      expect(selector(mockedState)).toEqual(charts);
    });
  });

  describe('selectChat', () => {
    it('should select chat', () => {
      const selector = selectChat();
      const chat = { chat: 'chat' };
      const projectsPageDomain = fromJS({ chat });
      const mockedState = fromJS({ projectsPageDomain });

      expect(selector(mockedState)).toEqual(chat);
    });
  });

  describe('selectMemory', () => {
    it('should select memory', () => {
      const selector = selectMemory();
      const memory = { memory: 'memory' };
      const projectsPageDomain = fromJS({ memory });
      const mockedState = fromJS({ projectsPageDomain });

      expect(selector(mockedState)).toEqual(memory);
    });
  });

  describe('selectKovdimay', () => {
    it('should select kovdimay', () => {
      const selector = selectKovdimay();
      const kovdimay = { kovdimay: 'kovdimay' };
      const projectsPageDomain = fromJS({ kovdimay });
      const mockedState = fromJS({ projectsPageDomain });

      expect(selector(mockedState)).toEqual(kovdimay);
    });
  });
});
