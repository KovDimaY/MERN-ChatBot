import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  INIT, HOME, EXPERIENCE,
  EDUCATION, SKILLS, PROJECTS,
  FEEDBACK,
} from '../../constants/routes';

import Disclaimer from '../Disclaimer';
import Home from '../Home';
import Education from '../Education';
import Experience from '../Experience';
import Skills from '../Skills';
import Projects from '../Projects';
import Feedback from '../Feedback';

import Layout from '../../hoc/layout';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path={INIT} exact component={Disclaimer} />
      <Layout>
        <Route path={HOME} exact component={Home} />
        <Route path={EXPERIENCE} exact component={Experience} />
        <Route path={EDUCATION} exact component={Education} />
        <Route path={SKILLS} exact component={Skills} />
        <Route path={PROJECTS} exact component={Projects} />
        <Route path={FEEDBACK} exact component={Feedback} />
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default App;
