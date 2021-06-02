import React, { Component } from 'react';
import './css/AboutMe.css';
import Footer from './Footer';
import Img from '../assets/PortImage.jpg';

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
          SiteName: "",
        };
      }
    
    
      find = siteValue => () => {
        if (siteValue === 'myresume') {
          window.location.href = '/Error'
        }
      }
render(){
return(
<div className='container bg-light'>
          <div className='row'>
            <div className='col-sm-12 col-md-5'>
              <img src={Img} alt="pic" className='mine rounded-circle p-5' />
            </div>
            <div className='col-sm-12 col-md-7 '>
              <h1 className='hlo'>Hello,</h1>
              <h4 className='homeabout'>a bit about me:</h4>
              <span className="move" onClick={this.find('myresume')}>
                <svg className="bd-placeholder-img rounded-circle" width="180" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>MY RESUME</title><rect width="100%" height="100%" fill="#e55773" ></rect><text x="25%" y="50%" fill="#ffffff">MY RESUME</text></svg>
              </span>
              <span className="move" onClick={this.find('myresume')}>
                <svg className="bd-placeholder-img rounded-circle" width="180" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>MY WORKS</title><rect width="100%" height="100%" fill="#76d3d7"></rect><text x="25%" y="50%" fill="#ffffff">MY WORK</text></svg>
              </span>
              <span className="move" onClick={this.find('myresume')}>
                <svg className="bd-placeholder-img rounded-circle" width="180" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>MY SKILLS</title><rect width="100%" height="100%" fill="#8d8720"></rect><text x="25%" y="50%" fill="#ffffff">MY SKILLS</text></svg>
              </span>
              <p className='abtme'>Torrieux de bout d'viarge de verrat de mosus de saint-cimonaque de calvince d'enfant d'chienne de cibouleau de batèche de ciboire.Boswell de saint-ciboire de calvince de sacristi de calvinouche de p'tit Jésus de cochonnerie de sapristi de maudite marde de verrat de cibole.
              </p>
            </div>
            <Footer />
          </div>
        </div>

)
}};
export default AboutMe;