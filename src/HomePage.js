import React, { Component } from 'react';
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
      console.log(siteValue);
       window.location.href = '/error'
    }
  }
  render() {
    const shown = (this.state.show) ? "show" : "";
    return (

      <div >
        <header className='jumbotron'>
          <nav className='navbar navbar-light navbar-expand-md'>
            <div className='container'>
              <button className='navbar-toggler' type='button' onClick={this.toggleMenu}>
                <span className='navbar-toggler-icon'></span>
              </button>
              <span className='navbar-brand mx-5 move' onClick={this.find('myresume')}><h1>SRIRAM P</h1>
                <h3>EnThUsIaStIc LeArNeR</h3>
              </span>
              <div className={"collapse navbar-collapse " + shown}>
                <ul className='navbar-nav'>
                  <li className='nav-item move active' onClick={this.find('myresume')}><p className='active'>HOME&emsp;</p></li>
                  <li className='nav-item move' onClick={this.find('myresume')}><p>RESUME&emsp;</p></li>
                  <li className='nav-item move' onClick={this.find('myresume')}><p>PROJECT&emsp;</p></li>
                  <li className='nav-item move' onClick={this.find('myresume')}><p>CONTACT&emsp;</p></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div className='container bg-light'>
          <div className='row'>
            <div className='col-sm-12 col-md-5'>
              <img src={Img} alt="pic" className='mine rounded-circle p-5' />
            </div>
            <div className='col-sm-12 col-md-7 '>
              <h1>Hello,</h1>
              <h4>a bit about me:</h4>
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
