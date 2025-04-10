import React from 'react';
import serviceThumb from '../../assets/images/service-thumb-1.png';

function Features() {
    return (
        <>
            <section
                className="appie-about-8-area appie-services-8-area pt-100 pb-55"
                id="features"
            >
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 col-md-8">
                            <div className="appie-section-title">
                                <h3 className="appie-title">AI-Powered Chatbot Data Extraction</h3>
                                <p>Extract data from any website quickly and efficiently with our intelligent chatbot.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div
                                        className="
                    appie-single-service-2 appie-single-service-about
                    mt-30
                    wow
                    animated
                    fadeInUp
                  "
                                        data-wow-duration="2000ms"
                                        data-wow-delay="200ms"
                                    >
                                        <div className="icon">
                                            <i className="fal fa-tv" />
                                        </div>
                                        <h4 className="title">End-to-End Data Journey
                                        </h4>
                                        <p>
                                            From extraction to cleaning, deduplication, analysis, and visualization—ScrapeWise handles every step to deliver actionable insights.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div
                                        className="
                    appie-single-service-2 appie-single-service-about
                    item-2
                    mt-30
                    wow
                    animated
                    fadeInUp
                  "
                                        data-wow-duration="2000ms"
                                        data-wow-delay="400ms"
                                    >
                                        <div className="icon">
                                            <i className="fal fa-code" />
                                        </div>
                                        <h4 className="title">Automated & Reliable Process</h4>
                                        <p>
                                            Schedule extraction tasks to keep your data fresh and accurate.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div
                                        className="
                    appie-single-service-2 appie-single-service-about
                    item-3
                    mt-30
                    wow
                    animated
                    fadeInUp
                  "
                                        data-wow-duration="2000ms"
                                        data-wow-delay="600ms"
                                    >
                                        <div className="icon">
                                            <i className="fal  fa-chart-line" />
                                        </div>
                                        <h4 className="title">Integrated BI Platform</h4>
                                        <p>
                                            Analyze and visualize your data with our built-in BI tools, transforming raw information into interactive dashboards.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div
                                        className="
                    appie-single-service-2 appie-single-service-about
                    item-4
                    mt-30
                    wow
                    animated
                    fadeInUp
                  "
                                        data-wow-duration="2000ms"
                                        data-wow-delay="200ms"
                                    >
                                        <div className="icon">
                                            <i className="fal fa-mobile" />
                                        </div>
                                        <h4 className="title">User-Friendly Design</h4>
                                        <p>
                                            Designed for everyone – no technical skills required.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="service-thumb">
                                <img src={serviceThumb} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Features;
