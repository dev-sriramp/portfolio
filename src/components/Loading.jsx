import React, { Component} from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
// import Loader from "react-loader-spinner";
import Lottie from 'react-lottie';
import LoadingJson from '../assets/LoadingJson.json';
class Loading extends Component {
  render(){
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: LoadingJson,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
  return (
   <div className='col-sm-3 col-md-6'>
       <Lottie options={defaultOptions}
              height={500}
              width={500}
              />
   </div>
  );}
}

export default Loading;
