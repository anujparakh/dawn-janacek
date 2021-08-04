import React from 'react';
import './About.scss'
import aboutPhoto from '../../res/img/about_photo.jpg'
import * as TextConstants from '../../res/constants/text'

export default class About extends React.Component {
    render() {
        return <div className="about">
            <div className="heading-box">
                <p className="heading">About Me</p>
                <div className="container"><hr/></div>

            </div>
            <div className="content-box">
                <div className="container text-center limited">
                    <img id="aboutMeImg" src={aboutPhoto}></img>
                    <p className="description text" dangerouslySetInnerHTML={{__html: TextConstants.ABOUT_TEXT}}></p>
                </div>
            </div>

        </div>;
    }
}