import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BusinessTypes from './components/BusinessTypes';
import Features from './components/Features';

import Pricing from './components/Pricing';
import AboutUs from './components/AboutUs';
import Support from './components/Support';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Footer from './components/Footer';

import EngagementPopup from './components/EngagementPopup';

import AIBilling from './components/AIBilling';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedIndustry, setSelectedIndustry] = useState('');

  const renderContent = () => {
    if (currentPage === 'pricing') {
      return (
        <div className="animate-fade-in-up pt-20">
          <Pricing selectedIndustry={selectedIndustry} />
        </div>
      );
    }

    if (currentPage === 'about') {
      return (
        <div className="animate-fade-in-up pt-20">
          <AboutUs />
        </div>
      );
    }

    if (currentPage === 'support') {
      return (
        <div className="animate-fade-in-up">
          <Support />
        </div>
      );
    }

    return (
      <>
        <Hero />
        <AIBilling />
        <BusinessTypes />
        <Features />

        {/* Pricing removed from here, accessible via dedicated page */}
        <Benefits />
        <CTA />
      </>
    );
  };

  return (
    <div className="App">
      <Navbar onNavigate={setCurrentPage} onSelectIndustry={setSelectedIndustry} />
      {renderContent()}
      <Footer onNavigate={setCurrentPage} />
      <EngagementPopup />
    </div>
  );
}

export default App;
