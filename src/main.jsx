/**
 * App entry point
 */

// Polyfill
import "babel-core/polyfill";

// Libraries
import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';

// First we import some components...
import { Router, Route, IndexRoute } from 'react-router';

import App from './routes/app/app';
import Home from './routes/home/home';
import Register from './routes/register/register';
import Login from './routes/login/login';

// Start the router
render((
    <Router history={createBrowserHistory()}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="register" component={Register}/>
            <Route path="login" component={Login}/>
        </Route>
    </Router>
), document.getElementById('app'));
