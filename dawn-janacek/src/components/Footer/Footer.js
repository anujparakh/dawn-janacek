import React, { Component } from 'react';
import './Footer.scss'

export default class Footer extends React.Component {
    render() {
        return <div className="footer">
            <div className="left-bar" style={{backgroundColor: '#61dafb'}}></div>
            <div className='heading'>Contact</div>
            <div id="thinupperline"></div>
            <div className="contact-holder">
                <p className="fa fa-envelope"></p>
                <a href="mailto: anuj@anujinfotech.com" target="_blank">anuj@anujinfotech.com</a>
            </div>
            <div className="contact-holder">
                <p className="fa fa-phone"></p>
                <a href="tel:+1979-267-0771">(979)-267-0771</a>
            </div>
            <div className="contact-holder">
                <p className="fa fa-linkedin-square"></p>
                <a href="https://www.linkedin.com/in/anuj-parakh" target="_blank">linkedin.com/in/anujparakh</a>
            </div>

            <div id="thinlowerline"></div>
        </div>;
    }
}