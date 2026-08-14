import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import photoManTruck from '../assets/hero-man-truck.jpg';
import photoWorkerBoxes from '../assets/delivery-worker-boxes.jpg';
import photoTrucksFleet from '../assets/trucks-fleet.jpg';

const SLIDE_DURATION = 5000;

const slides = [
  {
    image: photoManTruck,
    alt: 'Motorista profissional com van de entregas RotaJá',
    label: 'Motoristas',
    highlight: 'Fretes justos',
    rest: 'por um preço que ambos concordam',
  },
  {
    image: photoWorkerBoxes,
    alt: 'Entregador transportando caixas e encomendas',
    label: 'Entregas',
    highlight: 'Entregas rápidas',
    rest: 'direto ao destino e sem burocracia',
  },
  {
    image: photoTrucksFleet,
    alt: 'Frota pesada de caminhões e carretas azuis',
    label: 'Frota',
    highlight: 'A frota certa',
    rest: 'para qualquer tamanho de carga',
  },
];

function HeroTruckIcon() {
  return (
    <svg width="28" height="20" viewBox="0 0 28 20" fill="none" aria-hidden="true">
      <rect x="1" y="7" width="13" height="9" rx="1.5" fill="#1a56db" />
      <path d="M14 10h5l3 3v3h-8V10z" fill="#1a56db" />
      <rect x="3" y="9" width="5" height="3" rx="0.5" fill="#93c5fd" />
      <circle cx="6" cy="16.5" r="2.5" fill="#0f172a" />
      <circle cx="6" cy="16.5" r="1.2" fill="#94a3b8" />
      <circle cx="19" cy="16.5" r="2.5" fill="#0f172a" />
      <circle cx="19" cy="16.5" r="1.2" fill="#94a3b8" />
      <rect x="15" y="11" width="4" height="2" rx="0.5" fill="#93c5fd" />
    </svg>
  );
}

export default function Hero({ onOpenDownloadModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideProgress, setSlideProgress] = useState(0);
  const tabRefs = useRef([]);
  const navRef = useRef(null);
  const [truckLeft, setTruckLeft] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setSlideProgress(0);
    const start = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      setSlideProgress(Math.min(100, (elapsed / SLIDE_DURATION) * 100));
    }, 35);
    return () => clearInterval(tick);
  }, [currentSlide]);

  useLayoutEffect(() => {
    const updateTruckPosition = () => {
      const tab = tabRefs.current[currentSlide];
      const nav = navRef.current;
      if (!tab || !nav) return;
      const navRect = nav.getBoundingClientRect();
      const tabRect = tab.getBoundingClientRect();
      setTruckLeft(tabRect.left - navRect.left + tabRect.width / 2);
    };

    updateTruckPosition();
    window.addEventListener('resize', updateTruckPosition);
    return () => window.removeEventListener('resize', updateTruckPosition);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const activeSlideData = slides[currentSlide];

  return (
    <section id="hero" className="hero-section">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="hero-slide"
          style={{
            opacity: currentSlide === index ? 1 : 0,
            transform: currentSlide === index ? 'scale(1)' : 'scale(1.03)',
          }}
        >
          <img src={slide.image} alt={slide.alt} className="hero-slide-img" />
        </div>
      ))}

      {/* Vignette overlay */}
      <div className="hero-vignette" />

      <div className="corporate-container hero-content-wrapper">
        <div className="hero-copy">
          
          {/* inDrive Style Impactful Headline */}
          <h1 className="hero-headline">
            <span className="hero-highlight-tag">{activeSlideData.highlight}</span>
            <span className="hero-headline-rest">{activeSlideData.rest}</span>
          </h1>

          {/* Single Direct inDrive Style CTA */}
          <div className="hero-cta-wrap">
            <button onClick={onOpenDownloadModal} className="hero-indrive-cta">
              Baixar o aplicativo
            </button>
          </div>

        </div>
      </div>

      {/* Navegação inDrive — palavras-chave + caminhão com indicador de progresso */}
      <div className="hero-slide-nav-wrap">
        <nav className="hero-slide-nav" ref={navRef} aria-label="Slides do hero">
          <div
            className="hero-slide-truck"
            style={{ left: truckLeft }}
            aria-hidden="true"
          >
            <HeroTruckIcon />
          </div>

          {slides.map((slide, index) => {
            const isActive = currentSlide === index;
            return (
              <button
                key={slide.label}
                ref={(el) => { tabRefs.current[index] = el; }}
                type="button"
                className={`hero-slide-tab ${isActive ? 'hero-slide-tab--active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-current={isActive ? 'true' : undefined}
              >
                <span className="hero-slide-label">{slide.label}</span>
                <span className="hero-slide-track">
                  <span
                    className="hero-slide-fill"
                    style={{
                      width: isActive ? `${slideProgress}%` : index < currentSlide ? '100%' : '0%',
                    }}
                  />
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      <style>{`
        .hero-section {
          width: 100%;
          height: 100vh;
          min-height: 600px;
          position: relative;
          overflow: hidden;
          background-color: #060d17;
        }
        .hero-slide {
          position: absolute;
          inset: 0;
          transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 5s cubic-bezier(0.25, 1, 0.5, 1);
          z-index: 1;
        }
        .hero-slide-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .hero-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(6, 13, 23, 0.88) 0%,
            rgba(6, 13, 23, 0.72) 36%,
            rgba(6, 13, 23, 0.35) 65%,
            rgba(6, 13, 23, 0.12) 100%
          ),
          linear-gradient(
            0deg,
            rgba(6, 13, 23, 0.82) 0%,
            rgba(6, 13, 23, 0) 35%
          );
          z-index: 2;
        }
        .hero-content-wrapper {
          position: absolute;
          z-index: 10;
          left: 0;
          right: 0;
          top: clamp(140px, 26vh, 230px);
          width: 100%;
          pointer-events: none;
        }
        .hero-copy {
          max-width: 620px;
          display: flex;
          flex-direction: column;
          gap: 28px;
          pointer-events: auto;
          animation: heroFadeIn 0.5s ease;
        }
        .hero-headline {
          font-family: 'Plus Jakarta Sans', Inter, sans-serif;
          font-size: clamp(2.4rem, 4.8vw, 4.1rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.035em;
          margin: 0;
        }
        .hero-highlight-tag {
          display: inline-block;
          background: #1a56db;
          color: #ffffff;
          padding: 3px 16px 7px;
          border-radius: 10px;
          box-shadow: 0 6px 22px rgba(26, 86, 219, 0.45);
          margin-bottom: 8px;
          font-weight: 800;
          letter-spacing: -0.03em;
        }
        .hero-headline-rest {
          display: block;
          color: #ffffff;
          margin-top: 4px;
          text-shadow: 0 3px 18px rgba(0, 0, 0, 0.5);
        }
        .hero-cta-wrap {
          padding-top: 4px;
        }
        .hero-indrive-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 36px;
          background-color: #1a56db;
          color: #ffffff;
          font-family: 'Plus Jakarta Sans', Inter, sans-serif;
          font-size: 1.08rem;
          font-weight: 700;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(26, 86, 219, 0.4);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-indrive-cta:hover {
          background-color: #1042b8;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 32px rgba(26, 86, 219, 0.55);
        }
        .hero-indrive-cta:active {
          transform: translateY(0) scale(0.98);
        }

        /* ── Slide nav inDrive ── */
        .hero-slide-nav-wrap {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 10;
          padding: 0 36px 32px;
        }
        .hero-slide-nav {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          max-width: 580px;
          margin: 0 auto;
          padding-top: 36px;
        }
        .hero-slide-truck {
          position: absolute;
          top: 0;
          transform: translateX(-50%);
          transition: left 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: drop-shadow(0 3px 8px rgba(26, 86, 219, 0.6));
          z-index: 2;
        }
        .hero-slide-tab {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0 16px 0;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .hero-slide-label {
          font-family: 'Plus Jakarta Sans', Inter, sans-serif;
          font-size: clamp(1rem, 1.35vw, 1.15rem);
          font-weight: 500;
          color: rgba(255, 255, 255, 0.45);
          transition: color 0.25s ease, font-weight 0.25s ease;
          white-space: nowrap;
        }
        .hero-slide-tab--active .hero-slide-label {
          color: #ffffff;
          font-weight: 800;
        }
        .hero-slide-tab:hover .hero-slide-label {
          color: rgba(255, 255, 255, 0.8);
        }
        .hero-slide-tab--active:hover .hero-slide-label {
          color: #ffffff;
        }
        .hero-slide-track {
          display: block;
          width: 100%;
          height: 2px;
          background: rgba(255, 255, 255, 0.22);
          border-radius: 9999px;
          overflow: hidden;
        }
        .hero-slide-fill {
          display: block;
          height: 100%;
          background: #ffffff;
          border-radius: 9999px;
          transition: width 0.08s linear;
        }
        .hero-slide-tab--active .hero-slide-track {
          height: 3px;
          background: rgba(255, 255, 255, 0.35);
        }

        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .hero-content-wrapper {
            top: clamp(110px, 20vh, 180px);
          }
          .hero-headline {
            font-size: clamp(2rem, 7.8vw, 2.7rem);
          }
          .hero-indrive-cta {
            width: 100%;
            padding: 14px 24px;
            font-size: 1rem;
          }
          .hero-slide-nav-wrap {
            padding: 0 16px 20px;
          }
          .hero-slide-nav {
            max-width: 100%;
            padding-top: 30px;
          }
          .hero-slide-label {
            font-size: 0.88rem;
          }
        }
      `}</style>
    </section>
  );
}
