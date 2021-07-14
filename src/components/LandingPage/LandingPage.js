import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './LandingPage.scss'
import * as TextConstants from '../../res/constants/text'
import TypistCycle from '../TypistCycle/typeCycle';

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAtTop: props.isAtTop,
        }
        this.getScrollDownArrow = this.getScrollDownArrow.bind(this)
    }

    componentWillReceiveProps(props) {
        this.setState({ isAtTop: props.isAtTop })
    }

    getScrollDownArrow = () => {
        // if (this.state.isAtTop)
        return <Link to="about"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            className="fa fa-angle-down scrollDown">
        </Link>
    }

    getTypingAnimatedComponent = () => {

        return <div></div>
    }

    render() {
        return <div className="landing" >

            <p className="mainheading">{TextConstants.MAIN_HEADING}</p>
            {/* {this.getTypingAnimatedComponent()} */}
            <TypistCycle
                content={TextConstants.SECONDARY_HEADINGS}
                numberOfCycles={-1} // loop indefinitely
                segmentDelay={0.8} // stop for 0.8s at end line
                className="secondheading"
            />
            <div className="links-holder">
                <a href="https://www.github.com/anujparakh" target="_blank" className="fa fa-github"></a>
                <a href="https://www.linkedin.com/in/anuj-parakh" target="_blank" className="fa fa-linkedin-square"></a>
                <a href="mailto: anuj@anujinfotech.com" target="_blank" className="fa fa-envelope"></a>
            </div>
            {this.getScrollDownArrow()}
        </div>
    }
}