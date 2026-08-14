import React, { useState, useEffect } from 'react';
import { ArrowDownToLine, CheckCircle2, ShieldCheck, ChevronRight } from 'lucide-react';
import photoManTruck from '../assets/hero-man-truck.jpg';
import photoWorkerBoxes from '../assets/delivery-worker-boxes.jpg';
import photoTrucksFleet from '../assets/trucks-fleet.jpg';

export default function Hero({ onOpenDownloadModal }) {
  const slides = [
    {
      image: photoManTruck,
      alt: 'Motorista profissional com van de entregas RotaJá',
    },
    {
      image: photoWorkerBoxes,
      alt: 'Entregador transportando caixas e encomendas',
    },
    {
      image: photoTrucksFleet,
      alt: 'Frota pesada de caminhões e carretas azuis',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      id="hero"
      style={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#09121f',
      }}
    >
      {/* Dynamic Background Slideshow (Sharp, Crisp, Vibrant with Cross-Fade) */}
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: currentSlide === index ? 1 : 0,
            transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 1,
          }}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
        </div>
      ))}

      {/* Modern inDrive-Style Light Left-Side Vignette (Preserves maximum photo brightness and sharpness) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(9, 18, 31, 0.78) 0%, rgba(9, 18, 31, 0.45) 45%, rgba(9, 18, 31, 0.1) 85%)',
          zIndex: 2,
        }}
      />

      {/* Main Content Area */}
      <div
        className="corporate-container"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          paddingTop: '40px',
        }}
      >
        <div style={{ maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
          
          {/* inDrive-style Highlight Badge & Bold Headline */}
          <div>
            <div
              style={{
                display: 'inline-block',
                backgroundColor: '#1a56db',
                color: '#ffffff',
                fontFamily: 'Plus Jakarta Sans, Inter, sans-serif',
                fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                padding: '4px 18px',
                borderRadius: '12px',
                marginBottom: '10px',
                letterSpacing: '-0.02em',
                boxShadow: '0 4px 20px rgba(26, 86, 219, 0.4)',
              }}
            >
              Fretes justos
            </div>

            <h1
              style={{
                fontFamily: 'Plus Jakarta Sans, Inter, sans-serif',
                fontSize: 'clamp(2.4rem, 4.4vw, 3.9rem)',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.08,
                letterSpacing: '-0.035em',
                textShadow: '0 3px 18px rgba(0, 0, 0, 0.7)',
                marginTop: '4px',
              }}
            >
              por um valor que ambos concordam
            </h1>
          </div>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.25vw, 1.22rem)',
              color: 'rgba(255, 255, 255, 0.95)',
              lineHeight: 1.65,
              maxWidth: '560px',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.6)',
              fontWeight: 500,
            }}
          >
            Conectamos motoristas autônomos a empresas para o transporte de cargas em todo o Brasil. Sem intermediários e com pagamento garantido.
          </p>

          {/* inDrive-Style Single Prominent CTA Pill Button */}
          <div style={{ paddingTop: '6px' }}>
            <button
              onClick={onOpenDownloadModal}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '18px 40px',
                backgroundColor: '#1a56db',
                color: '#ffffff',
                fontFamily: 'Plus Jakarta Sans, Inter, sans-serif',
                fontSize: '1.08rem',
                fontWeight: 800,
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 30px rgba(26, 86, 219, 0.55)',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1042b8';
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 12px 36px rgba(26, 86, 219, 0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1a56db';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(26, 86, 219, 0.55)';
              }}
            >
              <ArrowDownToLine size={22} />
              <span>Baixar o aplicativo</span>
            </button>
          </div>

          {/* Trust indicators */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', paddingTop: '10px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                padding: '6px 14px',
                borderRadius: '9999px',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <ShieldCheck size={16} color="#10b981" />
              <span style={{ fontSize: '0.84rem', fontWeight: 700, color: '#ffffff' }}>
                Motoristas Homologados
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                padding: '6px 14px',
                borderRadius: '9999px',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <CheckCircle2 size={16} color="#10b981" />
              <span style={{ fontSize: '0.84rem', fontWeight: 700, color: '#ffffff' }}>
                Pagamento 100% Garantido
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Slideshow Progress Dots (Bottom Right) */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          right: '40px',
          zIndex: 10,
          display: 'flex',
          gap: '8px',
          backgroundColor: 'rgba(0, 0, 0, 0.35)',
          padding: '8px 14px',
          borderRadius: '9999px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            style={{
              width: currentSlide === i ? '24px' : '8px',
              height: '8px',
              borderRadius: '9999px',
              backgroundColor: currentSlide === i ? '#ffffff' : 'rgba(255, 255, 255, 0.4)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
