import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './LandingPage.scss'
import * as TextConstants from '../../res/constants/text'
import Typist from 'react-typist'

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
        //     const typedDivs = []
        //     for(const text of TextConstants.SECONDARY_HEADINGS)
        //     {
        //         typedDivs.push(
        //             <div>
        //                 <div> {text}</div>
        //                 <Typing.Delay ms={500}/>
        //                 <Typing.Backspace count={text.length + 1} />
        //             </div>)
        //     }
        //     typedDivs.push(<Typing.Reset count={1}/>)

        //     return <Typing className="secondheading" loop={false} cursorClassName="text-white" speed={50}>{typedDivs}</Typing>
        return <div></div>
    }

    render() {
        return <div className="landing" >

            <p className="mainheading">{TextConstants.MAIN_HEADING}</p>
            {/* {this.getTypingAnimatedComponent()} */}
            <div className="links-holder">
                <a href="https://www.github.com/anujparakh" target="_blank" className="fa fa-github"></a>
                <a href="https://www.linkedin.com/in/anuj-parakh" target="_blank" className="fa fa-linkedin-square"></a>
                <a href="mailto: anuj@anujinfotech.com" target="_blank" className="fa fa-envelope"></a>
            </div>
            {this.getScrollDownArrow()}
        </div>
    }
}