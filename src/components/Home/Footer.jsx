import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-svg.svg';

function Footer() {
    return (
        <footer className="appie-footer-area appie-footer-8-area pt-80 pb-40">
            <div className="container">
                <div className="text-center mb-40">
                    <img src={logo} alt="ScrapeWise Logo" style={{ height: '40px' }} />
                </div>

                <div className="row justify-content-center">
                    <div className="text-center mt-40">
                        <img src={logo} alt="ScrapeWise Logo" style={{ height: '100px' }} />
                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <div className="footer-navigation">
                            <h4 className="title mb-3">Support</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/privacy-policy">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="/terms-of-service">Terms of Service</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4 text-center mb-4">
                        <div className="footer-widget-info">
                            <h4 className="title mb-3">Get In Touch</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="mailto:hello@scrapewise.ai">
                                        <i className="fal fa-envelope me-2"></i> hello@scrapewise.ai
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-4" />

                <div className="text-center">
                    <p className="mb-0">
                        © 2025 ScrapeWise. All Rights Reserved by{' '}
                        <a href="#" className="text-primary">ScrapeWise</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
