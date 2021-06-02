import React, { Component } from 'react';
import './css/HomePage.css';
import AboutMe from './AboutMe';
import Header from './Header';


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
