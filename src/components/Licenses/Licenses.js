import React from 'react';
import ExperienceView from '../ExperienceView/ExperienceView'
import './Licenses.scss'
import * as TextConstants from '../../res/constants/text'


export default class Licenses extends React.Component {

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
        return <div className="licenses">
            <div className="heading-box">
                <p className={this.state.fullScreen ? "heading" : "smallscreen-heading"}>Licenses</p>
                <div className="container"><hr/></div>

            </div>
            <div className="content-box">
            {this.getExperienceViews()}
            </div>
        </div>
    }
}