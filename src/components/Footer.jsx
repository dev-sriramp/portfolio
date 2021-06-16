import React, { Component } from 'react';
import './css/Footer.css';
class Footer extends Component {
    FollowMe = LinkValue => () => {
        console.log(LinkValue)
        if (LinkValue === 'mail') {
            window.location.href = 'mailto:uniqueredhat@gmail.com'
        }
        else if (LinkValue === 'linkedin') {
            window.open('https://www.linkedin.com/in/sriram-p-5b21921b4/', '_blank')
        }
        else if (LinkValue === 'git') {
            window.open('https://github.com/uniqueredhat/', '_blank')
        }
        else if (LinkValue === 'hackerrank') {
            window.open('https://hackerrank.com/uniqueredhat/', '_blank')
        }
    };
    render() {
        return (
<div className='container'>
            <footer className='col-12 footer'>
                <div className='row'>
                    <div className='col-md-6 col-sm-12 text-center'>
                        <i className="fa fa-phone fa-2x" aria-hidden="true">Contact</i><br />
                        <i className="fa fa-envelope fa-2x move" aria-hidden="true" onClick={this.FollowMe('mail')}></i>&emsp;
                <i className="fa fa-linkedin fa-2x move" aria-hidden="true" onClick={this.FollowMe('linkedin')}></i>
                    </div>
                    <div className='col-md-6 col-sm-12 text-center'>
                        <i className="fa fa-star fa-2x" aria-hidden="true">Follow</i><br />
                        <i className="fab fa-github fa-2x move" onClick={this.FollowMe('git')}></i>
                        <i className="fab fa-hackerrank fa-2x move" onClick={this.FollowMe('hackerrank')}></i>
                    </div>
                </div>
            </footer></div>
        )
    }
};
export default Footer;