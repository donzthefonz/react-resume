import React, {Component} from 'react';

export default class Testimonials extends Component {
    render() {
        return (
            <section id="testimonials">
                <div className="text-container">
                    <div className="row">
                        <div className="two columns header-col">
                            <h1><span>Client Testimonials</span></h1>
                        </div>
                        <div className="ten columns flex-container">
                            <div className="flexslider">
                                <ul className="slides">
                                    <li>
                                        <blockquote>
                                            <p>Your work is going to fill a large part of your life, and the only way to
                                                be truly satisfied is
                                                to do what you believe is great work. Adam does that. If there was
                                                anyone in the world I could be, it's him.
                                            </p>
                                            <cite>Steve Jobs</cite>
                                        </blockquote>
                                    </li>
                                    {/* slide ends */}
                                    <li>
                                        <blockquote>
                                            <p>Adam's a fucking god.
                                            </p>
                                            <cite>Mr. Adobe</cite>
                                        </blockquote>
                                    </li>
                                    {/* slide ends */}
                                </ul>
                            </div>
                            {/* div.flexslider ends */}
                        </div>
                        {/* div.flex-container ends */}
                    </div>
                    {/* row ends */}
                </div>
                {/* text-container ends */}
            </section>

        );
    }
}