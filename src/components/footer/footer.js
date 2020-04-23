import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            <li><a href="https://www.linkedin.com/in/adamxanderdon/"><i
                                className="fab fa-linkedin"></i></a></li>
                            <li><a href="https://github.com/donzthefonz"><i className="fab fa-github-square"></i></a>
                            </li>
                            <li><a href="https://twitter.com/adamXanderDon"><i
                                className="fab fa-twitter-square"></i></a></li>
                        </ul>
                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i
                        className="icon-up-open"/></a></div>
                </div>
            </footer>

        );
    }
}