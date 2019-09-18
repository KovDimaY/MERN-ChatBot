import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  INIT, HOME, EXPERIENCE,
  EDUCATION, PROJECTS,
  FEEDBACK,
} from 'constants/routes';

import Layout from 'hoc/layout';

import Home from 'containers/HomePage';
import Experience from 'containers/ExperiencePage';

import Disclaimer from '../Pages/Disclaimer';
import Education from '../Pages/Education';
import Projects from '../Pages/Projects';
import Feedback from '../Pages/Feedback';

export const HomeAdapted = () => <Home />;
export const ExperienceAdapted = () => <Experience />;

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path={INIT} exact component={Disclaimer} />
      <Layout>
        <Route path={HOME} exact component={HomeAdapted} />
        <Route path={EXPERIENCE} exact component={ExperienceAdapted} />
        <Route path={EDUCATION} exact component={Education} />
        <Route path={PROJECTS} exact component={Projects} />
        <Route path={FEEDBACK} exact component={Feedback} />
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default App;
