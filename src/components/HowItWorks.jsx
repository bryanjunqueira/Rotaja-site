import React from 'react';
import { Smartphone, MapPin, CheckCircle2, ShieldCheck, ArrowRight, Zap, FileText } from 'lucide-react';
import driverPhoto from '../assets/delivery-worker-boxes.jpg';

export default function HowItWorks({ onOpenDownloadModal }) {
  const steps = [
    {
      step: '01',
      title: 'Publicação Rápida da Carga',
      desc: 'A empresa cadastra o frete em segundos com origem, destino, tipo de caminhão e valor.',
      icon: FileText,
    },
    {
      step: '02',
      title: 'Match & Aceite Direto no App',
      desc: 'Motoristas homologados próximos visualizam o frete líquido e aceitam sem atravessadores.',
      icon: Zap,
    },
    {
      step: '03',
      title: 'Comprovação Digital e Pagamento Garantido',
      desc: 'Validação da entrega pelo aplicativo com foto do canhoto e liberação ágil do pagamento.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section
      id="como-funciona"
      className="how-it-works-section"
    >
      <div className="corporate-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 52px' }}>
          <h2
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(1.75rem, 3.4vw, 2.9rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '16px',
              lineHeight: 1.15,
            }}
          >
            Como funciona a operação no RotaJá
          </h2>
          <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.7 }}>
            Fluxo simplificado do carregamento até a entrega final, sem papelada e sem complicação.
          </p>
        </div>

        {/* 2-Column Clean Layout: 3 Simple Steps on Left + Real Driver Photo on Right */}
        <div className="how-it-works-grid">
          {/* Left Column: 3 Linear Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="step-card"
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: '#eff6ff',
                      border: '1.5px solid #bfdbfe',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} color="#1a56db" />
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1a56db', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Passo {item.step}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.12rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                      {item.title}
                    </h3>

                    <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            <div style={{ paddingTop: '6px' }}>
              <button
                onClick={onOpenDownloadModal}
                className="btn-primary how-cta-btn"
                style={{ borderRadius: '12px', padding: '14px 28px' }}
              >
                <span>Cadastre-se Gratuitamente</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Column: Real Operational Photo */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className="how-photo-card">
              <img
                src={driverPhoto}
                alt="Motorista parceiro RotaJá realizando entrega"
                className="how-photo-img"
              />
            </div>

            {/* Floating Live Badge */}
            <div className="how-float-badge">
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#ecfdf5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <ShieldCheck size={20} color="#10b981" />
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a', whiteSpace: 'nowrap' }}>
                  100% Digital & Seguro
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', whiteSpace: 'nowrap' }}>
                  Sem burocracia ou intermediários
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .how-it-works-section {
          padding: 90px 0;
          background-color: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          overflow-x: hidden;
          max-width: 100vw;
        }
        .how-it-works-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 56px;
          align-items: center;
        }
        .step-card {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 22px 24px;
          background-color: #ffffff;
          border-radius: 20px;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.04);
          transition: all 0.25s ease;
        }
        .step-card:hover {
          border-color: #1a56db !important;
          transform: translateY(-3px);
          box-shadow: 0 10px 28px -4px rgba(26, 86, 219, 0.12) !important;
        }
        .how-photo-card {
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 20px 50px -10px rgba(15, 23, 42, 0.18);
          width: 100%;
          max-width: 480px;
          border: 4px solid #ffffff;
          background-color: #e2e8f0;
        }
        .how-photo-img {
          width: 100%;
          height: 440px;
          object-fit: cover;
          display: block;
        }
        .how-float-badge {
          position: absolute;
          bottom: -16px;
          right: 16px;
          background-color: #ffffff;
          border-radius: 16px;
          padding: 12px 18px;
          box-shadow: 0 10px 30px -4px rgba(15, 23, 42, 0.15);
          border: 1.5px solid #e2e8f0;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        @media (max-width: 960px) {
          .how-it-works-grid {
            grid-template-columns: 1fr;
            gap: 44px;
          }
          .how-float-badge {
            right: 50%;
            transform: translateX(50%);
            bottom: -12px;
          }
          .how-photo-img {
            height: 340px;
          }
        }
        @media (max-width: 640px) {
          .how-it-works-section {
            padding: 60px 0;
          }
          .step-card {
            padding: 16px;
            gap: 14px;
            border-radius: 16px;
          }
          .how-cta-btn {
            width: 100%;
            justify-content: center;
          }
          .how-photo-img {
            height: 260px;
          }
          .how-photo-card {
            border-radius: 20px;
          }
          .how-float-badge {
            padding: 10px 14px;
            border-radius: 12px;
          }
        }
      `}</style>
    </section>
  );
}
