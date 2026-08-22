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
    highlight: 'Preços justos',
    rest: 'em entregas, frete e cargas',
  },
  {
    image: photoWorkerBoxes,
    alt: 'Entregador transportando caixas e encomendas',
    label: 'Entregas',
    highlight: 'Sem burocracia',
    rest: 'entregas rápidas direto ao destino',
  },
  {
    image: photoTrucksFleet,
    alt: 'Frota pesada de caminhões e carretas azuis',
    label: 'Frota',
    highlight: 'A frota certa',
    rest: 'para qualquer tamanho de frete',
  },
];

function HeroTruckIcon() {
  return (
    <svg width="40" height="29" viewBox="0 0 28 20" fill="none" aria-hidden="true">
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
    }, 60);
    return () => clearInterval(tick);
  }, [currentSlide]);

  const updateTruckPosition = () => {
    const activeTab = tabRefs.current[currentSlide];
    const nav = navRef.current;
    if (activeTab && nav) {
      const tabRect = activeTab.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      const relativeLeft = tabRect.left - navRect.left + tabRect.width / 2;
      setTruckLeft(relativeLeft);
    }
  };

  useLayoutEffect(() => {
    updateTruckPosition();
  }, [currentSlide]);

  useEffect(() => {
    window.addEventListener('resize', updateTruckPosition);
    return () => window.removeEventListener('resize', updateTruckPosition);
  }, [currentSlide]);

  const handleTabClick = (index) => {
    setCurrentSlide(index);
    setSlideProgress(0);
  };

  const activeSlideData = slides[currentSlide];

  return (
    <section className="hero-section" id="inicio">
      {/* Background Slideshow */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="hero-slide"
          style={{
            opacity: index === currentSlide ? 1 : 0,
            transform: index === currentSlide ? 'scale(1)' : 'scale(1.04)',
            pointerEvents: index === currentSlide ? 'auto' : 'none',
          }}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="hero-slide-img"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Dark Vignette Overlay for maximum readability */}
      <div className="hero-vignette" />

      {/* Hero Copy (Left-Aligned, inDrive Style with RotaJá Blue) */}
      <div className="hero-content-wrapper">
        <div className="corporate-container">
          <div className="hero-copy" key={currentSlide}>
            <h1 className="hero-headline">
              <span className="hero-highlight-tag">{activeSlideData.highlight}</span>
              <span className="hero-headline-rest">{activeSlideData.rest}</span>
            </h1>

            {/* Left-Aligned inDrive Style CTA Pill */}
            <div className="hero-cta-wrap">
              <button onClick={onOpenDownloadModal} className="hero-indrive-cta" id="hero-main-cta">
                Baixar aplicativo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Slide nav (inDrive style 3 progress bars) ── */}
      <div className="hero-slide-nav-wrap">
        <nav className="hero-slide-nav" ref={navRef} aria-label="Slideshow de categorias">
          {/* Animated Truck Icon running over progress track */}
          <div
            className="hero-slide-truck"
            style={{
              left: `${truckLeft}px`,
            }}
          >
            <HeroTruckIcon />
          </div>

          {slides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <button
                key={index}
                ref={(el) => (tabRefs.current[index] = el)}
                onClick={() => handleTabClick(index)}
                className={`hero-slide-tab ${isActive ? 'hero-slide-tab--active' : ''}`}
                aria-label={`Slide ${index + 1}: ${slide.label}`}
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
          height: 100%;
          min-height: 640px;
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
            rgba(6, 13, 23, 0.70) 45%,
            rgba(6, 13, 23, 0.35) 75%,
            rgba(6, 13, 23, 0.15) 100%
          ),
          linear-gradient(
            0deg,
            rgba(6, 13, 23, 0.85) 0%,
            rgba(6, 13, 23, 0) 35%
          );
          z-index: 2;
        }
        .hero-content-wrapper {
          position: absolute;
          z-index: 10;
          left: 0;
          right: 0;
          top: clamp(140px, 24vh, 230px);
          width: 100%;
          pointer-events: none;
          padding: 0;
        }
        .hero-copy {
          max-width: 740px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 28px;
          pointer-events: auto;
          animation: heroFadeIn 0.5s ease;
          text-align: left;
        }
        .hero-headline {
          font-family: 'Plus Jakarta Sans', Inter, -apple-system, sans-serif;
          font-size: clamp(2.7rem, 5.2vw, 4.4rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.08;
          letter-spacing: -0.04em;
          margin: 0;
          text-align: left;
        }
        .hero-highlight-tag {
          display: inline-block;
          background: #1a56db;
          color: #ffffff;
          padding: 4px 18px 7px;
          border-radius: 10px;
          box-shadow: 0 6px 24px rgba(26, 86, 219, 0.45);
          margin-bottom: 8px;
          font-weight: 900;
          letter-spacing: -0.02em;
          text-align: left;
        }
        .hero-headline-rest {
          display: block;
          color: #ffffff;
          margin-top: 4px;
          text-shadow: 0 3px 20px rgba(0, 0, 0, 0.6);
          text-align: left;
        }
        .hero-cta-wrap {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          width: 100%;
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
          font-weight: 800;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(26, 86, 219, 0.4);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          margin-right: auto;
          margin-left: 0;
          white-space: nowrap;
        }
        .hero-indrive-cta:hover {
          background-color: #1042b8;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 30px rgba(26, 86, 219, 0.55);
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
          padding-top: 44px;
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
          .hero-section {
            min-height: 480px;
          }
          .hero-content-wrapper {
            top: clamp(75px, 12vh, 105px);
            padding: 0;
          }
          .hero-content-wrapper .corporate-container {
            padding: 0 16px;
            max-width: 100%;
          }
          .hero-copy {
            gap: 14px;
            max-width: 100%;
            align-items: flex-start;
            text-align: left;
          }
          .hero-headline {
            font-size: clamp(2.05rem, 8.4vw, 2.75rem);
            line-height: 1.08;
            letter-spacing: -0.035em;
            text-align: left;
          }
          .hero-highlight-tag {
            padding: 3px 10px 5px;
            border-radius: 6px;
            font-size: 0.88em;
            margin-bottom: 4px;
            text-align: left;
            box-shadow: 0 3px 12px rgba(26, 86, 219, 0.4);
          }
          .hero-headline-rest {
            text-align: left;
          }
          .hero-cta-wrap {
            justify-content: flex-start;
            align-items: flex-start;
            padding-top: 4px;
          }
          .hero-indrive-cta {
            width: auto;
            align-self: flex-start;
            padding: 12px 22px;
            font-size: 0.95rem;
            font-weight: 700;
            border-radius: 10px;
            margin-right: auto;
            margin-left: 0;
            box-shadow: 0 4px 14px rgba(26, 86, 219, 0.35);
          }
          .hero-slide-nav-wrap {
            padding: 0 14px 16px;
          }
          .hero-slide-nav {
            max-width: 100%;
            padding-top: 30px;
          }
          .hero-slide-tab {
            padding: 0 6px;
            gap: 8px;
          }
          .hero-slide-label {
            font-size: 0.84rem;
          }
        }
        @media (max-width: 380px) {
          .hero-content-wrapper {
            top: 68px;
          }
          .hero-content-wrapper .corporate-container {
            padding: 0 12px;
          }
          .hero-headline {
            font-size: 1.85rem;
          }
          .hero-indrive-cta {
            padding: 11px 18px;
            font-size: 0.9rem;
            border-radius: 8px;
          }
          .hero-slide-label {
            font-size: 0.78rem;
          }
        }
      `}</style>
    </section>
  );
}
