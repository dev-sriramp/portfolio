import React, { Component, } from 'react';
import './App.css';



import HomePage from './components/HomePage';
import Error from './components/Error';
import ContactMe from './components/ContactMe'

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
class App extends Component {
  render(){
  return (
    <Router>
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route> 
        <Route exact path="/Error">
          <Error />
        </Route>
        <Route exact path="/ContactMe">
          <ContactMe />
        </Route>
        <Route exact path="/Home">
          <HomePage />
        </Route>
  </Router>
  );}
}

export default App;
