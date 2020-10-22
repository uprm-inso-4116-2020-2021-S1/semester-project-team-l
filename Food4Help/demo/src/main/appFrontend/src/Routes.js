import React from 'react';

import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import HomeP from './App';
import About from './Screens/AboutUs';

function Routes() {
    return (
        <div className="Routes">
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={HomeP} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/aboutus" component={About} />
            <Route component={Error} />
            </Switch>
        </BrowserRouter>
        </div>
    );
}

export default Routes;