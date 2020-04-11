import React, {Component} from 'react';

export default class Resume extends Component {
    render() {
        return (
            <section id="resume">
                {/* Education
                 ----------------------------------------------- */}
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>University of Strathclyde</h3>
                                <p className="info">B.Sc. - Computer Science <span>•</span> <em className="date">July
                                    2016</em></p>
                                <p>
                                    Achieved a first class honours. Studying Computer Science has given me access to new
                                    ways of thinking and the ability and confidence to break problems down, bit by bit,
                                    until they are manageable.
                                </p>
                            </div>
                        </div>
                        {/* item end */}

                        {/* item end */}
                    </div>
                    {/* main-col end */}
                </div>
                {/* End Education */}
                {/* Work
                 ----------------------------------------------- */}
                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>BSW</h3>
                                <p className="info">Full-Stack Software Developer <span>•</span> <em className="date">Feb
                                    2019 -
                                    Apr 2020</em></p>
                                <p>
                                    I worked on a large variety of projects with this company, helping provide cutting
                                    edge and scalable technologies to help support a large timber business. I was one of
                                    the senior developers here, and would often work independently or take lead on a
                                    project.
                                </p>
                                <p>
                                    Some of the systems I created or worked on include:</p>
                                <ul>
                                    <li>Multiple APIs</li>
                                    <li>Custom ERP System</li>
                                    <li>Report Management Portal</li>
                                    <li>Custom Workflow System</li>
                                    <li>Multiple Custom Integrations</li>
                                    <li>Data Parsing / Cleaning</li>
                                    <li>Data / Website Scraping</li>
                                    <li>Sharepoint Integrations</li>
                                    <li>Documentation Portal with Elastic Search</li>
                                </ul>

                            </div>
                        </div>
                        {/* item end */}
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Cezanne HR</h3>
                                <p className="info">Graduate Software Developer <span>•</span> <em className="date">Feb
                                    2017 -
                                    Apr 2018</em></p>
                                <p>
                                    Working in an Agile Development environment I helped to add functionality to a HR
                                    management web-app mainly using C#, Javascript and SQL. This developed my
                                    programming ability as well as my general ability to problem solve and to find the
                                    most effective solutions. I worked well with my team and after 6 months
                                    accepted a pay rise which recognised my ability to take charge of certain features.
                                </p>
                            </div>
                        </div>
                        {/* item end */}
                    </div>
                    {/* main-col end */}
                </div>
                {/* End Work */}
                {/* Skills
                 ----------------------------------------------- */}
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <p>I have developed a wide variety of skills, both in and out of work, to ensure I'm always
                            equipped to handle projects flexibly and propose proper solutions. I enjoy learning and push
                            my capabilities day by day.
                        </p>

                        <div className="bars">
                            <ul className="skills">
                                <h3> Backend</h3>
                                <br></br>
                                <li><span
                                    className="bar-expand python"/><em> <i className="fab fa-python"></i>
                                    &nbsp; Python
                                </em></li>
                                <li><span className="bar-expand sql"/><em> <i className="fas fa-database"></i>
                                    &nbsp; SQL
                                </em></li>
                                <li><span className="bar-expand django"/><em> <i className="fas fa-server"></i>
                                    &nbsp; Django
                                </em></li>
                                <li><span className="bar-expand database"/><em> <i className="fas fa-database"></i>
                                    &nbsp; Relational Database Design
                                </em></li>
                                <li><span className="bar-expand api"/><em> <i className="fas fa-plug"></i>
                                    &nbsp; REST APIs
                                </em></li>
                                <h3> Frontend</h3>
                                <br></br>
                                <li><span className="bar-expand html5"/><em> <i className="fab fa-html5"></i>
                                    &nbsp; HTML5
                                </em></li>
                                <li><span className="bar-expand css"/><em><i className="fab fa-css3-alt"></i>
                                    &nbsp; CSS
                                </em></li>
                                <li><span className="bar-expand javascript"/><em><i className="fab fa-js-square"></i>
                                    &nbsp; JavaScript / jQuery
                                </em></li>

                            </ul>
                        </div>
                        {/* end skill-bars */}
                    </div>
                    {/* main-col end */}
                </div>
                {/* End skills */}
            </section>

        );
    }
}