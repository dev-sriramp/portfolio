import React, { Component, } from 'react';
import axios from 'axios';
import https from 'https';
const url = 'https://65.1.86.32/react/index.php'
const cert_file = './localhost.crt'

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
  agent = new https.Agent({
    requestCert: true,
    rejectUnauthorized: false,
    cert: cert_file
});
 options = {
    url: url,  // <---this is  a fake ip do not bother
    method: "POST",
    httpsAgent : this.agent,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/txt;charset=UTF-8'
    },
    data: {username : "this.state.username",
      password : "this.state.password",
      displayname : "this.state.displayname",}
};

register = (e) =>{
  e.preventDefault();
  // var xhr = new XMLHttpRequest()
  // // xhr.open('POST','http://15.207.115.49/react/index.php',true)
  // // xhr.send(JSON.stringify({
  // //   username : this.state.username,
  // //   password : this.state.password,
  // //   displayname : this.state.displayname,
  // // }))
  // xhr.open("post", "https://15.206.165.57/react/index.php", true)
  //     xhr.send(JSON.stringify({
  //         username : this.state.username,
  //         password : this.state.password,
  //         displayname : this.state.displayname,
  //       }));

  var varData = {
    username : this.state.username,
    password : this.state.password,
    displayname : this.state.displayname,
  };
  console.log(varData)
  axios(this.options).then(res => {alert('sucess')}).catch(err => {alert(err)})
//   fetch("https://15.206.165.57/react/index.php", {
//     method: "POST",
      
//     // Adding body or contents to send
//     body: JSON.stringify({
//       username : this.state.username,
//       password : this.state.password,
//       displayname : this.state.displayname,
//     }),
      
//     // Adding headers to the request
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })
  
// Converting to JSON
// .then(response => response.json())
  
// // Displaying results to console
// .then(json => console.log(json));
}
  render() {
    return (
      <div className='App-header'>
        <form>
          <div className="form-group">
            <label>UserName</label>
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
