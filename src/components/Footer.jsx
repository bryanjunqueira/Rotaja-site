import React from 'react';
import { ArrowUp, Mail, PhoneCall, ShieldCheck, MapPin } from 'lucide-react';
import logoNoBg from '../assets/WhatsApp_Image_2026-08-10_at_20.09.11-removebg-preview.png';

export default function Footer({ onOpenDownloadModal, onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="site-footer"
    >
      <div className="corporate-container">
        
        {/* Main Footer Columns */}
        <div className="footer-grid">
          {/* Brand Col */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '6px 10px',
                  borderRadius: '10px',
                  display: 'inline-flex',
                }}
              >
                <img
                  src={logoNoBg}
                  alt="RotaJá"
                  style={{ height: '38px', width: 'auto', objectFit: 'contain' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>
                  Rota<span style={{ color: '#3b82f6' }}>Já</span>
                </span>
                <span style={{ fontSize: '0.62rem', color: '#94a3b8', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '2px' }}>
                  Transporte & Fretes
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.65, maxWidth: '340px' }}>
              Plataforma digital integrada de cotação, gestão e intermediação de fretes rodoviários e urbanos para motoristas autônomos e empresas embarcadoras.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#60a5fa', fontSize: '0.8rem', fontWeight: 600 }}>
              <ShieldCheck size={16} />
              <span>Homologação e Conformidade ANTT</span>
            </div>
          </div>

          {/* Col 2: Soluções */}
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }}>
              Soluções
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <a href="#solucoes" className="footer-link">
                  Para Embarcadores & Indústrias
                </a>
              </li>
              <li>
                <a href="#solucoes" className="footer-link">
                  Para Motoristas Autônomos
                </a>
              </li>
              <li>
                <a href="#solucoes" className="footer-link">
                  Gestão de Frotas & Transportadoras
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="footer-link">
                  Acompanhamento em Tempo Real
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="footer-link">
                  Canhoto Digital de Entrega
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Institucional */}
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }}>
              Institucional
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <a href="#aplicativo" className="footer-link">
                  Telas do Aplicativo
                </a>
              </li>
              <li>
                <a href="#faq" className="footer-link">
                  Perguntas Frequentes (FAQ)
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="footer-btn-link"
                >
                  Fale com a Equipe
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDownloadModal}
                  className="footer-btn-link"
                >
                  Acesso Piloto
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Baixar App CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h4 style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Aplicativo Móvel
            </h4>
            <p style={{ fontSize: '0.86rem', color: '#94a3b8', lineHeight: 1.6 }}>
              Disponível para motoristas parceiros e gestores de transporte. Acesse agora pelo celular.
            </p>
            <button
              onClick={onOpenDownloadModal}
              className="btn-primary"
              style={{
                width: '100%',
                padding: '12px 20px',
                fontSize: '0.9rem',
                borderRadius: '10px',
              }}
            >
              Baixar RotaJá
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
            © {new Date().getFullYear()} RotaJá Tecnologia em Transporte Ltda. Todos os direitos reservados.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button
              onClick={scrollToTop}
              style={{
                background: 'transparent',
                color: '#94a3b8',
                fontSize: '0.8rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
              }}
            >
              Voltar ao Topo
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        .site-footer {
          background-color: #09121f;
          color: #ffffff;
          border-top: 1px solid #1e293b;
          padding-top: 80px;
          padding-bottom: 40px;
          overflow-x: hidden;
          max-width: 100vw;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1.2fr;
          gap: 48px;
          margin-bottom: 56px;
        }
        .footer-link {
          font-size: 0.88rem;
          color: #94a3b8;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #ffffff;
        }
        .footer-btn-link {
          background: none;
          border: none;
          color: #94a3b8;
          font-size: 0.88rem;
          text-align: left;
          cursor: pointer;
          padding: 0;
          transition: color 0.2s ease;
        }
        .footer-btn-link:hover {
          color: #ffffff;
        }
        .footer-bottom-bar {
          border-top: 1px solid #1e293b;
          padding-top: 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        @media (max-width: 960px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
        }
        @media (max-width: 600px) {
          .site-footer {
            padding-top: 52px;
            padding-bottom: 32px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 28px;
            margin-bottom: 36px;
          }
          .footer-bottom-bar {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 14px;
          }
        }
      `}</style>
    </footer>
  );
}
