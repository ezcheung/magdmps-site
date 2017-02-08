import ReactDOM from 'react-dom';

import React from 'react';
import App from './components/app.js';
import { Router, Route, Link } from 'react-router';

ReactDOM.render((
  <Router>
  <Route path="/" component={App}></Route>
  <Route path="/:page" component={App}>
  </Route>
  </Router>),
  document.getElementById('app'));