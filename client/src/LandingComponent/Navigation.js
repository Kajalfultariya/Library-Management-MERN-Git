import React from "react";
import { useNavigate } from 'react-router-dom';


const Navigation = ({ setMobileMenuOpen, mobileMenuOpen, setCurrentPage }) => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <path d="M6 4h20v2H6V4zm0 6h20v14H6V10zm2 2v10h16V12H8z" fill="currentColor" />
            </svg>
          </div>
          <span>
            <a href="#hero" className="nav-link">LibraryHub</a></span>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#features" className="nav-link">Features</a></li>
          <li><a href="#benefits" className="nav-link">Benefits</a></li>
          <li><a href="#pricing" className="nav-link">Pricing</a></li>
          <li>
            <button
              className="nav-login-btn"
              onClick={() => {
                navigate('/login')
              }}
            >
              Login
            </button>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Navigation