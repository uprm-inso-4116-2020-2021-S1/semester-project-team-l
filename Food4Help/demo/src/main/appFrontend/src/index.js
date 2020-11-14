
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Company from './Screens/Company';
import SignUp from './Screens/SignUp';
import Login from './Screens/Login';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import FoodComponent from './FoodComponent';

const store = createStore(applyMiddleware(ReduxThunk));

ReactDOM.render(
    <Provider store={store}>
       <SignUp />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();