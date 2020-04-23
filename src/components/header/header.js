import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#portfolio">My Work</a></li>
                        {/*<li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>*/}
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul>
                    {/* end #nav */}
                </nav>
                {/* end #nav-wrap */}
                <div className="row banner">
                    <div className="banner-text">
                        {/*<h1 className="responsive-headline">I am</h1>*/}
                        <h1 className="responsive-headline">{resumeData.name}</h1>
                        {/*<h2 className="responsive-headline">Full-Stack Developer</h2>*/}
                        <h3>I'm a UK
                            based
                            <span> full-stack developer</span>.<br/> I
                            <span> love </span>automating things and I
                            <span> love </span>learning.<br/> <a className="smoothscroll" href="#about">Start
                                scrolling </a>
                            and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
                        <hr/>
                        <ul className="social">
                            <li><a href="https://www.linkedin.com/in/adamxanderdon/"><i
                                className="fab fa-linkedin"></i></a></li>
                            <li><a href="https://github.com/donzthefonz"><i className="fab fa-github-square"></i></a>
                            </li>
                            <li><a href="https://twitter.com/adamXanderDon"><i
                                className="fab fa-twitter-square"></i></a></li>
                        </ul>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"/></a>
                </p>
            </header>

        );
    }
}

