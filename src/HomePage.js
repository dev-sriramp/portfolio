import React, { Component } from 'react';
import './HomePage.css';
import Img from './assets/Port_Image.jpg';
class HomePage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    const shown = (this.state.show) ? "show" : "" ;
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
                <li className='nav-item active px-5'><a href='#' className='nav-link'>HOME</a></li>
                <li className='nav-item px-5'><a href='#' className='nav-link'>RESUME</a></li>
                <li className='nav-item px-5'><a href='#' className='nav-link'>PROJECT</a></li>
                <li className='nav-item px-5'><a href='#' className='nav-link'>CONTACT</a></li>
              </ul>
            </div>
          </div>
        </nav>
        </header>
       <div className='container bg-light'> 
       
      <div className='row'>
        <div className = 'col-sm-12 col-md-6'>
	
					<img src= {Img} alt="pic" className='mine img-fluid p-5'/>
			</div>
      <div className='col-sm-12 col-md-6'>
        <h1><strong>hello</strong></h1>
      </div>
      </div> 

      </div> 
        
      </div>
    );
  }
}

export default HomePage;
