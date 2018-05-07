import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './Components/Home';
import About from './Components/About';
import Film from './Components/Film';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <div>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/film" component={Film} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
