import React from 'react';
import { ArrowUp, Mail, PhoneCall, ShieldCheck, MapPin } from 'lucide-react';
import logoNoBg from '../assets/WhatsApp_Image_2026-08-10_at_20.09.11-removebg-preview.png';

export default function Footer({ onOpenDownloadModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#09121f',
        color: '#ffffff',
        borderTop: '1px solid #1e293b',
        paddingTop: '80px',
        paddingBottom: '40px',
      }}
    >
      <div className="corporate-container">
        
        {/* Main Footer Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.8fr 1fr 1fr 1.2fr',
            gap: '48px',
            marginBottom: '60px',
          }}
          className="footer-grid"
        >
          {/* Brand Col */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
                  style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '1.3rem', fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>
                  Rota<span style={{ color: '#3b82f6' }}>Já</span>
                </span>
                <span style={{ fontSize: '0.65rem', color: '#94a3b8', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '2px' }}>
                  Transporte & Fretes
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.7, maxWidth: '340px' }}>
              Plataforma digital integrada de cotação, gestão e intermediação de fretes rodoviários e urbanos para motoristas autônomos e empresas embarcadoras.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#60a5fa', fontSize: '0.82rem', fontWeight: 600 }}>
              <ShieldCheck size={16} />
              <span>Homologação e Conformidade ANTT</span>
            </div>
          </div>

          {/* Col 2: Soluções */}
          <div>
            <h4 style={{ fontSize: '0.82rem', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '20px' }}>
              Soluções
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a href="#solucoes" style={{ fontSize: '0.9rem', color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>
                  Para Embarcadores & Indústrias
                </a>
              </li>
              <li>
                <a href="#solucoes" style={{ fontSize: '0.9rem', color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>
                  Para Motoristas Autônomos
                </a>
              </li>
              <li>
                <a href="#solucoes" style={{ fontSize: '0.9rem', color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>
                  Gestão de Frotas & Transportadoras
                </a>
              </li>
              <li>
                <a href="#como-funciona" style={{ fontSize: '0.9rem', color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>
                  Acompanhamento em Tempo Real
                </a>
              </li>
              <li>
                <a href="#diferenciais" style={{ fontSize: '0.9rem', color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>
                  Canhoto Digital de Entrega
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Institucional */}
          <div>
            <h4 style={{ fontSize: '0.82rem', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '20px' }}>
              Institucional
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a href="#aplicativo" style={{ fontSize: '0.9rem', color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>
                  Telas do Aplicativo
                </a>
              </li>
              <li>
                <a href="#faq" style={{ fontSize: '0.9rem', color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>
                  Perguntas Frequentes (FAQ)
                </a>
              </li>
              <li>
                <a href="#contato" style={{ fontSize: '0.9rem', color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>
                  Fale com a Equipe
                </a>
              </li>
              <li>
                <button onClick={onOpenDownloadModal} style={{ background: 'none', color: '#94a3b8', fontSize: '0.9rem', textAlign: 'left', cursor: 'pointer' }}>
                  Acesso Piloto
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Baixar App CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '0.82rem', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Aplicativo Móvel
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6 }}>
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
        <div
          style={{
            borderTop: '1px solid #1e293b',
            paddingTop: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
            © {new Date().getFullYear()} RotaJá Tecnologia em Transporte Ltda. Todos os direitos reservados. CNPJ: 00.000.000/0001-00
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button
              onClick={scrollToTop}
              style={{
                background: 'transparent',
                color: '#94a3b8',
                fontSize: '0.82rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
            >
              Voltar ao Topo
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 960px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
