import React from 'react';
import About from './components/About/About'
import Header from './components/Header/Header'
import LandingPage from './components/LandingPage/LandingPage'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import { Link, animateScroll as scroll } from "react-scroll";

import './App.css';

const mobileWidth = 700

class App extends React.Component {
    constructor() {
        super()
        this.state = { headerFixed: false }
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = event => {
        if (window.scrollY <= 0 && this.state.headerFixed === true) {
            this.setState({ headerFixed: false });
        }
        else if (window.scrollY > 0 && this.state.headerFixed !== true) {
            this.setState({ headerFixed: true });
        }
    }

    render() {
        return (
            <div className="App" onScroll={this.handleScroll}>
                <Header isFixed={this.state.headerFixed} mobileWidth={mobileWidth}></Header>
                <LandingPage isAtTop={!this.state.headerFixed} mobileWidth={mobileWidth}></LandingPage>
                <About mobileWidth={mobileWidth}></About>
                <Experience mobileWidth={mobileWidth}></Experience>
                <Footer mobileWidth={mobileWidth}></Footer>
            </div>
        );
    }
}

export default App;