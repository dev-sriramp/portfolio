import React, { Component } from 'react';
import './css/Header.css';
class Header extends Component {
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
        if (siteValue === 'myresume') {
          window.location.href = '/Error'
        }
      }
render(){
    const shown = (this.state.show) ? "show" : "";
return(
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
                  <li className='nav-item move active'><p className='active'>HOME&emsp;</p></li>
                  <li className='nav-item move' onClick={this.find('myresume')}><p>RESUME&emsp;</p></li>
                  <li className='nav-item move' onClick={this.find('myresume')}><p>PROJECT&emsp;</p></li>
                  <li className='nav-item move' onClick={this.find('myresume')}><p>CONTACT&emsp;</p></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

)
}};
export default Header;