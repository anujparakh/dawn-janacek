import React, { Component } from 'react';
import './ExperienceView.scss'

export default class ProjectView extends React.Component {
    constructor(props) {
        super(props);
        this.createVideoElement = this.createVideoElement.bind(this)
        this.createGithubLink = this.createGithubLink.bind(this)
    }

    createVideoElement = () => {
        if (this.props.video) {
            console.log('HAS A VIDEO');
            return <video className='video' controls>
                <source src={this.props.video} type="video/mp4" />
            </video>
        }
    }

    createGithubLink = () => {
        if (this.props.githubLink)
        {
            return <a href={this.props.githubLink} alt="github" className="fa fa-github"></a>
        }
    }

    render() {
        return <div className="experience-view">
            <div id="imgCol">
                <img src={this.props.image}/>
            </div>
            <div id="textCol">
                <h3 id='jobTitle'>{this.props.jobTitle}</h3>
                <h3 id='companyName'>{this.props.companyName}</h3>
                <h3 id='dateRange'><i>{this.props.fromDate} to {this.props.toDate}</i></h3>
                <p id='description' className='description text' dangerouslySetInnerHTML={{__html: this.props.description}}></p>
            </div>
        </div>;
    }
}