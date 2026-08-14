import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowDownToLine, ChevronRight, Truck, Building2, ShieldCheck, Headphones, Smartphone, HelpCircle } from 'lucide-react';
import logoNoBg from '../assets/WhatsApp_Image_2026-08-10_at_20.09.11-removebg-preview.png';

export default function Navbar({ onOpenDownloadModal }) {
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
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: isScrolled && !menuOpen ? '12px' : '0',
          left: isScrolled && !menuOpen ? '50%' : '0',
          right: isScrolled && !menuOpen ? 'auto' : '0',
          width: isScrolled && !menuOpen ? 'min(92%, 960px)' : '100%',
          transform: isScrolled && !menuOpen ? 'translateX(-50%)' : 'none',
          zIndex: 1000,
          backgroundColor: menuOpen
            ? '#ffffff'
            : isScrolled
            ? 'rgba(255, 255, 255, 0.96)'
            : 'transparent',
          backdropFilter: menuOpen ? 'none' : isScrolled ? 'saturate(180%) blur(16px)' : 'none',
          WebkitBackdropFilter: menuOpen ? 'none' : isScrolled ? 'saturate(180%) blur(16px)' : 'none',
          borderRadius: isScrolled && !menuOpen ? '9999px' : '0',
          border: isScrolled && !menuOpen
            ? '2px solid #1a56db'
            : 'none',
          borderBottom: menuOpen
            ? '1px solid #e2e8f0'
            : isScrolled
            ? '2px solid #1a56db'
            : 'none',
          boxShadow: isScrolled && !menuOpen
            ? '0 12px 36px -4px rgba(26, 86, 219, 0.22), 0 4px 16px rgba(15, 23, 42, 0.08)'
            : menuOpen
            ? '0 4px 20px rgba(0,0,0,0.06)'
            : 'none',
          overflow: 'visible',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div
          className="nav-bar-inner"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: isScrolled && !menuOpen ? '56px' : '72px',
            padding: isScrolled && !menuOpen ? '0 20px' : '0 36px',
            maxWidth: isScrolled && !menuOpen ? 'none' : '100%',
            margin: '0 auto',
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="nav-logo-link"
            aria-label="RotaJá Início"
          >
            <div className={`nav-logo-badge ${isScrolled || menuOpen ? 'nav-logo-badge--compact' : 'nav-logo-badge--hero'}`}>
              <img
                src={logoNoBg}
                alt="RotaJá"
                className={`nav-logo-img ${
                  menuOpen
                    ? 'nav-logo-img--menu'
                    : isScrolled
                    ? 'nav-logo-img--scrolled'
                    : 'nav-logo-img--hero-inline'
                }`}
              />
            </div>
          </a>

          {!isScrolled ? (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`nav-action-btn nav-action-btn--pill nav-action-btn--hero-menu ${
                menuOpen ? 'nav-action-btn--dark' : 'nav-action-btn--white'
              }`}
              aria-label="Abrir menu de navegação"
            >
              {menuOpen ? (
                <>
                  <X size={22} strokeWidth={2.5} />
                  <span>Fechar</span>
                </>
              ) : (
                <>
                  <Menu size={22} strokeWidth={2.5} />
                  <span>Menu</span>
                </>
              )}
            </button>
          ) : (
            <div className="nav-actions">
              <button
                onClick={onOpenDownloadModal}
                className="nav-action-btn nav-action-btn--primary nav-action-btn--compact"
              >
                <ArrowDownToLine size={18} strokeWidth={2.5} />
                <span>Baixe o app</span>
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`nav-action-btn nav-action-btn--compact ${
                  menuOpen ? 'nav-action-btn--dark' : 'nav-action-btn--light'
                }`}
              >
                {menuOpen ? (
                  <>
                    <X size={20} strokeWidth={2.5} />
                    <span>Fechar</span>
                  </>
                ) : (
                  <>
                    <Menu size={20} strokeWidth={2.5} />
                    <span>Menu</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* inDrive-Style Mega Navigation Menu Drawer */}
        {menuOpen && (
          <div
            style={{
              backgroundColor: '#ffffff',
              borderTop: '1px solid #e2e8f0',
              padding: '36px 40px 48px',
              animation: 'menuFade 0.25s ease',
              maxHeight: 'calc(90vh - 72px)',
              overflowY: 'auto',
            }}
          >
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              
              {/* Horizontal Sub-Tabs / Topics (inDrive Style) */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  flexWrap: 'wrap',
                  paddingBottom: '28px',
                  borderBottom: '1.5px solid #f1f5f9',
                  marginBottom: '36px',
                }}
              >
                <span
                  style={{
                    backgroundColor: '#1a56db',
                    color: '#ffffff',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                  }}
                >
                  Serviços RotaJá
                </span>
                <a
                  href="#solucoes"
                  onClick={(e) => handleNavClick(e, '#solucoes')}
                  style={{ color: '#334155', fontWeight: 600, fontSize: '0.94rem', textDecoration: 'none' }}
                >
                  Ganhe como Motorista
                </a>
                <a
                  href="#solucoes"
                  onClick={(e) => handleNavClick(e, '#solucoes')}
                  style={{ color: '#334155', fontWeight: 600, fontSize: '0.94rem', textDecoration: 'none' }}
                >
                  Para Empresas & Indústrias
                </a>
                <a
                  href="#aplicativo"
                  onClick={(e) => handleNavClick(e, '#aplicativo')}
                  style={{ color: '#334155', fontWeight: 600, fontSize: '0.94rem', textDecoration: 'none' }}
                >
                  Aplicativo
                </a>
                <a
                  href="#como-funciona"
                  onClick={(e) => handleNavClick(e, '#como-funciona')}
                  style={{ color: '#334155', fontWeight: 600, fontSize: '0.94rem', textDecoration: 'none' }}
                >
                  Como Funciona
                </a>
                <a
                  href="#diferenciais"
                  onClick={(e) => handleNavClick(e, '#diferenciais')}
                  style={{ color: '#334155', fontWeight: 600, fontSize: '0.94rem', textDecoration: 'none' }}
                >
                  Segurança & ANTT
                </a>
                <a
                  href="#contato"
                  onClick={(e) => handleNavClick(e, '#contato')}
                  style={{ color: '#334155', fontWeight: 600, fontSize: '0.94rem', textDecoration: 'none' }}
                >
                  Suporte & Contato
                </a>
              </div>

              {/* Main Categories Section (inDrive style big typography) */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1fr',
                  gap: '48px',
                  alignItems: 'start',
                }}
                className="mega-menu-grid"
              >
                {/* Left Categories List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#1a56db', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Por que escolher o RotaJá
                  </div>

                  <a
                    href="#solucoes"
                    onClick={(e) => handleNavClick(e, '#solucoes')}
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                      fontWeight: 800,
                      color: '#0f172a',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 0',
                      borderBottom: '1px solid #f1f5f9',
                      transition: 'all 0.2s ease',
                    }}
                    className="menu-link-hover"
                  >
                    <span>Fretes Urbanos (VUC, Vans e 3/4)</span>
                    <ChevronRight size={24} color="#94a3b8" />
                  </a>

                  <a
                    href="#solucoes"
                    onClick={(e) => handleNavClick(e, '#solucoes')}
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                      fontWeight: 800,
                      color: '#0f172a',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 0',
                      borderBottom: '1px solid #f1f5f9',
                      transition: 'all 0.2s ease',
                    }}
                    className="menu-link-hover"
                  >
                    <span>Cidade a Cidade (Intermunicipal)</span>
                    <ChevronRight size={24} color="#94a3b8" />
                  </a>

                  <a
                    href="#solucoes"
                    onClick={(e) => handleNavClick(e, '#solucoes')}
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                      fontWeight: 800,
                      color: '#0f172a',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 0',
                      borderBottom: '1px solid #f1f5f9',
                      transition: 'all 0.2s ease',
                    }}
                    className="menu-link-hover"
                  >
                    <span>Cargas Pesadas & Carretas</span>
                    <ChevronRight size={24} color="#94a3b8" />
                  </a>
                </div>

                {/* Right Direct Action Card */}
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    borderRadius: '24px',
                    padding: '32px',
                    border: '1.5px solid #e2e8f0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        backgroundColor: '#eff6ff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Smartphone size={22} color="#1a56db" />
                    </div>
                    <div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>
                        Aplicativo RotaJá
                      </div>
                      <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                        Disponível para Android e iPhone
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6 }}>
                    Cadastre-se gratuitamente como motorista ou crie sua conta de empresa para publicar e gerenciar fretes com agilidade.
                  </p>

                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onOpenDownloadModal();
                    }}
                    style={{
                      width: '100%',
                      padding: '14px',
                      borderRadius: '12px',
                      backgroundColor: '#1a56db',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(26, 86, 219, 0.35)',
                    }}
                  >
                    <ArrowDownToLine size={18} />
                    <span>Instalar Aplicativo Agora</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}
      </header>

      <style>{`
        .nav-bar-inner {
          overflow: visible;
        }
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
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.25), 0 0 0 2.5px rgba(255, 255, 255, 0.9);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .nav-logo-badge--hero:hover {
          transform: scale(1.03);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.32), 0 0 0 3px #ffffff;
        }
        .nav-logo-badge--compact {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .nav-logo-img {
          width: auto;
          object-fit: contain;
          display: block;
          transition: height 0.35s ease;
        }
        .nav-logo-img--hero-inline {
          height: 58px;
        }
        .nav-logo-img--scrolled {
          height: 44px;
        }
        .nav-logo-img--menu {
          height: 44px;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-left: auto;
          flex-shrink: 0;
        }
        .nav-action-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 24px;
          border-radius: 12px;
          font-family: 'Plus Jakarta Sans', Inter, sans-serif;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-action-btn--pill {
          padding: 11px 20px;
          font-size: 0.9rem;
          font-weight: 600;
          border-radius: 9999px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          margin-left: auto;
        }
        .nav-action-btn--hero-menu {
          padding: 13px 26px;
          font-size: 1.05rem;
          font-weight: 700;
          border-radius: 9999px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25), 0 0 0 2px rgba(255, 255, 255, 0.85);
          gap: 10px;
          letter-spacing: 0.01em;
        }
        .nav-action-btn--hero-menu:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.32), 0 0 0 2px #ffffff;
        }
        .nav-action-btn--compact {
          padding: 9px 18px;
          font-size: 0.88rem;
          font-weight: 600;
          border-radius: 9999px;
          gap: 8px;
        }
        .nav-action-btn--primary {
          background-color: #1a56db;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(26, 86, 219, 0.3);
        }
        .nav-action-btn--primary:hover {
          background-color: #1042b8;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(26, 86, 219, 0.45);
        }
        .nav-action-btn--white {
          background-color: #ffffff;
          color: #0f172a;
        }
        .nav-action-btn--white:hover {
          background-color: #ffffff;
        }
        .nav-action-btn--light {
          background-color: #f1f5f9;
          color: #0f172a;
          border: 1px solid #cbd5e1;
        }
        .nav-action-btn--light:hover {
          background-color: #e2e8f0;
        }
        .nav-action-btn--dark {
          background-color: #0f172a;
          color: #ffffff;
        }
        .nav-action-btn--dark:hover {
          background-color: #1e293b;
        }
        .menu-link-hover:hover {
          color: #1a56db !important;
        }
        @keyframes menuFade {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .mega-menu-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 640px) {
          .nav-logo-badge--hero {
            padding: 6px 14px;
          }
          .nav-logo-img--hero-inline {
            height: 44px;
          }
          .nav-logo-img--scrolled,
          .nav-logo-img--menu {
            height: 38px;
          }
          .nav-action-btn--hero-menu {
            padding: 10px 18px;
            font-size: 0.92rem;
          }
          .nav-action-btn--compact {
            padding: 8px 14px;
            font-size: 0.82rem;
          }
        }
      `}</style>
    </>
  );
}
