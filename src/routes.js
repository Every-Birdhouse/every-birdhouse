import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './Components/Home';
import NotFound from './Components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <div>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
