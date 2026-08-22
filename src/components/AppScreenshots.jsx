import React, { useEffect, useRef, useState } from 'react';
import { Smartphone, CheckCircle, LayoutDashboard, Truck, Building2, Receipt, ShieldCheck, ArrowRight, X, ZoomIn } from 'lucide-react';
import appDashboard from '../assets/image.png';
import appMotorista from '../assets/image copy.png';
import appEmpresa from '../assets/image copy 2.png';
import appFretes from '../assets/image copy 3.png';

export default function AppScreenshots({ onOpenDownloadModal }) {
  const sectionRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const el = sectionRef.current;
    if (el) {
      el.querySelectorAll('.scroll-reveal').forEach((child) => {
        observer.observe(child);
      });
    }

    return () => observer.disconnect();
  }, []);

  const screens = [
    {
      id: 'dashboard',
      tag: 'Tela Inicial do Aplicativo',
      title: 'Acesso Rápido para Motoristas & Empresas',
      desc: 'Interface de boas-vindas com contadores em tempo real: mais de 50 mil motoristas, 15 mil empresas cadastradas e 1 milhão de fretes intermediados com segurança.',
      image: appDashboard,
      icon: LayoutDashboard,
      highlights: [
        'Acesso separado por perfil com login seguro',
        'Contadores de comunidade e métricas da plataforma',
        'Criação de conta gratuita em menos de 2 minutos',
        'Validação digital de documentos ANTT e CNH',
      ],
    },
    {
      id: 'motorista',
      tag: 'Painel do Motorista Parceiro',
      title: 'Controle de Cargas Disponíveis e Entregues',
      desc: 'Visão direta para o caminhoneiro com indicadores de fretes disponíveis para o seu veículo, cargas aceitas, transportes em andamento e histórico de entregas concluídas.',
      image: appMotorista,
      icon: Truck,
      highlights: [
        'Filtro automático para o tipo do seu veículo (VUC, 3/4, Toco)',
        'Status em tempo real de cargas aceitas e em rota',
        'Botão de Ação Rápida para Buscar Cargas próximas',
        'Gestão de perfil profissional e selo de motorista aprovado',
      ],
    },
    {
      id: 'empresa',
      tag: 'Painel do Embarcador / Empresa',
      title: 'Publicação e Monitoramento de Cargas',
      desc: 'Gestão completa para comércios, indústrias e transportadoras publicarem fretes com valor, peso, tipo de veículo e data de coleta em instantes.',
      image: appEmpresa,
      icon: Building2,
      highlights: [
        'Publicação rápida com especificação de tonelagem e veículo',
        'Indicadores de fretes ativos, em andamento e finalizados',
        'Acompanhamento de status "Aguardando Motorista"',
        'Redução imediata de custos eliminando atravessadores',
      ],
    },
    {
      id: 'fretes',
      tag: 'Listagem & Detalhamento de Fretes',
      title: 'Transparência de Valores, Rotas e Contatos',
      desc: 'Listagem transparente com número do frete, valor exato, quilometragem, rota origem/destino, telefone direto do motorista parceiro e comprovante digital.',
      image: appFretes,
      icon: Receipt,
      highlights: [
        'Filtros práticos: Buscar Fretes e Criar Novo Frete',
        'Dados transparentes com telefone direto do motorista',
        'Valores líquidos sem taxas ocultas ou descontos abusivos',
        'Status visual claro (Aguardando, Finalizado, Cancelado)',
      ],
    },
  ];

  return (
    <section
      id="aplicativo"
      ref={sectionRef}
      className="app-screenshots-section"
    >
      <div className="corporate-container">
        {/* Section Header */}
        <div
          className="scroll-reveal"
          style={{
            textAlign: 'center',
            maxWidth: '740px',
            margin: '0 auto 64px',
          }}
        >
          <h2
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(1.8rem, 3.4vw, 2.9rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '16px',
              lineHeight: 1.15,
            }}
          >
            Interface intuitiva, pensada para o dia a dia na estrada.
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7 }}>
            Veja as telas reais do <strong>RotaJá</strong> em funcionamento: simples de usar, sem termos complicados e com todas as informações na palma da mão.
          </p>
        </div>

        {/* 4 Real App Screens with Smartphone Chassis */}
        <div className="app-screens-list">
          {screens.map((screen, idx) => {
            const Icon = screen.icon;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={screen.id}
                className={`scroll-reveal app-screenshot-row ${isReversed ? 'app-screenshot-row--reversed' : ''}`}
                data-direction={isReversed ? 'right' : 'left'}
              >
                {/* Smartphone Device Frame displaying REAL Screenshot */}
                <div className="app-phone-arrive app-phone-col">
                  <div
                    className="app-phone-card"
                    onClick={() => setSelectedImage(screen)}
                    role="button"
                    aria-label={`Ampliar screenshot: ${screen.title}`}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedImage(screen);
                      }
                    }}
                  >
                    {/* Zoom hint */}
                    <div className="app-phone-zoom-hint">
                      <ZoomIn size={16} />
                    </div>

                    {/* Notch / Dynamic Island */}
                    <div className="app-phone-notch" />

                    {/* Screen Container */}
                    <div className="app-phone-screen-wrap">
                      <img
                        src={screen.image}
                        alt={screen.title}
                        className="app-phone-img"
                      />
                    </div>
                  </div>
                </div>

                {/* Explanation Content */}
                <div className="app-phone-copy">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        backgroundColor: '#eff6ff',
                        border: '1.5px solid #bfdbfe',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={20} color="#1a56db" />
                    </div>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: '#1a56db',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {screen.tag}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: 'clamp(1.35rem, 2.4vw, 2.1rem)',
                      fontWeight: 800,
                      color: '#0f172a',
                      lineHeight: 1.2,
                    }}
                  >
                    {screen.title}
                  </h3>

                  <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: 1.65 }}>
                    {screen.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '4px' }}>
                    {screen.highlights.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '0.92rem', fontWeight: 600, color: '#1e293b' }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div style={{ paddingTop: '6px' }}>
                    <button
                      onClick={onOpenDownloadModal}
                      className="app-phone-btn"
                    >
                      <span>Testar no Aplicativo</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="scroll-reveal app-bottom-banner">
          <div>
            <h3 style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.45rem)', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
              Pronto para começar a rodar ou publicar suas cargas?
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
              Disponível para celulares Android e iOS com cadastro instantâneo.
            </p>
          </div>

          <button
            onClick={onOpenDownloadModal}
            className="btn-primary"
            style={{ padding: '14px 28px', borderRadius: '12px', fontSize: '0.95rem' }}
          >
            <Smartphone size={18} />
            Baixar Aplicativo Agora
          </button>
        </div>
      </div>

      {/* Lightbox Modal — fullscreen image viewer */}
      {selectedImage && (
        <div
          className="app-lightbox"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem ampliada: ${selectedImage.title}`}
        >
          <div
            className="app-lightbox-backdrop"
            onClick={() => setSelectedImage(null)}
          />
          <button
            className="app-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar imagem ampliada"
          >
            <X size={24} />
          </button>

          <figure className="app-lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <div className="app-lightbox-screen">
              <img src={selectedImage.image} alt={selectedImage.title} />
            </div>
            <figcaption>
              <span className="app-lightbox-title">{selectedImage.title}</span>
            </figcaption>
          </figure>
        </div>
      )}

      <style>{`
        .app-screenshots-section {
          padding: 90px 0;
          background-color: #f0f7ff;
          border-bottom: 1px solid #e2e8f0;
          overflow-x: hidden;
          max-width: 100vw;
        }
        .app-screens-list {
          display: flex;
          flex-direction: column;
          gap: 84px;
        }
        .app-screenshot-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .app-screenshot-row--reversed {
          direction: rtl;
        }
        .app-screenshot-row--reversed .app-phone-copy {
          direction: ltr;
        }
        .app-screenshot-row--reversed .app-phone-col {
          direction: ltr;
        }
        .app-phone-col {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .app-phone-card {
          position: relative;
          width: 290px;
          max-width: 100%;
          border-radius: 40px;
          background-color: #0f172a;
          padding: 9px;
          box-shadow: 0 24px 50px -12px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(15, 23, 42, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: zoom-in;
        }
        .app-phone-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 60px -12px rgba(26, 86, 219, 0.25) !important;
        }
        .app-phone-zoom-hint {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: rgba(15, 23, 42, 0.72);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 12;
          color: #ffffff;
          transition: all 0.2s ease;
        }
        .app-phone-card:hover .app-phone-zoom-hint {
          background-color: rgba(26, 86, 219, 0.95);
          transform: scale(1.08);
        }
        .app-phone-notch {
          position: absolute;
          top: 15px;
          left: 50%;
          transform: translateX(-50%);
          width: 70px;
          height: 16px;
          background-color: #0f172a;
          border-radius: 12px;
          z-index: 10;
        }
        .app-phone-screen-wrap {
          width: 100%;
          border-radius: 32px;
          overflow: hidden;
          background-color: #f1f5f9;
        }
        .app-phone-img {
          width: 100%;
          height: 520px;
          object-fit: cover;
          object-position: top;
          display: block;
        }
        .app-phone-copy {
          display: flex;
          flex-direction: column;
          gap: 18px;
          direction: ltr;
        }
        .app-phone-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background-color: #eff6ff;
          color: #1a56db;
          border: 1.5px solid #bfdbfe;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.92rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .app-phone-btn:hover {
          background-color: #1a56db;
          color: #ffffff;
        }
        .app-bottom-banner {
          margin-top: 72px;
          padding: 36px 40px;
          background-color: #0f172a;
          border-radius: 24px;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        /* Safe bounded animations */
        .app-phone-arrive {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease 0.1s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;
        }
        .scroll-reveal.scroll-visible .app-phone-arrive {
          opacity: 1;
          transform: translateY(0) translateX(0);
        }
        .app-phone-copy {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease 0.2s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
        }
        .scroll-reveal.scroll-visible .app-phone-copy {
          opacity: 1;
          transform: translateY(0);
        }

        /* Lightbox */
        .app-lightbox {
          position: fixed;
          inset: 0;
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          animation: lightboxFade 0.25s ease;
        }
        .app-lightbox-backdrop {
          position: absolute;
          inset: 0;
          background-color: rgba(9, 18, 31, 0.92);
          backdrop-filter: blur(8px);
        }
        .app-lightbox-close {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: none;
          background-color: rgba(255, 255, 255, 0.15);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.2s ease;
        }
        .app-lightbox-close:hover {
          background-color: rgba(255, 255, 255, 0.3);
          transform: rotate(90deg);
        }
        .app-lightbox-figure {
          position: relative;
          z-index: 5;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          max-width: min(520px, 94vw);
          animation: lightboxZoom 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .app-lightbox-screen {
          width: 100%;
          max-height: 76vh;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.14), 0 30px 70px rgba(0, 0, 0, 0.55);
          background-color: #0f172a;
        }
        .app-lightbox-screen img {
          width: 100%;
          height: auto;
          max-height: 76vh;
          object-fit: contain;
          display: block;
        }
        .app-lightbox-title {
          font-family: 'Plus Jakarta Sans', Inter, sans-serif;
          font-size: clamp(0.95rem, 2vw, 1.2rem);
          font-weight: 700;
          color: #ffffff;
          text-align: center;
        }

        @keyframes lightboxFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes lightboxZoom {
          from { opacity: 0; transform: scale(0.9) translateY(12px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @media (max-width: 900px) {
          .app-screenshot-row {
            grid-template-columns: 1fr;
            direction: ltr !important;
            gap: 36px;
          }
          .app-screenshot-row--reversed {
            direction: ltr !important;
          }
          .app-phone-card {
            width: 270px;
          }
          .app-phone-img {
            height: 480px;
          }
          .app-screens-list {
            gap: 60px;
          }
          .app-bottom-banner {
            flex-direction: column;
            align-items: stretch;
            gap: 20px;
            padding: 28px 24px;
            margin-top: 56px;
          }
          .app-bottom-banner button {
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          .app-screenshots-section {
            padding: 60px 0;
          }
          .app-phone-card {
            width: 250px;
            border-radius: 34px;
            padding: 8px;
          }
          .app-phone-screen-wrap {
            border-radius: 28px;
          }
          .app-phone-img {
            height: 420px;
          }
          .app-phone-btn {
            width: 100%;
            justify-content: center;
          }
          .app-bottom-banner {
            padding: 24px 18px;
            border-radius: 18px;
          }
        }
      `}</style>
    </section>
  );
}
