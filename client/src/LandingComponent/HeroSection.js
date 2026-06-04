import React from "react";

const HeroSection = ({setCurrentPage})=>{
    return(
        <section id="hero" className="hero">
        <div className="hero-background">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Smart Library <span className="gradient-text">Management</span>
          </h1>
          <p className="hero-description">
            Streamline your library operations with our intelligent management system.
            Organize books, manage members, track lending, and grow your collection effortlessly.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => setCurrentPage('login')}
            >
              Get Started
            </button>
            <button className="btn btn-secondary">
              Watch Demo
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Active Users</span>
            </div>
            <div className="stat">
              <span className="stat-number">500K+</span>
              <span className="stat-label">Books Managed</span>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

    )
}


export default HeroSection