import React, {Component} from 'react';

export default class Portfolio extends Component {
    render() {
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Works.<br></br>If the GitHub link is missing it means a project is
                            private. Please contact me if you want more details or require a code review.</h1>

                        {/* portfolio-wrapper */}
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-01" title>
                                        <img alt="" src="images/portfolio/trading.jpg"/>
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>BitFund Trader</h5>
                                                <p>Web App</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus"/></div>
                                    </a>
                                </div>
                            </div>
                            {/* item end */}
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-02" title>
                                        <img alt="" src="images/portfolio/console.jpg"/>
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Time Guardian</h5>
                                                <p>Full Stack Application</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus"/></div>
                                    </a>
                                </div>
                            </div>
                            {/* item end */}
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-03" title>
                                        <img alt="" src="images/portfolio/command-line.png"/>
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>FTX Manager</h5>
                                                <p>Command Line Tool</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus"/></div>
                                    </a>
                                </div>
                            </div>
                            {/* item end */}
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-04" title>
                                        <img alt="" src="images/portfolio/web-scraper.jpg"/>
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Web Scraper</h5>
                                                <p>Selenium</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus"/></div>
                                    </a>
                                </div>
                            </div>
                            {/* item end */}
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-05" title>
                                        <img alt="" src="images/portfolio/react.png"/>
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Resume / Portfolio Site</h5>
                                                <p>React Web App</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus"/></div>
                                    </a>
                                </div>
                            </div>
                            {/* item end */}
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-06" title>
                                        <img alt="" src="images/portfolio/script.jpg"/>
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Batch File Renamer</h5>
                                                <p>Python Script</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus"/></div>
                                    </a>
                                </div>
                            </div>
                            {/* item end */}
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-07" title>
                                        <img alt="" src="images/portfolio/sharepoint-small.jpg"/>
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Sharepoint Integration</h5>
                                                <p>Python Script and SSIS</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus"/></div>
                                    </a>
                                </div>
                            </div>
                            {/* item end */}
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-08" title>
                                        <img alt="" src="images/portfolio/django.png"/>
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Report Management Portal</h5>
                                                <p>Django Web App</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus"/></div>
                                    </a>
                                </div>
                            </div>
                            {/* item end */}
                        </div>
                        {/* portfolio-wrapper end */}
                    </div>
                    {/* twelve columns end */}
                    {/* Modal Popup
                     --------------------------------------------------------------- */}
                    <div id="modal-01" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/modals/trading.jpg" alt=""/>
                        <div className="description-box">
                            <h4>BitFund Trader</h4>
                            <p>As project for myself and friends, I built a web app which would allow users to subscribe
                                to algorithmic trading signals and connect them to their exchange account. The
                                application would then buy and sell assets based on these signals. The trading
                                strategies are based on rules which are back-tested thoroughly and so far have provided
                                great returns. </p>
                            <span className="categories"><i className="fa fa-tag"/> Django, Web App, Python, SQL, Trading</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/donzthefonz/bitfund">GitHub</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    {/* modal-01 End */}
                    <div id="modal-02" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt=""/>
                        <div className="description-box">
                            <h4>Time Guardian</h4>
                            <p>Another personal project done in collaboration with a friend, this application has many
                                components. The main premise is parents being able to control their kids screen-time on
                                various devices. So far we have support for Windows devices and PS4 consoles. The
                                entire stack includes: relational database, NodeJS API, ReactJS Front End, Python
                                Windows Executable and deployment to AWS. </p>
                            <span className="categories"><i className="fa fa-tag"/> Web Development, Relational Database, NodeJS API, ReactJS Front End, Python
                                Windows Executable, AWS</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/donzthefonz/time-guardian">GitHub</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    {/* modal-02 End */}
                    <div id="modal-03" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/modals/ftx-manager.png" alt=""/>
                        <div className="description-box">
                            <h4>FTX Manager</h4>
                            <p>This was the first iteration of the BitFund app. A pretty basic command line tool that
                                asked the user for their options and would complete specific tasks to make managing a
                                trading portfolio on the FTX exchange easier.</p>
                            <span className="categories"><i className="fa fa-tag"/> Python, Command Line, Trading</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/donzthefonz/ftx-manager">GitHub</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    {/* modal-03 End */}
                    <div id="modal-04" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/modals/web-scraper.jpg" alt=""/>
                        <div className="description-box">
                            <h4>Web Scraper</h4>
                            <p>A tool that allows me to scrape data from websites if they don't offer API access.</p>
                            <span className="categories"><i
                                className="fa fa-tag"/> Web Scraping, Python, Selenium</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/donzthefonz/selenium-scraper">GitHub</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    {/* modal-04 End */}
                    <div id="modal-05" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/modals/react.jpg" alt=""/>
                        <div className="description-box">
                            <h4>Resume Web App</h4>
                            <p>A beautiful ReactJS based web app that is completely customisable, lightweight and
                                fast.</p>
                            <span className="categories"><i className="fa fa-tag"/> ReactJS, Web App, Resume</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/donzthefonz/react-resume">GitHub</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    {/* modal-05 End */}
                    <div id="modal-06" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/modals/script.jpg" alt=""/>
                        <div className="description-box">
                            <h4>Batch File Renamer</h4>
                            <p>A python script that takes a folder directory as input and then tries to rename the files
                                based on their metadata details. Great for renaming media files.</p>
                            <span className="categories"><i className="fa fa-tag"/> Python, Script, Batch</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/donzthefonz/file-metadata-renamer">GitHub</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    {/* modal-06 End */}
                    <div id="modal-07" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/modals/sharepoint.jpg" alt=""/>
                        <div className="description-box">
                            <h4>SharePoint Integration</h4>
                            <p>SharePoint is becoming a core part of many businesses. Unfortunately they charge an arm
                                and a leg to integrate with legacy business systems. I've become accustomed to working
                                with SharePoint lists and other objects and integrating them with existing relational
                                databases.</p>
                            <span className="categories"><i className="fa fa-tag"/>SharePoint, Integration, Python, SQL</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/donzthefonz/sharepoint-integration">GitHub</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    {/* modal-07 End */}
                    <div id="modal-08" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/modals/django.png" alt=""/>
                        <div className="description-box">
                            <h4>Report Management Portal</h4>
                            <p>I helped build a report management portal that offered lightning fast search based on
                                multiple fields, report sharing, favouriting, organising and tagging. It integrated with
                                Crystal Reports however could integrate with virtually any type of file with a bit of
                                customising.</p>
                            <span className="categories"><i className="fa fa-tag"/>Django, Web App, Elastic Search, Crystal Reports</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/donzthefonz/report-portal">GitHub</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    {/* modal-01 End */}
                </div>
                {/* row End */}
            </section>

        );
    }
}