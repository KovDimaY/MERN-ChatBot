import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  INIT, HOME, EXPERIENCE,
  EDUCATION, PROJECTS,
  FEEDBACK, HELP,
} from 'constants/routes';

import Layout from 'hoc/layout';

import Home from 'containers/HomePage';
import Experience from 'containers/ExperiencePage';
import Education from 'containers/EducationPage';
import Projects from 'containers/ProjectsPage';

import Disclaimer from '../Pages/Disclaimer';
import Feedback from '../Pages/Feedback';
import Help from '../Pages/Help';
import NotFound from '../Pages/404';

export const HomeAdapted = () => <Home />;
export const ExperienceAdapted = () => <Experience />;
export const EducationAdapted = () => <Education />;
export const ProjectsAdapted = () => <Projects />;

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path={INIT} exact component={Disclaimer} />
      <Layout>
        <Switch>
          <Route path={HOME} exact component={HomeAdapted} />
          <Route path={EXPERIENCE} exact component={ExperienceAdapted} />
          <Route path={EDUCATION} exact component={EducationAdapted} />
          <Route path={PROJECTS} exact component={ProjectsAdapted} />
          <Route path={FEEDBACK} exact component={Feedback} />
          <Route path={HELP} exact component={Help} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default App;
