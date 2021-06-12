import React, { Component, } from 'react';
// import axios from 'axios';

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
  // var data = {
  //   username : this.state.username,
  //   password : this.state.password,
  //   displayname : this.state.displayname,
  // };
  // console.log(data)
  // axios.post("http://15.207.115.49/react/index.php",data).then(res => {alert(res.data)}).catch(err => {alert(err)})
  fetch("http://15.207.115.49/react/index.php", {
    method: "POST",
      
    // Adding body or contents to send
    body: JSON.stringify({
      username : this.state.username,
      password : this.state.password,
      displayname : this.state.displayname,
    }),
      
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
  
// Converting to JSON
.then(response => response.json())
  
// Displaying results to console
.then(json => console.log(json));
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
            <label>Display Name</label>
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
