import React from "react";

const BenefitsSection =()=>{
    return(
        <section id="benefits" className="benefits-section">
        <div className="container">
          <h2 className="section-title">Why Choose LibraryHub?</h2>

          <div className="benefits-grid">
            <div className="benefits-content">
              <div className="benefit-item">
                <div className="benefit-number">01</div>
                <div className="benefit-text">
                  <h3>Cloud-Based Access</h3>
                  <p>Access your library from anywhere, anytime, on any device with internet connection.</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-number">02</div>
                <div className="benefit-text">
                  <h3>Real-Time Sync</h3>
                  <p>Inventory synchronizes in real-time across all locations and user devices instantly.</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-number">03</div>
                <div className="benefit-text">
                  <h3>User-Friendly Interface</h3>
                  <p>Intuitive design that works for all ages and technical skill levels with minimal training.</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-number">04</div>
                <div className="benefit-text">
                  <h3>Robust Security</h3>
                  <p>Enterprise-grade encryption and privacy controls to protect all member data securely.</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-number">05</div>
                <div className="benefit-text">
                  <h3>24/7 Support</h3>
                  <p>Dedicated customer support team available round the clock to assist with any issues.</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-number">06</div>
                <div className="benefit-text">
                  <h3>Regular Updates</h3>
                  <p>Continuous feature improvements and security updates at no additional cost.</p>
                </div>
              </div>
            </div>

            <div className="benefits-image">
              <div className="image-placeholder">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                  <g opacity="0.1">
                    <path d="M50 30h100v140H50z" stroke="currentColor" strokeWidth="2" />
                    <path d="M70 60h60M70 85h60M70 110h60M70 135h20" stroke="currentColor" strokeWidth="2" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
}

export default BenefitsSection;