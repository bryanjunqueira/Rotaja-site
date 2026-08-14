import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowDownToLine, ChevronRight, Smartphone } from 'lucide-react';
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
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const isTransparent = !isScrolled && !menuOpen;

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: isScrolled && !menuOpen ? '12px' : '0',
          left: isScrolled && !menuOpen ? '50%' : '0',
          right: isScrolled && !menuOpen ? 'auto' : '0',
          width: isScrolled && !menuOpen ? 'min(92%, 1000px)' : '100%',
          transform: isScrolled && !menuOpen ? 'translateX(-50%)' : 'none',
          zIndex: 1000,
          backgroundColor: menuOpen
            ? '#ffffff'
            : isScrolled
            ? 'rgba(255,255,255,0.97)'
            : 'transparent',
          borderRadius: isScrolled && !menuOpen ? '9999px' : '0',
          border: isScrolled && !menuOpen ? '2px solid #1a56db' : 'none',
          borderBottom: menuOpen ? '1px solid #e2e8f0' : 'none',
          backdropFilter: isScrolled && !menuOpen ? 'blur(16px)' : 'none',
          boxShadow: isScrolled && !menuOpen
            ? '0 8px 32px rgba(26,86,219,0.18)'
            : menuOpen
            ? '0 4px 20px rgba(0,0,0,0.06)'
            : 'none',
          transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: isScrolled && !menuOpen ? '60px' : '80px',
            padding: isScrolled && !menuOpen ? '0 24px' : '0 48px',
            maxWidth: isScrolled && !menuOpen ? 'none' : '100%',
            transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {/* LEFT: Enlarged Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}
            aria-label="RotaJá"
          >
            <div
              style={{
                backgroundColor: isTransparent ? '#ffffff' : 'transparent',
                padding: isTransparent ? '6px 16px' : '0',
                borderRadius: '16px',
                boxShadow: isTransparent ? '0 4px 18px rgba(0,0,0,0.22)' : 'none',
                display: 'flex', alignItems: 'center',
                transition: 'all 0.3s ease',
              }}
            >
              <img
                src={logoNoBg}
                alt="RotaJá"
                style={{
                  height: isScrolled && !menuOpen ? '48px' : '58px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  transition: 'all 0.3s ease',
                }}
              />
            </div>
          </a>

          {/* RIGHT: Download + Menu */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              onClick={onOpenDownloadModal}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 28px',
                backgroundColor: '#1a56db',
                color: '#ffffff',
                fontFamily: 'Plus Jakarta Sans, Inter, sans-serif',
                fontSize: '1rem',
                fontWeight: 800,
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 18px rgba(26,86,219,0.35)',
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap',
              }}
            >
              <ArrowDownToLine size={18} />
              Baixe o app
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 24px',
                borderRadius: '9999px',
                backgroundColor: menuOpen
                  ? '#0f172a'
                  : isScrolled
                  ? '#f1f5f9'
                  : '#ffffff',
                color: menuOpen ? '#ffffff' : '#0f172a',
                border: 'none',
                fontFamily: 'Plus Jakarta Sans, Inter, sans-serif',
                fontSize: '1rem',
                fontWeight: 800,
                cursor: 'pointer',
                boxShadow: menuOpen ? 'none' : '0 2px 12px rgba(0,0,0,0.14)',
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap',
              }}
            >
              {menuOpen ? <><X size={20} /> Fechar</> : <><Menu size={20} /> Menu</>}
            </button>
          </div>
        </div>

        {/* MENU DRAWER */}
        {menuOpen && (
          <div
            style={{
              backgroundColor: '#ffffff',
              borderTop: '1px solid #f1f5f9',
              padding: '32px 48px 48px',
              animation: 'menuFade 0.22s ease',
              overflowY: 'auto',
              maxHeight: 'calc(92vh - 80px)',
            }}
          >
            {/* Sub-Nav Row (inDrive tabs style) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexWrap: 'wrap',
                paddingBottom: '24px',
                borderBottom: '1.5px solid #f1f5f9',
                marginBottom: '32px',
              }}
            >
              {[
                { label: 'Motoristas', href: '#solucoes' },
                { label: 'Empresas & Embarcadores', href: '#solucoes' },
                { label: 'Como Funciona', href: '#como-funciona' },
                { label: 'Aplicativo', href: '#aplicativo' },
                { label: 'Frota & Veículos', href: '#frota' },
                { label: 'Suporte', href: '#contato' },
                { label: 'Segurança', href: '#diferenciais' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    backgroundColor: i === 0 ? '#1a56db' : '#f1f5f9',
                    color: i === 0 ? '#ffffff' : '#334155',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Big Links (inDrive style) */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '48px', alignItems: 'start' }}
              className="mega-grid">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                  Por que o RotaJá
                </div>
                {[
                  { label: 'Fretes Urbanos — VUC, Vans e Utilitários', href: '#solucoes' },
                  { label: 'Cidade a Cidade — Rotas Intermunicipais', href: '#solucoes' },
                  { label: 'Cargas Pesadas & Longas Distâncias', href: '#solucoes' },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: 'clamp(1.5rem, 2.4vw, 2rem)',
                      fontWeight: 900,
                      color: '#0f172a',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px 0',
                      borderBottom: '1.5px solid #f1f5f9',
                      transition: 'color 0.15s ease',
                    }}
                    className="mega-link"
                  >
                    <span>{item.label}</span>
                    <ChevronRight size={22} color="#cbd5e1" />
                  </a>
                ))}
              </div>

              <div
                style={{
                  backgroundColor: '#f8fafc',
                  borderRadius: '20px',
                  padding: '28px',
                  border: '1.5px solid #e2e8f0',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Smartphone size={20} color="#1a56db" />
                  </div>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>RotaJá App</div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Android & iPhone</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, marginBottom: '18px' }}>
                  Cadastre-se gratuitamente como motorista ou empresa e publique fretes agora.
                </p>
                <button
                  onClick={() => { setMenuOpen(false); onOpenDownloadModal(); }}
                  style={{
                    width: '100%', padding: '14px',
                    borderRadius: '12px', backgroundColor: '#1a56db', color: '#ffffff',
                    fontWeight: 800, fontSize: '0.95rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    border: 'none', cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(26,86,219,0.3)',
                  }}
                >
                  <ArrowDownToLine size={18} />
                  Instalar Agora
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <style>{`
        .mega-link:hover { color: #1a56db !important; }
        @keyframes menuFade {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 860px) {
          .mega-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
