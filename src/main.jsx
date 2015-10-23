/**
 * App entry point
 */

// Polyfill
import "babel-core/polyfill";

// Libraries
import React from 'react';
import { render } from 'react-dom';

// First we import some components...
import { Router, Route } from 'react-router';

import Home from './components/home/home';
import Navigation from './components/navigation/navigation';

// Render Navigation
render(
    (<Navigation></Navigation>)
, document.getElementById('header'));

// Start the router
render((
    <Router >
      <Route path="/" component={Home}>
      </Route>
    </Router>
), document.getElementById('content'));
