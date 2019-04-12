import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  INIT, HOME, EXPERIENCE,
  EDUCATION, PROJECTS,
  FEEDBACK,
} from '../../constants/routes';

import Disclaimer from '../Pages/Disclaimer';
import Home from '../Pages/Home';
import Education from '../Pages/Education';
import Experience from '../Pages/Experience';
import Projects from '../Pages/Projects';
import Feedback from '../Pages/Feedback';

import Layout from '../../hoc/layout';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path={INIT} exact component={Disclaimer} />
      <Layout>
        <Route path={HOME} exact component={Home} />
        <Route path={EXPERIENCE} exact component={Experience} />
        <Route path={EDUCATION} exact component={Education} />
        <Route path={PROJECTS} exact component={Projects} />
        <Route path={FEEDBACK} exact component={Feedback} />
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default App;
