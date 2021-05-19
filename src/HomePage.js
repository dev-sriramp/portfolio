import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './HomePage.css';
import Img from './assets/Port_Image.jpg';
class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      SiteName: "",
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      show: !this.state.show
    })
  }

  find = siteValue => () => {
    console.log('find')
    if (siteValue === 'myresume') {
      window.location.href = '/error'
    }
  }
  render() {
    const shown = (this.state.show) ? "show" : "";
    return (

      <div >
        <header className='jumbotron'>
          <nav className='navbar navbar-light navbar-expand-sm'>
            <div className='container'>
              <button className='navbar-toggler' type='button' onClick={this.toggleMenu}>
                <span className='navbar-toggler-icon'></span>
              </button>
              <a className='navbar-brand mx-5' href='#'><h1>SRIRAM P</h1>
                <h3>EnThUsIaStIc LeArNeR</h3>
              </a>
              <div className={"collapse navbar-collapse " + shown}>
                <ul className='navbar-nav mx-5 px-5'>
                  <li className='nav-item px-5 move' onClick={this.find('myresume')}><p>HOME</p></a></li>
                  <li className='nav-item px-5 move' onClick={this.find('myresume')}><p>RESUME</p></li>
                  <li className='nav-item px-5 move' onClick={this.find('myresume')}><p>PROJECT</p></li>
                  <li className='nav-item px-5 move' onClick={this.find('myresume')}><p>CONTACT</p></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div className='container bg-light'>
          <div className='row'>
            <div className='col-sm-12 col-md-6'>
              <img src={Img} alt="pic" className='mine rounded-circle p-5' />
            </div>
            <div className='col-sm-12 col-md-6'>
              <span className="move" onClick={this.find('myresume')}>
                <svg className="bd-placeholder-img rounded-circle" width="180" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>MY RESUME</title><rect width="100%" height="100%" fill="#e55773" ></rect><text x="25%" y="50%" fill="#ffffff">MY RESUME</text></svg>
              </span>
              <span className="move" onClick={this.find('myresume')}>
                <svg className="bd-placeholder-img rounded-circle" width="180" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>MY WORKS</title><rect width="100%" height="100%" fill="#76d3d7"></rect><text x="25%" y="50%" fill="#ffffff">MY WORK</text></svg>
              </span>
              <span className="move" onClick={this.find('myresume')}>
                <svg className="bd-placeholder-img rounded-circle" width="180" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>MY SKILLS</title><rect width="100%" height="100%" fill="#8d8720"></rect><text x="25%" y="50%" fill="#ffffff">MY SKILLS</text></svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
