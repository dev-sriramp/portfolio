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
        if (siteValue === 'Error') {
          window.location.href = "/"+siteValue
        }
        else if (siteValue === 'ContactMe') {
          window.location.href = "/"+siteValue
        }
        else if (siteValue === 'Home') {
          window.location.href = "/"+siteValue
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
              <span className='navbar-brand mx-5 move' onClick={this.find('Home')}><h1 className='type'>SRIRAM P</h1>
                <h3 className='subtitle'>EnThUsIaStIc LeArNeR</h3>
              </span>
              <div className={"collapse navbar-collapse " + shown}>
                <ul className='navbar-nav'>
                  <li className='nav-item move active'><p className='active'>HOME&emsp;</p></li>
                  <li className='nav-item move' onClick={this.find('Error')}><p>RESUME&emsp;</p></li>
                  <li className='nav-item move' onClick={this.find('Error')}><p>PROJECT&emsp;</p></li>
                  <li className='nav-item move' onClick={this.find('ContactMe')}><p>CONTACT&emsp;</p></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

)
}};
export default Header;