import React, { useState } from 'react';
import './LandingPage.css';
import Login from './Login';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import BenefitsSection from './BenefitsSection';
import PricingSection from './PricingSection';
import CtaFooterSection from './CtaFooterSection';

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  if (currentPage === 'login') {
    return (
      <Login setCurrentPage={setCurrentPage} />
    );
  }

  return (
    <div className="landing-page">
      {/* Navigation */}
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setCurrentPage={setCurrentPage}
      />
      {/* Hero Section */}
      <HeroSection
        setCurrentPage={setCurrentPage}
      />
      {/* Features Section */}
      <FeaturesSection />
      {/* Benefits Section */}
      <BenefitsSection />
      {/* Pricing Section 
      <PricingSection />
      {/* CTA Section */}
      <CtaFooterSection
        setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default LandingPage
