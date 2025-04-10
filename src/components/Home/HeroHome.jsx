import React from 'react';
import hero from '../../assets/images/hero-thumb-9.png';

function HeroHome() {
    return (
        <>
            <section className="appie-hero-area appie-hero-8-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="appie-hero-content appie-hero-content-8">
                                <h1 className="appie-title">Welcome to ScrapeWise</h1>
                                <p>
                                    Experience intelligent data extraction from websites using our AI-powered chatbot. ScrapeWise takes you through the full data journey—from extraction to visualization and insights.
                                </p>
                                <ul>
                                    <li>
                                        <a href="#contact">
                                            <span>Get Early Access</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appie-hero-thumb-6">
                                <div
                                    className="thumb text-center wow animated fadeInUp"
                                    data-wow-duration="1000ms"
                                    data-wow-delay="600ms"
                                >
                                    <img src={hero} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroHome;
