import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './Header.scss'
import './Hamburger.scss'
import SideMenu from '../SideMenu/SideMenu'
import * as TextConstants from '../../res/constants/text'


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFixed: props.isFixed
        }
        this.addLeftBar = this.addLeftBar.bind(this)
        this.handleResize = this.handleResize.bind(this)
        this.state = {
            fullSizeHeader: (window.innerWidth >= this.props.mobileWidth),
            sideMenuOpen: false
         }

    }

    handleResize = (e) => {
        this.setState({ fullSizeHeader: (window.innerWidth >= this.props.mobileWidth) })
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillReceiveProps(props) {
        this.setState({ isFixed: props.isFixed })
    }

    addLeftBar() {
        if (!this.state.isFixed)
            return <div className="left-bar" style={{ backgroundColor: '#61dafb' }}></div>
    }

    createFullScreenHeader() {
        return <header className={this.state.isFixed ? 'navbar fixed' : 'navbar'}>
            {this.addLeftBar()}
            <div className='navbar__title'>{ TextConstants.NAME }</div>
            <Link to="landing"
                spy={true}
                smooth={true}
                duration={500}
                className='navbar__item'
            >Home</Link>
            <Link to="about"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className='navbar__item'
            >About</Link>
            {/* <Link to="projects"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className='navbar__item'
            >Projects</Link> */}
            <Link to="experience"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className='navbar__item'
            >Experience</Link>
            {/* <Link to="skills"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className='navbar__item'
            >Skills</Link> */}
            <Link to="footer"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className='navbar__item'
            >Contact</Link>
        </header>
    }

    createHamburgerMenu() {
        return <header className={this.state.isFixed && !this.state.sideMenuOpen ? 'mobile-navbar' : 'mobile-navbar transparent'} >
            {this.addLeftBar()}
            {/* <button className="fa fa-bars" id="hamburger" onClick={() => this.setState({ sideMenuOpen: !this.state.sideMenuOpen})}></button> */}
            <button className={this.state.sideMenuOpen ? "hamburger hamburger--spin is-active" : "hamburger hamburger--spin"} onClick={() => this.setState({ sideMenuOpen: !this.state.sideMenuOpen})} type="button">
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
            </button>
            <SideMenu isOpen={this.state.sideMenuOpen} onScreenClose={ () => this.setState({ sideMenuOpen: false}) } ></SideMenu>
            {this.state.isFixed && !this.state.sideMenuOpen ? <div className='mobile-title'>{ TextConstants.NAME }</div> : null}
        </header>
    }

    render() {
        if (this.state.fullSizeHeader)
            return this.createFullScreenHeader()
        else
            return this.createHamburgerMenu()
    }
}