import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import AppScreenshots from './components/AppScreenshots';
import HowItWorks from './components/HowItWorks';
import FleetShowcase from './components/FleetShowcase';
import MarketComparison from './components/MarketComparison';
import SecurityCompliance from './components/SecurityCompliance';
import Faq from './components/Faq';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import DownloadModal from './components/DownloadModal';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [page, setPage] = useState('home');

  const openDownload = () => setDownloadModalOpen(true);
  const closeDownload = () => setDownloadModalOpen(false);
  const openContact = () => {
    setPage('contato');
    window.scrollTo({ top: 0 });
  };
  const goHome = () => {
    setPage('home');
    window.scrollTo({ top: 0 });
  };

  if (page === 'contato') {
    return (
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: '#ffffff',
          color: '#0f172a',
          fontFamily: 'Inter, sans-serif',
          position: 'relative',
        }}
      >
        <Navbar onOpenDownloadModal={openDownload} onOpenContact={openContact} onGoHome={goHome} />
        <ContactPage onGoHome={goHome} />
        <div style={{ position: 'relative', zIndex: 10 }}>
          <Footer onOpenDownloadModal={openDownload} onGoHome={goHome} />
        </div>
        <DownloadModal isOpen={downloadModalOpen} onClose={closeDownload} />
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        color: '#0f172a',
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
      }}
    >
      {/* Fixed Navbar (Floating Pill on scroll) */}
      <Navbar onOpenDownloadModal={openDownload} onOpenContact={openContact} onGoHome={goHome} />

      {/* Fixed Hero — stays completely static while user scrolls */}
      <div className="hero-fixed-container">
        <Hero onOpenDownloadModal={openDownload} />
      </div>

      {/* Spacer for the scroll journey */}
      <div className="hero-scroll-spacer" />

      {/* Main Content — slides up and covers the Hero like a physical curtain */}
      <main className="main-curtain">
        {/* Value Proposition */}
        <ValueProposition onOpenDownloadModal={openDownload} onOpenContact={openContact} />

        {/* Real App Screens (Photos from src/assets in smartphone mockups) */}
        <AppScreenshots onOpenDownloadModal={openDownload} />

        {/* Simplified 3-Step Visual How It Works */}
        <HowItWorks onOpenDownloadModal={openDownload} />

        {/* Fleet & Capacity Showcase with real blue trucks photo */}
        <FleetShowcase onOpenDownloadModal={openDownload} />

        {/* Market Comparison */}
        <MarketComparison onOpenDownloadModal={openDownload} onOpenContact={openContact} />

        {/* Security & Compliance */}
        <SecurityCompliance />

        {/* FAQ */}
        <Faq onOpenContact={openContact} />
      </main>

      {/* Footer */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Footer onOpenDownloadModal={openDownload} onOpenContact={openContact} />
      </div>

      {/* Download Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={closeDownload}
      />
    </div>
  );
}
