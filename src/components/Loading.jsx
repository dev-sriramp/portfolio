import React, { Component} from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner";
class Loading extends Component {
  render(){
  return (
   <div>
       <Loader 
       type="Puff"
       color="#00BFFF"
       height={800}
       width={800}
       timeout={3000}
       />
   </div>
  );}
}

export default Loading;
