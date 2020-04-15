import React, {Component} from 'react';
import resumeData from "../../resumeData";

export default class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div className="row">
                    {/*<div className="eight columns">*/}
                        {/* form */}
            {/*            <form action method="post" id="contactForm" name="contactForm">*/}
            {/*                <fieldset>*/}
            {/*                    <div>*/}
            {/*                        <label htmlFor="contactName">Name <span className="required">*</span></label>*/}
            {/*                        <input type="text" defaultValue={""} size={35} id="contactName" name="contactName"/>*/}
            {/*                    </div>*/}
            {/*                    <div>*/}
            {/*                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>*/}
            {/*                        <input type="text" defaultValue={""} size={35} id="contactEmail"*/}
            {/*                               name="contactEmail"/>*/}
            {/*                    </div>*/}
            {/*                    <div>*/}
            {/*                        <label htmlFor="contactSubject">Subject</label>*/}
            {/*                        <input type="text" defaultValue={""} size={35} id="contactSubject"*/}
            {/*                               name="contactSubject"/>*/}
            {/*                    </div>*/}
            {/*                    <div>*/}
            {/*                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>*/}
            {/*                        <textarea cols={50} rows={15} id="contactMessage" name="contactMessage"*/}
            {/*                                  defaultValue={""}/>*/}
            {/*                    </div>*/}
            {/*                    <div>*/}
            {/*                        <button className="submit">Submit</button>*/}
            {/*                        <span id="image-loader">*/}
            {/*  <img alt="" src="images/loader.gif"/>*/}
            {/*</span>*/}
            {/*                    </div>*/}
            {/*                </fieldset>*/}
            {/*            </form>*/}
                        {/* Form End */}
                        {/* contact-warning */}
                        {/*<div id="message-warning"> Uhoh, error! Try emailing me instead.</div>*/}
                        {/* contact-success */}
                        {/*<div id="message-success">*/}
                        {/*    <i className="fa fa-check"/>Your message was sent, thank you!<br/>*/}
                        {/*</div>*/}
                    {/*</div>*/}

                    <aside className="four columns footer-widgets centered">
                        <div className="widget widget_contact">
                            <h4>Contact Details</h4>
                            <p className="address">
                                {resumeData.name}<br/>
                                Scotland<br/>
                                <a target="_blank" href="mailto:aadon94@gmail.com?subject=Resume Enquiry">aadon94@gmail.com</a>
                            </p>
                        </div>
                    </aside>
                </div>
            </section>

        );
    }
}