import React, { Component } from 'react';
import './css/HomePage.css';
import AboutMe from './AboutMe';
import Header from './Header';
import Loading from './Loading';



class HomePage extends Component {
  constructor(props){
    super(props);
      this.state={
IsLoading:true,
      }
  };
  componentDidMount() {
    this.timer = setTimeout(() => { this.setState({ IsLoading: !this.state.IsLoading }) }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }
renderDiv() {
  if(this.state.IsLoading) {
    return (<div><Loading /></div>)
  }
  else {
    return (<div><Header /><AboutMe /></div>)
  }
}
  render() {
    return (
      <div >
       {this.renderDiv()}
      </div>
    );
  }
}

export default HomePage;
