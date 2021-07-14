import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './SideMenu.scss'

export default class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: this.props.isOpen }
    }

    componentWillReceiveProps(props) {
        this.setState({ isOpen: props.isOpen })
        console.log('menu is ' + this.state.isOpen)
    }

    render() {
        return <div className="sidebar" style={ this.state.isOpen ? {transform: 'translateX(0)'} : {transform: 'translateX(-100%)'} }>
            {this.state.isOpen ? <div id="screenclicker" onClick={ this.props.onScreenClose }></div> : null}
            <Link to="landing"
                spy={true}
                smooth={true}
                duration={500}
                className='sidebar-item'
                id='first-item'
                onClick={this.props.onScreenClose}
            >Home</Link>
            <Link to="about"
                smooth={true}
                offset={-60}
                duration={500}
                className='sidebar-item'
                onClick={this.props.onScreenClose}
            >About</Link>
            <Link to="projects"
                smooth={true}
                offset={-60}
                duration={500}
                className='sidebar-item'
                onClick={this.props.onScreenClose}
            >Projects</Link>
            <Link to="experience"
                smooth={true}
                offset={-60}
                duration={500}
                className='sidebar-item'
                onClick={this.props.onScreenClose}
            >Experience</Link>
            {/* <Link to="skills"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className='sidebar-item'
            >Skills</Link> */}
            <Link to="footer"
                smooth={true}
                offset={-60}
                duration={500}
                className='sidebar-item'
                onClick={this.props.onScreenClose}
            >Contact</Link>
        </div>

    }
}