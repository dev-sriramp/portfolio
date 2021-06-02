import React, { Component } from 'react';
import './css/HomePage.css';
import Header from './Header';
import AboutMe from './AboutMe';

class HomePage extends Component {
  render() {
    return (
      <div >
        <Header />
        <AboutMe />
      </div>
    );
  }
}

export default HomePage;
