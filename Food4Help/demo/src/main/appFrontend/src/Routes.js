import React from 'react';

import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import HomeP from './App';
import About from './Screens/AboutUs';
import WWD from './Screens/WhatWeDo';
import Register from './Screens/RegisterCompany';
import Company from './Screens/Company';
import Reviews from './Screens/Reviews';
import Filter from './Screens/FilterPage';
function Routes() {
    return (
        <div className="Routes">
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={HomeP} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/aboutus" component={About} />
            <Route path="/whatwedo" component={WWD} />
            <Route path="/register" component={Register} />
            <Route path="/company" component={Company} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/filter" component={Filter} />
            <Route component={Error} />
            </Switch>
        </BrowserRouter>
        </div>
    );
}

export default Routes;