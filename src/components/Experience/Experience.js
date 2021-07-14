import React, { Component } from 'react';
import ExperienceView from '../ExperienceView/ExperienceView'
import './Experience.scss'
import * as TextConstants from '../../res/constants/text'


export default class Experience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullScreen: (window.innerWidth >= this.props.mobileWidth)
        }
        this.handleResize = this.handleResize.bind(this)
        this.getExperienceViews = this.getExperienceViews.bind(this)
    }

    handleResize = (e) => {
        this.setState({ fullScreen: (window.innerWidth >= this.props.mobileWidth) })
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }

    getExperienceViews = () => {
        const expViews = []
        for(const exp of TextConstants.EXPERIENCES)
        {
            const toAdd = <ExperienceView jobTitle={exp.positionName}
            companyName={exp.companyName}
            fromDate={exp.fromDate}
            toDate={exp.toDate}
            description={exp.description}
            image={exp.picture}>
        </ExperienceView>
            expViews.push(toAdd)
        }

        return expViews
    }

    render() {
        return <div className="experience">
            <div style={{backgroundColor: '#61dafb'}} className="left-bar"></div>
            <p className={this.state.fullScreen ? "heading" : "smallscreen-heading"}>Experience</p>
            <p className={this.state.fullScreen ? "subheading" : "smallscreen-subheading"} id="experience-subheading"><i>Click <a href="/Resume.pdf" target="_blank">here</a> to see my resume.</i></p>
            {this.getExperienceViews()}
        </div>
    }
}