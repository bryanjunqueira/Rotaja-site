import React from 'react';
import { Truck, ShieldCheck, CheckCircle2, MapPin, Gauge, Layers, ArrowRight } from 'lucide-react';
import trucksPhoto from '../assets/trucks-fleet.jpg';

export default function FleetShowcase({ onOpenDownloadModal }) {
  const vehicleTypes = [
    { title: 'VUC & Utilitários', desc: 'Perfeito para coletas urbanas ágeis e entregas expressas' },
    { title: 'Caminhões 3/4 e Toco', desc: 'Capacidade média ideal para rotas intermunicipais e distribuição' },
    { title: 'Truck & Carretas', desc: 'Transporte de grande tonelagem, cargas pesadas e lotação completa' },
  ];

  return (
    <section
      style={{
        padding: '100px 0',
        backgroundColor: '#f0f7ff',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div className="corporate-container">
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            gap: '56px',
            alignItems: 'center',
          }}
          className="fleet-grid"
        >
          {/* Left: Real Photo of Blue Heavy Trucks and Trailers */}
          <div
            style={{
              position: 'relative',
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: '0 24px 60px -12px rgba(15, 23, 42, 0.2)',
              border: '4px solid #ffffff',
            }}
          >
            <img
              src={trucksPhoto}
              alt="Frota de caminhões e carretas parceiras RotaJá"
              style={{
                width: '100%',
                height: '460px',
                objectFit: 'cover',
                display: 'block',
              }}
            />

            {/* Overlay Gradient & Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '24px',
                background: 'linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.85) 100%)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>
                  Frota Diversificada em Todo o Brasil
                </div>
                <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>
                  De utilitários leves a bitrens pesados
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(26, 86, 219, 0.9)',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  backdropFilter: 'blur(8px)',
                }}
              >
                +50.000 Veículos
              </div>
            </div>
          </div>

          {/* Right: Fleet Description & Vehicle Types */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h2
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 'clamp(2rem, 3.2vw, 2.7rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.18,
              }}
            >
              O veículo certo para cada tipo e peso de carga.
            </h2>

            <p style={{ fontSize: '1.04rem', color: '#475569', lineHeight: 1.7 }}>
              Com a <strong>RotaJá</strong>, você não precisa ficar ligando para diversas transportadoras. Nossa plataforma aloca instantaneamente o caminhão ideal compatível com o peso, cubagem e exigência da sua carga.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '6px' }}>
              {vehicleTypes.map((v, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px 20px',
                    backgroundColor: '#f8fafc',
                    borderRadius: '16px',
                    border: '1px solid #e2e8f0',
                  }}
                >
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
                    <Truck size={20} color="#1a56db" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0f172a' }}>
                      {v.title}
                    </div>
                    <div style={{ fontSize: '0.84rem', color: '#64748b', marginTop: '2px' }}>
                      {v.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ paddingTop: '8px' }}>
              <button
                onClick={onOpenDownloadModal}
                className="btn-primary"
                style={{ padding: '14px 28px', borderRadius: '12px' }}
              >
                <span>Solicitar Cotação de Carga</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 960px) {
          .fleet-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
