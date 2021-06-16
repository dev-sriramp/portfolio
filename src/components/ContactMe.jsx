import React, { Component, } from 'react';
import { FireBase } from "./FireBase";
import Header from './Header';
import Footer from './Footer'
import './css/ContactMe.css';
import img from '../assets/Mail.png';
class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Email: "",
      Message: "",
    }
  }
  inputSet = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  add = () => {
    console.log("function called")
    this.setState({
      Name: "",
      Email: "",
      Message: "",
    })
    console.log(this.state.Name);
  }
  register = (e) => {
    e.preventDefault();

    FireBase.collection("ContactMe")
      .add({
        Name: this.state.Name,
        Email: this.state.Email,
        Message: this.state.Message,
      })
      .then(() => {

        alert("Your Message has been submitted👍");
      })
      .catch(error => {
        alert(error.Message);

      });
    this.setState(() => ({
      Name: ""
    }))
    console.log("function claa4ed");
    this.add();

  };

  render() {
    return (
      <div>
        <Header />
      <div className="container-contact100">
          <div className="wrap-contact100">
            <span className="contact100-form-symbol">
            <img src={img} alt="SYMBOL-MAIL" /></span>
          <form className="contact100-form validate-form flex-sb flex-w">
            <span className="contact100-form-title">
              Drop Us A Message
				</span>

            <div className="wrap-input100 rs1 validate-input" data-validate="Name is required">
              <input className="input100" type="text" name="Name" placeholder="Name" onChange={this.inputSet}/>
              <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 rs1 validate-input" >
              <input className="input100" type="text" name="Email" placeholder="Email Address" onChange={this.inputSet} />
              <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Message is required">
              <textarea className="input100" name="Message" placeholder="Write Us A Message" onChange={this.inputSet}></textarea>
              <span className="focus-input100"></span>
            </div>

            <div className="container-contact100-form-btn">
              <button className="contact100-form-btn" onClick={this.register}>
                Send
					</button>
            </div>
          </form>
        </div>
        </div>
        <Footer />
        </div>
    );
  }
}

export default ContactMe;
