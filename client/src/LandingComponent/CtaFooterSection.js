import React from "react";

const CtaFooterSection = ({setCurrentPage}) => {
    return (
        <>
            <section className="cta-section">
                <div className="container">
                    <h2>Ready to Transform Your Library?</h2>
                    <p>Join thousands of libraries already using LibraryHub to streamline their operations.</p>
                    <button
                        className="btn btn-primary btn-lg"
                        onClick={() => setCurrentPage('login')}
                    >
                        Start Your Free Trial Today
                    </button>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-section">
                            <div className="footer-logo">
                                <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                                    <path d="M6 4h20v2H6V4zm0 6h20v14H6V10zm2 2v10h16V12H8z" fill="currentColor" />
                                </svg>
                                LibraryHub
                            </div>
                            <p>Modern library management for the digital age.</p>
                        </div>

                        <div className="footer-section">
                            <h4>Product</h4>
                            <ul>
                                <li><a href="/">Features</a></li>
                                <li><a href="/">Pricing</a></li>
                                <li><a href="/">Security</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="/">About</a></li>
                                <li><a href="/">Blog</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4>Legal</h4>
                            <ul>
                                <li><a href="/">Privacy</a></li>
                                <li><a href="/">Terms</a></li>
                                <li><a href="/">Cookies</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2024 LibraryHub. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default CtaFooterSection