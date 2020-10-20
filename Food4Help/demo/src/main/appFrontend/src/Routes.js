import React from 'react';

import {Route, BrowserRouter, Switch, Link} from 'react-router-dom';

import Login from './HP/Login';
import SignUp from './HP/SignUp';
import HomeP from './App';

function Routes() {
    return (
        <div className="Routes">
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={HomeP} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route component={Error} />
            </Switch>
        </BrowserRouter>
        </div>
    );
}

export default Routes;