import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowDownToLine, ChevronRight, Smartphone } from 'lucide-react';
import logoRotaJa from '../assets/Rota Já - Logo V2.png';

export default function Navbar({ onOpenDownloadModal, onOpenContact, onGoHome }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    if (onGoHome) onGoHome();
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (onOpenContact) onOpenContact();
  };

  return (
    <>
      <header
        className={`site-header ${isScrolled && !menuOpen ? 'site-header--scrolled' : ''} ${menuOpen ? 'site-header--menu-open' : ''}`}
      >
        <div className="nav-bar-inner">
          {/* Logo Link — Visível no topo e no mobile, oculto no pill flutuante do desktop quando scrolled */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              if (onGoHome) onGoHome();
              else window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="nav-logo-link"
            aria-label="RotaJá Início"
          >
            <div className={`nav-logo-badge ${isScrolled && !menuOpen ? 'nav-logo-badge--scrolled' : 'nav-logo-badge--hero'}`}>
              <img
                src={logoRotaJa}
                alt="RotaJá"
                className="nav-logo-img"
              />
            </div>
          </a>

          {/* Right side actions */}
          <div className="nav-actions">
            <button
              onClick={onOpenDownloadModal}
              className="nav-btn-download"
              id="nav-download-btn"
              aria-label="Baixar aplicativo"
            >
              <ArrowDownToLine size={18} strokeWidth={2.5} />
              <span>Baixe o app</span>
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`nav-btn-menu ${menuOpen ? 'nav-btn-menu--open' : ''}`}
              aria-label={menuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              id="nav-menu-toggle"
            >
              {menuOpen ? (
                <>
                  <X size={20} strokeWidth={2.5} />
                  <span className="nav-btn-menu-text">Fechar</span>
                </>
              ) : (
                <>
                  <Menu size={20} strokeWidth={2.5} />
                  <span className="nav-btn-menu-text">Menu</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mega Navigation Drawer */}
        {menuOpen && (
          <div className="mega-menu-drawer">
            <div className="mega-menu-container">
              {/* Quick nav links */}
              <div className="mega-menu-tags">
                <span className="mega-menu-badge">Serviços RotaJá</span>
                <a href="#solucoes" onClick={(e) => handleNavClick(e, '#solucoes')} className="mega-menu-tab-link">Motorista</a>
                <a href="#solucoes" onClick={(e) => handleNavClick(e, '#solucoes')} className="mega-menu-tab-link">Empresa</a>
                <a href="#aplicativo" onClick={(e) => handleNavClick(e, '#aplicativo')} className="mega-menu-tab-link">App</a>
                <a href="#como-funciona" onClick={(e) => handleNavClick(e, '#como-funciona')} className="mega-menu-tab-link">Como Funciona</a>
                <a href="#diferenciais" onClick={(e) => handleNavClick(e, '#diferenciais')} className="mega-menu-tab-link">Segurança &amp; ANTT</a>
                <a href="#contato" onClick={handleContactClick} className="mega-menu-tab-link">Suporte &amp; Contato</a>
              </div>

              {/* Main grid */}
              <div className="mega-menu-grid">
                {/* Left — Nav links */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#1a56db', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Por que escolher o RotaJá
                  </div>
                  <a href="#solucoes" onClick={(e) => handleNavClick(e, '#solucoes')} className="menu-large-link">
                    <span>Fretes Urbanos (VUC, Vans e 3/4)</span>
                    <ChevronRight size={20} color="#94a3b8" />
                  </a>
                  <a href="#solucoes" onClick={(e) => handleNavClick(e, '#solucoes')} className="menu-large-link">
                    <span>Cidade a Cidade (Intermunicipal)</span>
                    <ChevronRight size={20} color="#94a3b8" />
                  </a>
                  <a href="#solucoes" onClick={(e) => handleNavClick(e, '#solucoes')} className="menu-large-link">
                    <span>Cargas Pesadas &amp; Carretas</span>
                    <ChevronRight size={20} color="#94a3b8" />
                  </a>
                </div>

                {/* Right — App CTA card */}
                <div className="menu-action-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        backgroundColor: '#eff6ff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Smartphone size={20} color="#1a56db" />
                    </div>
                    <div>
                      <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>Aplicativo RotaJá</div>
                      <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Disponível para Android e iPhone</div>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                    Cadastre-se gratuitamente como motorista ou crie sua conta de empresa para publicar e gerenciar fretes.
                  </p>
                  <button
                    onClick={() => { setMenuOpen(false); onOpenDownloadModal(); }}
                    style={{
                      width: '100%',
                      padding: '13px',
                      borderRadius: '12px',
                      backgroundColor: '#1a56db',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(26, 86, 219, 0.35)',
                    }}
                  >
                    <ArrowDownToLine size={17} />
                    <span>Instalar Aplicativo Agora</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <style>{`
        /* ===== HEADER BASE ===== */
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 1000;
          background-color: transparent;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-bar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 86px;
          padding: 0 40px;
          max-width: 1400px;
          margin: 0 auto;
          gap: 16px;
          transition: all 0.3s ease;
        }

        /* ===== LOGO BADGE ===== */
        .nav-logo-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nav-logo-badge--hero {
          background: #ffffff;
          padding: 8px 20px;
          border-radius: 9999px;
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.25), 0 0 0 2px rgba(255, 255, 255, 0.85);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .nav-logo-badge--hero:hover {
          transform: scale(1.03);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.32), 0 0 0 2.5px #ffffff;
        }
        .nav-logo-img {
          height: 44px;
          width: auto;
          object-fit: contain;
          display: block;
        }

        /* ===== RIGHT ACTIONS (DESKTOP DEFAULT) ===== */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        /* Desktop "Baixe o app" (Destaque Azul) */
        .nav-btn-download {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background-color: #1a56db;
          color: #ffffff;
          border: none;
          border-radius: 9999px;
          font-family: 'Plus Jakarta Sans', Inter, sans-serif;
          font-size: 0.96rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 8px 24px rgba(26, 86, 219, 0.45);
          white-space: nowrap;
        }
        .nav-btn-download:hover {
          background-color: #1042b8;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 28px rgba(26, 86, 219, 0.55);
        }

        /* Desktop "Menu" (Destaque Branco Robusto) */
        .nav-btn-menu {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          background-color: #ffffff;
          color: #0f172a;
          border: none;
          border-radius: 9999px;
          font-family: 'Plus Jakarta Sans', Inter, sans-serif;
          font-size: 0.96rem;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25), 0 0 0 2px rgba(255, 255, 255, 0.85);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .nav-btn-menu:hover {
          background-color: #ffffff;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.32), 0 0 0 2px #ffffff;
        }
        .nav-btn-menu--open {
          background-color: #0f172a !important;
          color: #ffffff !important;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.3) !important;
        }
        .nav-btn-menu-text {
          display: inline;
        }

        /* ===== DESKTOP SCROLLED: PILL FLUTUANTE CENTRALIZADO SEM LOGO ===== */
        @media (min-width: 900px) {
          .site-header--scrolled {
            top: 12px;
            left: 50%;
            right: auto;
            width: auto;
            max-width: calc(100vw - 48px);
            transform: translateX(-50%);
            background-color: rgba(255, 255, 255, 0.97) !important;
            backdrop-filter: saturate(180%) blur(16px);
            -webkit-backdrop-filter: saturate(180%) blur(16px);
            border-radius: 9999px;
            border: 2px solid #1a56db !important;
            box-shadow: 0 12px 36px -4px rgba(26, 86, 219, 0.22), 0 4px 16px rgba(15, 23, 42, 0.08) !important;
          }
          .site-header--scrolled .nav-bar-inner {
            height: 50px;
            padding: 0 8px;
            justify-content: center;
            width: auto;
          }
          /* LOGO COMPLETAMENTE OCULTO NO PILL SCROLLED DO PC */
          .site-header--scrolled .nav-logo-link {
            display: none !important;
          }
          .site-header--scrolled .nav-actions {
            gap: 8px;
          }
          .site-header--scrolled .nav-btn-download {
            padding: 8px 18px;
            font-size: 0.9rem;
            box-shadow: 0 4px 14px rgba(26, 86, 219, 0.35);
          }
          .site-header--scrolled .nav-btn-menu {
            padding: 8px 18px;
            font-size: 0.9rem;
            background-color: #f1f5f9;
            color: #0f172a;
            border: 1px solid #cbd5e1;
            box-shadow: none;
          }
          .site-header--scrolled .nav-btn-menu:hover {
            background-color: #e2e8f0;
          }
          .site-header--scrolled .nav-btn-menu--open {
            background-color: #0f172a !important;
            color: #ffffff !important;
            border-color: #0f172a !important;
          }

          .site-header--menu-open {
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            width: 100% !important;
            max-width: 100vw !important;
            transform: none !important;
            background-color: #ffffff !important;
            border-radius: 0 !important;
            border: none !important;
            border-bottom: 1px solid #e2e8f0 !important;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06) !important;
          }
          .site-header--menu-open .nav-logo-link {
            display: flex !important;
          }
          .site-header--menu-open .nav-bar-inner {
            height: 72px;
            padding: 0 40px;
            justify-content: space-between;
          }
        }

        /* ===== MEGA MENU DRAWER ===== */
        .mega-menu-drawer {
          background-color: #ffffff;
          border-top: 1px solid #f1f5f9;
          padding: 32px 32px 40px;
          animation: menuFade 0.22s ease;
          max-height: calc(90vh - 72px);
          max-height: calc(90dvh - 72px);
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        .mega-menu-container {
          max-width: 1280px;
          margin: 0 auto;
        }
        .mega-menu-tags {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          padding-bottom: 18px;
          border-bottom: 1.5px solid #f1f5f9;
          margin-bottom: 24px;
        }
        .mega-menu-badge {
          background-color: #1a56db;
          color: #ffffff;
          padding: 4px 11px;
          border-radius: 8px;
          font-size: 0.78rem;
          font-weight: 700;
        }
        .mega-menu-tab-link {
          color: #334155;
          font-weight: 600;
          font-size: 0.88rem;
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .mega-menu-tab-link:hover { color: #1a56db; }

        .mega-menu-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          align-items: start;
        }
        .menu-large-link {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1rem, 2.2vw, 1.7rem);
          font-weight: 800;
          color: #0f172a;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 9px 0;
          border-bottom: 1px solid #f1f5f9;
          transition: color 0.2s ease;
        }
        .menu-large-link:hover { color: #1a56db; }

        .menu-action-card {
          background-color: #f8fafc;
          border-radius: 18px;
          padding: 22px;
          border: 1.5px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        @keyframes menuFade {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ===== MOBILE (≤768px) ===== */
        @media (max-width: 768px) {
          .nav-bar-inner {
            height: 56px;
            padding: 0 16px;
            gap: 12px;
          }
          .nav-logo-badge--hero {
            padding: 4px 10px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          }
          .nav-logo-img {
            height: 32px;
          }

          .nav-actions {
            margin-left: auto;
            gap: 14px;
          }

          /* Mobile top style for Baixe o app: outlined rectangle like inDrive (no icon) */
          .nav-btn-download {
            padding: 7px 14px;
            font-size: 0.82rem;
            font-weight: 700;
            border-radius: 8px;
            background-color: rgba(0, 0, 0, 0.28);
            color: #ffffff;
            border: 1px solid rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            box-shadow: none;
          }
          .nav-btn-download svg {
            display: none !important;
          }
          .nav-btn-download:hover {
            background-color: rgba(255, 255, 255, 0.2);
            border-color: #ffffff;
            transform: none;
            box-shadow: none;
          }

          /* Mobile menu: clean 3 lines with NO heavy contour/box, transparent like inDrive */
          .nav-btn-menu {
            width: auto;
            height: auto;
            padding: 4px;
            justify-content: center;
            border-radius: 0;
            border: none;
            background-color: transparent;
            color: #ffffff;
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
            box-shadow: none;
          }
          .nav-btn-menu-text {
            display: none;
          }
          .nav-btn-menu:hover {
            transform: none;
            box-shadow: none;
            color: #ffffff;
            background-color: transparent;
          }

          /* Scrolled on Mobile: solid clean header */
          .site-header--scrolled {
            background-color: rgba(255, 255, 255, 0.97) !important;
            backdrop-filter: saturate(180%) blur(16px);
            -webkit-backdrop-filter: saturate(180%) blur(16px);
            border-bottom: 1px solid #e2e8f0;
            box-shadow: 0 2px 12px rgba(15, 23, 42, 0.06);
          }
          .site-header--scrolled .nav-bar-inner {
            height: 54px;
            padding: 0 16px;
          }
          .site-header--scrolled .nav-logo-badge--scrolled {
            display: inline-flex;
            align-items: center;
            padding: 3px 8px;
            border-radius: 6px;
            background: #ffffff;
          }
          .site-header--scrolled .nav-btn-download {
            background-color: #1a56db;
            color: #ffffff;
            border: none;
            border-radius: 8px;
            box-shadow: 0 3px 10px rgba(26, 86, 219, 0.3);
          }
          .site-header--scrolled .nav-btn-menu {
            border: none;
            background-color: transparent;
            color: #0f172a;
          }

          /* QUANDO ABRIR O MENU NO CELULAR: O BOTÃO DE BAIXAR SOME */
          .site-header--menu-open .nav-btn-download {
            display: none !important;
          }
          .site-header--menu-open {
            background-color: #ffffff !important;
            border-bottom: 1px solid #e2e8f0 !important;
          }
          .site-header--menu-open .nav-btn-menu {
            background-color: transparent !important;
            color: #0f172a !important;
            border: none !important;
          }

          .mega-menu-drawer {
            padding: 18px 16px 28px;
            max-height: calc(100dvh - 54px);
          }
          .mega-menu-tags {
            gap: 8px;
            padding-bottom: 14px;
            margin-bottom: 18px;
          }
          .mega-menu-tab-link {
            font-size: 0.82rem;
          }
          .mega-menu-grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }
          .menu-large-link {
            font-size: 1rem;
            padding: 8px 0;
          }
          .menu-action-card {
            padding: 18px 14px;
            border-radius: 14px;
          }
        }
      `}</style>
    </>
  );
}
