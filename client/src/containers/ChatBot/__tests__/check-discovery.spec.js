import {
  discoverHomePageSimpleElement,
  discoverHomePageHobbiesElement,
} from 'containers/HomePage/actions';

import {
  discoverExperiencePageInit,
  discoverExperiencePageInfo,
} from 'containers/ExperiencePage/actions';

import {
  discoverEducationPageInit,
  discoverEducationPageCertificates,
  discoverEducationPageInfo,
} from 'containers/EducationPage/actions';

import {
  discoverProjectsPageInit,
  discoverProjectsPageInfo,
} from 'containers/ProjectsPage/actions';

import {
  checkDiscovery,
} from '../check-discovery';

jest.mock('containers/HomePage/actions', () => ({
  discoverHomePageSimpleElement: jest.fn(),
  discoverHomePageHobbiesElement: jest.fn(),
}));

jest.mock('containers/ExperiencePage/actions', () => ({
  discoverExperiencePageInit: jest.fn(),
  discoverExperiencePageInfo: jest.fn(),
}));

jest.mock('containers/EducationPage/actions', () => ({
  discoverEducationPageInit: jest.fn(),
  discoverEducationPageCertificates: jest.fn(),
  discoverEducationPageInfo: jest.fn(),
}));

jest.mock('containers/ProjectsPage/actions', () => ({
  discoverProjectsPageInit: jest.fn(),
  discoverProjectsPageInfo: jest.fn(),
}));

describe('containers/Chatbot/check-discovery.js', () => {
  describe('checkDiscovery()', () => {
    describe('Homepage', () => {
      it('should check homepage discovery with discoverHomePageSimpleElement', () => {
        const intent = 'homepage-something';
        const params = 'params';
        const dispatch = jest.fn();

        checkDiscovery(intent, params, dispatch);

        expect(dispatch).toHaveBeenCalled();
        expect(discoverHomePageSimpleElement).toHaveBeenCalledWith('something');
      });

      it('should check homepage discovery with discoverHomePageHobbiesElement', () => {
        const intent = 'homepage-something-else';
        const params = 'params';
        const dispatch = jest.fn();

        checkDiscovery(intent, params, dispatch);

        expect(dispatch).toHaveBeenCalled();
        expect(discoverHomePageHobbiesElement).toHaveBeenCalledWith('else');
      });
    });

    describe('Experience', () => {
      it('should check experience discovery with discoverExperiencePageInit', () => {
        const intent = 'experience-init';
        const params = 'params';
        const dispatch = jest.fn();

        checkDiscovery(intent, params, dispatch);

        expect(dispatch).toHaveBeenCalled();
        expect(discoverExperiencePageInit).toHaveBeenCalled();
      });

      it('should check experience discovery with discoverExperiencePageInfo', () => {
        const intent = 'experience-something';
        const params = { 'experience-companies': 'test' };
        const dispatch = jest.fn();

        checkDiscovery(intent, params, dispatch);

        expect(dispatch).toHaveBeenCalled();
        expect(discoverExperiencePageInfo).toHaveBeenCalledWith('test', 'something');
      });

      it('should not discover anything if there is no experience param', () => {
        const intent = 'experience-something';
        const params = {};
        const dispatch = jest.fn();

        const result = checkDiscovery(intent, params, dispatch);

        expect(dispatch).not.toHaveBeenCalled();
        expect(result).toEqual(null);
      });
    });

    describe('Education', () => {
      it('should check education discovery with discoverEducationPageInit', () => {
        const intent = 'education-init';
        const params = 'params';
        const dispatch = jest.fn();

        checkDiscovery(intent, params, dispatch);

        expect(dispatch).toHaveBeenCalled();
        expect(discoverEducationPageInit).toHaveBeenCalled();
      });

      it('should check education discovery with discoverEducationPageCertificates', () => {
        const intent = 'education-certificates';
        const params = 'params';
        const dispatch = jest.fn();

        checkDiscovery(intent, params, dispatch);

        expect(dispatch).toHaveBeenCalled();
        expect(discoverEducationPageCertificates).toHaveBeenCalled();
      });

      it('should check education discovery with discoverEducationPageInfo', () => {
        const intent = 'education-something';
        const params = { 'education-degree': 'test' };
        const dispatch = jest.fn();

        checkDiscovery(intent, params, dispatch);

        expect(dispatch).toHaveBeenCalled();
        expect(discoverEducationPageInfo).toHaveBeenCalledWith('test', 'something');
      });

      it('should not discover anything if there is no education param', () => {
        const intent = 'education-something';
        const params = {};
        const dispatch = jest.fn();

        const result = checkDiscovery(intent, params, dispatch);

        expect(dispatch).not.toHaveBeenCalled();
        expect(result).toEqual(null);
      });
    });

    describe('Projects', () => {
      it('should check projects discovery with discoverProjectsPageInit', () => {
        const intent = 'projects-init';
        const params = 'params';
        const dispatch = jest.fn();

        checkDiscovery(intent, params, dispatch);

        expect(dispatch).toHaveBeenCalled();
        expect(discoverProjectsPageInit).toHaveBeenCalled();
      });

      it('should check projects discovery with discoverProjectsPageInfo', () => {
        const intent = 'projects-something';
        const params = { 'projects-project': 'test' };
        const dispatch = jest.fn();

        checkDiscovery(intent, params, dispatch);

        expect(dispatch).toHaveBeenCalled();
        expect(discoverProjectsPageInfo).toHaveBeenCalledWith('test', 'something');
      });

      it('should not discover anything if there is no projects param', () => {
        const intent = 'projects-something';
        const params = {};
        const dispatch = jest.fn();

        const result = checkDiscovery(intent, params, dispatch);

        expect(dispatch).not.toHaveBeenCalled();
        expect(result).toEqual(null);
      });
    });

    it('should return intent if nothing discovered', () => {
      const intent = 'nothing-matches-this-intent';
      const params = 'params';
      const dispatch = jest.fn();

      const result = checkDiscovery(intent, params, dispatch);

      expect(dispatch).not.toHaveBeenCalled();
      expect(result).toEqual(intent);
    });
  });
});
