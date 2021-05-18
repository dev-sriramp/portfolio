import React, { Component, } from 'react';
import './App.css';
import HomePage from './HomePage';
import Login from './Login'
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
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
  </Router>
  );}
}

export default App;
