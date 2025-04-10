import React from 'react';

function Contact({ className }) {
    return (
        <>
            <section id="contact"  className={`appie-project-3-area ${className} `}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="
                                    appie-project-3-box
                                    d-block d-md-flex
                                    justify-content-between
                                    align-items-center
                                    wow
                                    animated
                                    fadeInUp
                                "
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >                                
                                <div className="col-lg-8">
                                    <h4 className="title">
                                        Ready to Transform Your Data Strategy?
                                    </h4>
                                    <p className='contact-desc' >ScrapeWise streamlines your data extraction process—from collecting data from websites using an AI-powered chatbot to turning it into actionable insights. Discover a smarter way to work with data.</p>
                                    <p className='contact-desc'>Contact us today to secure early access to our innovative platform.</p>
                                </div>
                                <a className="main-btn" href="mailto:earlyaccess@scrapewise.ai">
                                    Email Us for Early Access
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
