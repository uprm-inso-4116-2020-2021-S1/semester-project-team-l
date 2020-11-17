import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import HomeP from './Screens/HomePage';
import About from './Screens/AboutUs';
import WWD from './Screens/WhatWeDo';
import Register from './Screens/RegisterCompany';
import Company from './Screens/Company';
import Reviews from './Screens/Reviews';
import Filter from './Screens/FilterPage';
import User from './Screens/User';
import Chat from './MessageApp';
import Food from './FoodComponent';

function App() {
    return (
        <div id="root">
        <div className="App">
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
            <Route path="/user" component={User} />
            <Route path="/chat" component={Chat} />
            <Route path="/food" component={Food} />
            <Route component={Error} />
            </Switch>
        </BrowserRouter>
        </div>
        </div>
    );
}

export default App;