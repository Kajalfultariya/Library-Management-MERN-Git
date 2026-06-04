import React from "react";

const PricingSection =()=>{
    return(
        <section id="pricing" className="pricing-section">
        <div className="container">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">Choose the perfect plan for your library</p>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3 className="pricing-title">Starter</h3>
              <div className="pricing-price">
                <span className="currency">$</span>
                <span className="amount">29</span>
                <span className="period">/month</span>
              </div>
              <p className="pricing-description">Perfect for small libraries</p>
              <ul className="pricing-features">
                <li><span className="checkmark">✓</span> Up to 5,000 books</li>
                <li><span className="checkmark">✓</span> 100 members</li>
                <li><span className="checkmark">✓</span> Basic analytics</li>
                <li><span className="checkmark">✓</span> Email support</li>
                <li className="disabled"><span className="cross">✕</span> API access</li>
              </ul>
              <button className="pricing-btn">Get Started</button>
            </div>

            <div className="pricing-card featured">
              <div className="badge">Most Popular</div>
              <h3 className="pricing-title">Professional</h3>
              <div className="pricing-price">
                <span className="currency">$</span>
                <span className="amount">79</span>
                <span className="period">/month</span>
              </div>
              <p className="pricing-description">Ideal for medium libraries</p>
              <ul className="pricing-features">
                <li><span className="checkmark">✓</span> Up to 50,000 books</li>
                <li><span className="checkmark">✓</span> Unlimited members</li>
                <li><span className="checkmark">✓</span> Advanced analytics</li>
                <li><span className="checkmark">✓</span> Priority support</li>
                <li><span className="checkmark">✓</span> API access</li>
              </ul>
              <button className="pricing-btn">Get Started</button>
            </div>

            <div className="pricing-card">
              <h3 className="pricing-title">Enterprise</h3>
              <div className="pricing-price">
                <span className="currency">Custom</span>
              </div>
              <p className="pricing-description">For large institutions</p>
              <ul className="pricing-features">
                <li><span className="checkmark">✓</span> Unlimited everything</li>
                <li><span className="checkmark">✓</span> Dedicated manager</li>
                <li><span className="checkmark">✓</span> Custom integrations</li>
                <li><span className="checkmark">✓</span> 24/7 support</li>
                <li><span className="checkmark">✓</span> Training included</li>
              </ul>
              <button className="pricing-btn">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

    )
}

export default PricingSection