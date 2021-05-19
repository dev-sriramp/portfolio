import React, { Component, } from 'react';
import './App.css';
import HomePage from './HomePage';
import Error from './Error';

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
class App extends Component {
  render(){
  return (
    <Router>
      <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/error">
          <Error />
        </Route>
        
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
  </Router>
  );}
}

export default App;
