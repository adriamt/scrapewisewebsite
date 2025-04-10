import React from 'react';
import workThumb from '../../assets/images/how-it-work-thumb.png';

function HowItWorks() {
    return (
        <>
            <div id="how-it-works" className="appie-how-it-work-area pt-100 pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="how-it-work-thumb text-center">
                                <img src={workThumb} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appie-how-it-work-content">
                                <h2 className="title">How It works</h2>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="how-it-work-box">
                                            <span>1</span>
                                            <h5 className="appie-title">
                                                Chatbot Data Extraction
                                            </h5>
                                            <p>
                                                Engage with our AI-powered chatbot to extract data directly from websites.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="how-it-work-box">
                                            <span>2</span>
                                            <h5 className="appie-title">
                                                Data Cleaning
                                            </h5>
                                            <p>
                                                Automatically deduplicate and organize your datasets for enhanced accuracy.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="how-it-work-box">
                                            <span>3</span>
                                            <h5 className="appie-title">
                                                Data Analysis
                                            </h5>
                                            <p>
                                                Use our integrated BI platform to explore and understand your data.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="how-it-work-box">
                                            <span>4</span>
                                            <h5 className="appie-title">
                                                Visualization & Insights
                                            </h5>
                                            <p>
                                                Transform raw data into interactive dashboards that reveal actionable insights.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HowItWorks;
