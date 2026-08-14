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
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DownloadModal from './components/DownloadModal';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  const openDownload = () => setDownloadModalOpen(true);
  const closeDownload = () => setDownloadModalOpen(false);

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
      <Navbar onOpenDownloadModal={openDownload} />

      {/* Fixed Hero — stays completely static while user scrolls */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: 1,
        }}
      >
        <Hero onOpenDownloadModal={openDownload} />
      </div>

      {/* 100vh Spacer for the scroll journey */}
      <div style={{ height: '100vh', pointerEvents: 'none' }} />

      {/* Main Content — slides up and covers the Hero like a physical curtain */}
      <main
        style={{
          position: 'relative',
          zIndex: 10,
          backgroundColor: '#ffffff',
          borderTopLeftRadius: '36px',
          borderTopRightRadius: '36px',
          boxShadow: '0 -25px 60px rgba(15, 23, 42, 0.15)',
        }}
      >
        {/* Value Proposition */}
        <ValueProposition onOpenDownloadModal={openDownload} />

        {/* Real App Screens (Photos from src/assets in smartphone mockups) */}
        <AppScreenshots onOpenDownloadModal={openDownload} />

        {/* Simplified 3-Step Visual How It Works */}
        <HowItWorks onOpenDownloadModal={openDownload} />

        {/* Fleet & Capacity Showcase with real blue trucks photo */}
        <FleetShowcase onOpenDownloadModal={openDownload} />

        {/* Market Comparison */}
        <MarketComparison onOpenDownloadModal={openDownload} />

        {/* Security & Compliance */}
        <SecurityCompliance />

        {/* FAQ */}
        <Faq />

        {/* 1-Click Direct Contact Section (Without input fields) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Footer onOpenDownloadModal={openDownload} />
      </div>

      {/* Download Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={closeDownload}
      />
    </div>
  );
}
