import React, { Component } from 'react';
import './css/AboutMe.css';
// import Footer from './Footer';
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
              <div className="contain"> 
              <span className="move" onClick={this.find('myresume')}>
                <svg className="bd-placeholder-img rounded-circle" width="180" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>MY RESUME</title><rect width="100%" height="100%" fill="#ffaf00" ></rect><text x="25%" y="50%" fill="#ffffff">MY RESUME</text></svg>
              </span>
              <span className="move" onClick={this.find('myresume')}>
                <svg className="bd-placeholder-img rounded-circle" width="180" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>MY WORKS</title><rect width="100%" height="100%" fill="#da2268"></rect><text x="25%" y="50%" fill="#ffffff">MY WORK</text></svg>
              </span>
              <span className="move" onClick={this.find('myresume')}>
                <svg className="bd-placeholder-img rounded-circle" width="180" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>MY SKILLS</title><rect width="100%" height="100%" fill="#bb02ff"></rect><text x="25%" y="50%" fill="#ffffff">MY SKILLS</text></svg>
              </span>
              </div>
              <p className='abtme'>About Me
Diligent Computer Science and Engineering student (8. CGPA) from KPR Institute of Engineering and Technology with Programming Knowledge,communication skills and based on domain I am good at Cybersecurity and reactjs.Interned at ElectroCloud labs where I examined the IOT based Projects.Completed many certified courses based on Software Development.Seeking for IT Profession.
              </p>
            </div>
            {/* <Footer /> */}
          </div>
        </div>

)
}};
export default AboutMe;
