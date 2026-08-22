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
      className="fleet-section"
    >
      <div className="corporate-container">
        
        <div className="fleet-grid">
          {/* Left: Real Photo of Blue Heavy Trucks and Trailers */}
          <div className="fleet-photo-wrapper">
            <img
              src={trucksPhoto}
              alt="Frota de caminhões e carretas parceiras RotaJá"
              className="fleet-photo-img"
            />

            {/* Overlay Gradient & Badge */}
            <div className="fleet-photo-overlay">
              <div>
                <div style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', fontWeight: 800, color: '#ffffff' }}>
                  Frota Diversificada em Todo o Brasil
                </div>
                <div style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>
                  De utilitários leves a bitrens pesados
                </div>
              </div>

              <div className="fleet-badge">
                +50.000 Veículos
              </div>
            </div>
          </div>

          {/* Right: Fleet Description & Vehicle Types */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 'clamp(1.75rem, 3.2vw, 2.7rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.18,
              }}
            >
              O veículo certo para cada tipo e peso de carga.
            </h2>

            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7 }}>
              Com a <strong>RotaJá</strong>, você não precisa ficar ligando para diversas transportadoras. Nossa plataforma aloca instantaneamente o caminhão ideal compatível com o peso, cubagem e exigência da sua carga.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '4px' }}>
              {vehicleTypes.map((v, idx) => (
                <div
                  key={idx}
                  className="fleet-type-item"
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
                    <div style={{ fontSize: '0.96rem', fontWeight: 800, color: '#0f172a' }}>
                      {v.title}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '2px' }}>
                      {v.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ paddingTop: '6px' }}>
              <button
                onClick={onOpenDownloadModal}
                className="btn-primary fleet-cta-btn"
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
        .fleet-section {
          padding: 90px 0;
          background-color: #f0f7ff;
          border-bottom: 1px solid #e2e8f0;
          overflow-x: hidden;
          max-width: 100vw;
        }
        .fleet-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: center;
        }
        .fleet-photo-wrapper {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 24px 60px -12px rgba(15, 23, 42, 0.2);
          border: 4px solid #ffffff;
          background-color: #e2e8f0;
        }
        .fleet-photo-img {
          width: 100%;
          height: 460px;
          object-fit: cover;
          display: block;
        }
        .fleet-photo-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 24px;
          background: linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.88) 100%);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .fleet-badge {
          background-color: rgba(26, 86, 219, 0.9);
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 0.78rem;
          font-weight: 700;
          backdrop-filter: blur(8px);
          white-space: nowrap;
        }
        .fleet-type-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background-color: #ffffff;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          transition: border-color 0.2s ease;
        }
        .fleet-type-item:hover {
          border-color: #1a56db;
        }

        @media (max-width: 960px) {
          .fleet-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .fleet-photo-img {
            height: 340px;
          }
        }
        @media (max-width: 640px) {
          .fleet-section {
            padding: 60px 0;
          }
          .fleet-photo-wrapper {
            border-radius: 20px;
          }
          .fleet-photo-img {
            height: 260px;
          }
          .fleet-photo-overlay {
            padding: 16px;
            flex-direction: column;
            align-items: flex-start;
          }
          .fleet-type-item {
            padding: 14px 16px;
            gap: 12px;
          }
          .fleet-cta-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
