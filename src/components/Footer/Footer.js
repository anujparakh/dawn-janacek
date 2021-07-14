import React from 'react';
import * as TextConstants from '../../res/constants/text'
import './Footer.scss'

export default class Footer extends React.Component {
    render() {
        return <div className="footer">
            <div className="left-bar" style={{backgroundColor: '#61dafb'}}></div>
            <div className='heading'>Contact</div>
            <div id="thinupperline"></div>
            <div className="contact-holder">
                <p className="fa fa-envelope"></p>
                <a href={"mailto: "+ TextConstants.EMAIL} target="_blank">{TextConstants.EMAIL}</a>
            </div>
            <div className="contact-holder">
                <p className="fa fa-phone"></p>
                <a href={"tel:+1"+ TextConstants.PHONE_NUMBER}>{TextConstants.PHONE_NUMBER}</a>
            </div>
            <div className="contact-holder">
                <p className="fa fa-linkedin-square"></p>
                <a href={"https://" + TextConstants.LINKED_IN} target="_blank">{TextConstants.LINKED_IN}</a>
            </div>

            <div id="thinlowerline"></div>
        </div>;
    }
}