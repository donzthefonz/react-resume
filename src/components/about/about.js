import React, {Component} from 'react';
import resumeData from "../../resumeData";

export default class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="images/adam-profile-bw.jpeg" alt=""/>
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>{resumeData.aboutme}
                            {/* TODO: More about my particular skills and strengths. */}
                        </p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{resumeData.name}</span><br/>
                                    {/*<span>Scotland</span><br/>*/}
                                    <a target="_blank"
                                       href="mailto:adamxanderdon@gmail.com
?subject=Resume Enquiry">adamxanderdon@gmail.com
                                    </a>
                                </p>
                                <p>
                                    <a href="downloads/Resume - Adam Xander Don.pdf" download className=" button"><i className=" fa
                                       fa-download"/>Download
                                        Resume</a>
                                </p>
                            </div>


                        </div>
                        {/* end row */}
                    </div>
                    {/* end .main-col */}
                </div>
            </section>

        );
    }
}