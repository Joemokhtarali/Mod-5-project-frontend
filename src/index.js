import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './reducers/reducer' 
import Login from './forms/login';
import Signup from './forms/signup';
import Navbar from '../src/containers/Navbar'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Navbar /> 
      <Route exact path='/' component={App} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
    </Router> 
  </Provider>
  ,document.getElementById('root')
);

