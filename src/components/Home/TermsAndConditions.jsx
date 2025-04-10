import React from 'react';

function TermsDetails() {
    return (
        <section className="appie-service-details-area pt-100 pb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="service-details-content">
                            <div className="content privacy-policy">
                                <h3>Terms and Conditions</h3>
                                <p><strong>Last Updated:</strong> [Insert Date]</p>

                                <h4>1. Acceptance of Terms</h4>
                                <p>
                                    By accessing and using the ScrapeWise platform (“Service”), you agree to be bound by these Terms and Conditions (“Terms”). If you do not agree with any part of these Terms, you must not use the Service.
                                </p>

                                <h4>2. Description of the Service</h4>
                                <p>
                                    ScrapeWise provides an AI-driven web scraping and data extraction platform that enables users to extract data from publicly accessible websites. The Service covers the complete data journey from data extraction through processing, analysis, and visualization.
                                </p>

                                <h4>3. Scope of Data Extraction</h4>
                                <ul>
                                    <li><strong>Publicly Accessible Data Only:</strong> ScrapeWise is designed to extract data solely from websites that are publicly accessible. We do not target data behind authentication, paywalls, or any content that is not available to the general public.</li>
                                    <li><strong>Compliance with Laws and Policies:</strong> You agree that any web scraping activity conducted using ScrapeWise complies with all applicable laws, regulations, and the terms of service or usage policies of any targeted websites.</li>
                                </ul>

                                <h4>4. User Responsibilities and Use of Data</h4>
                                <ul>
                                    <li><strong>Data Use and Redistribution:</strong> Users are solely responsible for determining the legality and appropriateness of using, redistributing, or otherwise acting upon any data extracted via ScrapeWise. The Service is provided as a tool, and ScrapeWise does not regulate or control how you use the extracted data.</li>
                                    <li><strong>Prohibited Actions:</strong> You agree not to use the Service to engage in any activity that may be deemed unlawful, unethical, or in violation of any third-party rights. This includes, but is not limited to, scraping personal or sensitive information in contravention of applicable privacy or data protection laws.</li>
                                </ul>

                                <h4>5. Intellectual Property</h4>
                                <ul>
                                    <li><strong>Ownership:</strong> All intellectual property rights related to the ScrapeWise platform, including but not limited to its code, design, documentation, and features, are owned by ScrapeWise or our licensors.</li>
                                    <li><strong>User Data:</strong> Any data you provide directly through the Service remains your property. However, the extraction and aggregation of publicly available data may have limited intellectual property protection or be subject to the original owner’s rights.</li>
                                </ul>

                                <h4>6. Limitation of Liability</h4>
                                <ul>
                                    <li><strong>Disclaimer of Liability:</strong> ScrapeWise is provided on an “as is” and “as available” basis without any warranties, express or implied. We do not warrant that the Service will be uninterrupted, error-free, or free of harmful components.</li>
                                    <li><strong>User Responsibility:</strong> Under no circumstances shall ScrapeWise, its affiliates, or its officers be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the Service, including any misuse of the extracted data or reliance upon it for any particular purpose.</li>
                                    <li><strong>No Responsibility for User Actions:</strong> You acknowledge that ScrapeWise is not responsible for any actions taken by users based on the extracted data. Any legal claims, liabilities, or damages resulting from the use of extracted data are solely your responsibility.</li>
                                </ul>

                                <h4>7. Data Privacy</h4>
                                <ul>
                                    <li><strong>Public Data Collection:</strong> Since the Service only extracts publicly accessible data, we do not collect or store any sensitive or private user data beyond what is necessary for the platform’s operation.</li>
                                    <li><strong>Your Data:</strong> The data you extract using the Service is stored and processed in accordance with our Privacy Policy, which forms part of these Terms.</li>
                                </ul>

                                <h4>8. Modifications to the Terms and Service</h4>
                                <p>
                                    ScrapeWise reserves the right to modify these Terms or the Service itself at any time. Any changes will be effective immediately upon posting on our website. It is your responsibility to review these Terms periodically. Continued use of the Service after any such changes constitutes acceptance of the new Terms.
                                </p>

                                <h4>9. Termination</h4>
                                <p>
                                    ScrapeWise may suspend or terminate your access to the Service at any time, with or without cause, and without notice, if you violate these Terms or any applicable law. Upon termination, you must immediately cease all use of the Service.
                                </p>

                                <h4>10. Governing Law and Jurisdiction</h4>
                                <p>
                                    These Terms shall be governed by and construed in accordance with the laws of [Insert Jurisdiction]. Any disputes arising from or related to these Terms or the Service shall be resolved in the courts located within [Insert Jurisdiction], and you hereby consent to the jurisdiction of such courts.
                                </p>

                                <h4>11. Contact Information</h4>
                                <p>If you have any questions or concerns regarding these Terms or the Service, please contact us at:</p>
                                <p><strong>Email:</strong> [insert your support/contact email]</p>
                                <p><strong>Address:</strong> [Insert Company Address]</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TermsDetails;
