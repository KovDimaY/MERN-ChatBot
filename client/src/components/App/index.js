import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Home';
import Education from '../Education';
import Experience from '../Experience';
import Skills from '../Skills';
import Projects from '../Projects';
import Feedback from '../Feedback';

import Layout from '../../hoc/layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/experience" exact component={Experience} />
        <Route path="/education" exact component={Education} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/feedback" exact component={Feedback} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
