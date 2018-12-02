import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Home';
import Education from '../Education';
import Experience from '../Experience';

import Layout from '../../hoc/layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/experience" exact component={Experience} />
        <Route path="/education" exact component={Education} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
