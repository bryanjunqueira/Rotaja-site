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
      style={{
        padding: '100px 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div className="corporate-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 64px' }}>
          <h2
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(2.1rem, 3.4vw, 2.9rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '16px',
              lineHeight: 1.15,
            }}
          >
            Como funciona a operação no RotaJá
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: 1.7 }}>
            Fluxo simplificado do carregamento até a entrega final, sem papelada e sem complicação.
          </p>
        </div>

        {/* 2-Column Clean Layout: 3 Simple Steps on Left + Real Driver Photo on Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '56px',
            alignItems: 'center',
          }}
          className="how-it-works-grid"
        >
          {/* Left Column: 3 Linear Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px',
                    padding: '24px 28px',
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    border: '1.5px solid #e2e8f0',
                    boxShadow: '0 4px 16px -2px rgba(15, 23, 42, 0.04)',
                    transition: 'all 0.25s ease',
                  }}
                  className="step-card"
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      backgroundColor: '#eff6ff',
                      border: '1.5px solid #bfdbfe',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={24} color="#1a56db" />
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#1a56db', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Passo {item.step}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                      {item.title}
                    </h3>

                    <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            <div style={{ paddingTop: '8px' }}>
              <button
                onClick={onOpenDownloadModal}
                className="btn-primary"
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
            <div
              style={{
                borderRadius: '28px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px -10px rgba(15, 23, 42, 0.18)',
                width: '100%',
                maxWidth: '480px',
                border: '4px solid #ffffff',
                backgroundColor: '#e2e8f0',
              }}
            >
              <img
                src={driverPhoto}
                alt="Motorista parceiro RotaJá realizando entrega"
                style={{
                  width: '100%',
                  height: '460px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Floating Live Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-16px',
                right: '10px',
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '14px 20px',
                boxShadow: '0 10px 30px -4px rgba(15, 23, 42, 0.15)',
                border: '1.5px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
              className="how-float-badge"
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: '#ecfdf5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ShieldCheck size={22} color="#10b981" />
              </div>
              <div>
                <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#0f172a' }}>
                  100% Digital & Seguro
                </div>
                <div style={{ fontSize: '0.74rem', color: '#64748b' }}>
                  Sem burocracia ou intermediários
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .step-card:hover {
          border-color: #1a56db !important;
          transform: translateY(-3px);
          box-shadow: 0 10px 28px -4px rgba(26, 86, 219, 0.12) !important;
        }
        @media (max-width: 960px) {
          .how-it-works-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .how-float-badge {
            right: 50% !important;
            transform: translateX(50%);
          }
        }
      `}</style>
    </section>
  );
}
