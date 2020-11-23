import React from "react";
import { useState, useEffect } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import HomeP from "./Screens/HomePage";
import About from "./Screens/AboutUs";
import WWD from "./Screens/WhatWeDo";
import Register from "./Screens/RegisterCompany";
import Company from "./Screens/Company";
import Reviews from "./Screens/Reviews";
import User from "./Screens/User";
import LoginFailed from "./Screens/LoginFailed";
import Chat from "./MessageApp";
import SignUpButton from "./Screens/SignUpButton";
import Cookies from "js-cookie";

function App() {
  const[userActive, setUserActive] = useState(false);

  const checkActive = () =>{
    if(Cookies.get("LoggedIn") === "true")
    setUserActive(true);

  }
  useEffect(() =>{
    checkActive();
  }, [])

  return (
    <div id="root">
      <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <HomeP />
              </Route>
              {userActive ? (
                <div>
                  <Route path="/aboutus" component={About} />
                  <Route path="/whatwedo" component={WWD} />
                  <Route path="/company" component={Company} />
                  <Route path="/reviews" component={Reviews} />
                  <Route path="/user" component={User} />
                  <Route path="/chat" component={Chat} />
                </div>
              ) : (
                <div>
                  <Route path="/signup" component={SignUp} />
                  <Route path="/login" component={Login}/>
                  <Route path="/loginFailed" component={LoginFailed}/>
                  <Route path="/signupButton" component={SignUpButton}/>
                  <Route path="/aboutus" component={About} />
                  <Route path="/whatwedo" component={WWD} />
                  <Route path="/register" component={Register} />
                  <Route path="/reviews" component={Reviews} />
                  <Route path="/chat" component={Chat} />
                </div>
              )}
              <Route component={Error} />
            </Switch>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
