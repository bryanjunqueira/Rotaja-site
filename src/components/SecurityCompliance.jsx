import React from 'react';
import { ShieldCheck, FileCheck2, Lock, Award, Truck, CheckCircle2 } from 'lucide-react';

export default function SecurityCompliance() {
  const securityPillars = [
    {
      icon: ShieldCheck,
      title: 'Triagem Cadastral Rigorosa',
      desc: 'Validação preventiva de CNH com EAR, antecedentes, documento do veículo (CRLV) e conformidade legal.',
    },
    {
      icon: FileCheck2,
      title: 'Conformidade com a ANTT',
      desc: 'Verificação ativa do RNTRC para transporte rodoviário regular de cargas intermunicipais e interestaduais.',
    },
    {
      icon: Lock,
      title: 'Segurança Jurídica & LGPD',
      desc: 'Proteção total dos dados de embarcadores e motoristas com auditoria de logs e sigilo contratual.',
    },
    {
      icon: Award,
      title: 'Avaliação Mútua por SLA',
      desc: 'Sistema de pontuação por pontualidade e integridade da carga para manter apenas os melhores parceiros.',
    },
  ];

  const vehicleCategories = [
    {
      type: 'Utilitários & Médios',
      models: 'Fiorino, Kangoo, HR, Bongo, Vans e Furgões',
      ideal: 'Entregas expressas urbanas e fracionadas',
    },
    {
      type: 'Caminhões VUC & 3/4',
      models: 'Accelo, VW Delivery Express, Cargo',
      ideal: 'Distribuição metropolitana e cargas médias',
    },
    {
      type: 'Toco & Truck',
      models: 'Baú Fechado, Sider, Graneleiro e Refrigerado',
      ideal: 'Transporte intermunicipal e cargas volumosas',
    },
    {
      type: 'Carretas & Pesados',
      models: 'Cavalo Mecânico, Bitrem, Rodotrem',
      ideal: 'Grandes lotes industriais e transferências',
    },
  ];

  return (
    <section
      className="security-section"
    >
      <div className="corporate-container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 52px' }}>
          <h2
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(1.75rem, 3.2vw, 2.8rem)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '16px',
            }}
          >
            Padrão corporativo de segurança para sua carga rodar protegida.
          </h2>
          <p style={{ fontSize: '1.02rem', color: '#94a3b8', lineHeight: 1.7 }}>
            Processos homologados para garantir que sua operação logística nunca pare por falta de conformidade.
          </p>
        </div>

        {/* Security Grid */}
        <div className="security-grid">
          {securityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="security-pillar-card"
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(26, 86, 219, 0.2)',
                    border: '1px solid rgba(26, 86, 219, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <Icon size={22} color="#60a5fa" />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '0.86rem', color: '#94a3b8', lineHeight: 1.6 }}>
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Vehicles Supported Box */}
        <div className="security-vehicles-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <Truck size={22} color="#60a5fa" />
            <h3 style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.35rem)', fontWeight: 800, color: '#ffffff' }}>
              Modalidades e Categorias de Veículos Atendidas
            </h3>
          </div>

          <div className="vehicles-grid">
            {vehicleCategories.map((cat, idx) => (
              <div
                key={idx}
                className="vehicle-cat-card"
              >
                <div style={{ fontSize: '0.96rem', fontWeight: 800, color: '#60a5fa', marginBottom: '4px' }}>
                  {cat.type}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#e2e8f0', fontWeight: 600, marginBottom: '4px' }}>
                  {cat.models}
                </div>
                <div style={{ fontSize: '0.76rem', color: '#64748b' }}>
                  {cat.ideal}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .security-section {
          padding: 90px 0;
          background-color: #09121f;
          color: #ffffff;
          border-bottom: 1px solid #1e293b;
          overflow-x: hidden;
          max-width: 100vw;
        }
        .security-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 56px;
        }
        .security-pillar-card {
          background-color: #0f1d30;
          border-radius: 20px;
          border: 1px solid #1e3a5f;
          padding: 28px 24px;
        }
        .security-vehicles-box {
          background-color: #0f1d30;
          border-radius: 24px;
          border: 1px solid #1e3a5f;
          padding: 36px;
        }
        .vehicles-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .vehicle-cat-card {
          background-color: #09121f;
          border-radius: 16px;
          border: 1px solid #1e293b;
          padding: 18px;
        }

        @media (max-width: 960px) {
          .security-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .vehicles-grid {
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }
        }
        @media (max-width: 640px) {
          .security-section {
            padding: 60px 0;
          }
          .security-grid {
            grid-template-columns: 1fr;
            gap: 14px;
            margin-bottom: 36px;
          }
          .security-pillar-card {
            padding: 20px 18px;
            border-radius: 16px;
          }
          .security-vehicles-box {
            padding: 22px 18px;
            border-radius: 18px;
          }
          .vehicles-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}
