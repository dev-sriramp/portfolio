import React, { Component, } from 'react';
import axios from 'axios';

class ContactMe extends Component {
  constructor(props){
    super(props);
    this.state={
      username : "",
      password : "",
      displayname : "",
    }
  }
  inputSet = (e) =>{
    this.setState({[e.target.name]:e.target.value})
  }

register = (e) =>{
  e.preventDefault();
  var data = {
    username : this.state.username,
    password : this.state.password,
    displayname : this.state.displayname,
  };
  // console.log(data)
  axios.post("http://sriram.infinityfreeapp.com/index.php",data).then(res => {alert(res.data)}).catch(err => {alert(err)})
  console.log('function called')
}
  render() {
    return (
      <div className='App-header'>
        <form>
          <div className="form-group">
            <label>Username</label>
            <input type="text" onChange={this.inputSet}name="username" className="form-control" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password"  onChange={this.inputSet}name="password" className="form-control" />
          </div>

          <div className="form-group">
            <label>Display name</label>
            <input type="text" onChange={this.inputSet}name="displayname" className="form-control" />
          </div>

          <div className="form-group">
            <button onClick={this.register}className="btn btn-primary">Register</button>
          </div>
          <p>{this.state.username}</p>
          <p>{this.state.password}</p>
          <p>{this.state.displayname}</p>
        </form>
      </div>
    );
  }
}

export default ContactMe;
