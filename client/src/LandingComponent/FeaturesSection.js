import React from "react";

const FeaturesSection =()=>{
    return(
        <section id="features" className="features-section">
        <div className="container">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">Everything you need to manage your library efficiently</p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <path d="M6 4h20v2H6V4zm0 6h20v14H6V10zm2 2v10h16V12H8z" fill="currentColor" />
                </svg>
              </div>
              <h3>Book Management</h3>
              <p>Organize and catalog thousands of books with detailed metadata, ISBN tracking, and automatic cover images.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <path d="M16 2c7.7 0 14 6.3 14 14s-6.3 14-14 14S2 23.7 2 16 8.3 2 16 2z" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M16 8v8l6 3.5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <h3>Member Portal</h3>
              <p>Easy member registration, profile management, and borrowing history with personalized recommendations.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M20 20l6 6" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <h3>Advanced Search</h3>
              <p>Find books instantly with powerful search filters, advanced queries, and intelligent recommendations.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <path d="M4 8h24v2H4V8zm0 6h24v2H4v-2zm0 6h24v2H4v-2z" fill="currentColor" />
                </svg>
              </div>
              <h3>Analytics & Reports</h3>
              <p>Track library usage with detailed analytics, generate insightful reports, and monitor key metrics.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <rect x="4" y="8" width="24" height="18" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M4 10h24" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3>Digital Resources</h3>
              <p>Manage e-books, digital journals, and online databases seamlessly within your library system.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <path d="M4 8c0-2 2-4 4-4h16c2 0 4 2 4 4v16c0 2-2 4-4 4H8c-2 0-4-2-4-4V8z" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M12 14l4 4 8-8" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <h3>Smart Notifications</h3>
              <p>Automated reminders for due dates, renewals, and new book arrivals keep members engaged.</p>
            </div>
          </div>
        </div>
      </section>

    )
}

export default FeaturesSection