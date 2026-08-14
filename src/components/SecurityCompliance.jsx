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
      style={{
        padding: '100px 0',
        backgroundColor: '#09121f',
        color: '#ffffff',
        borderBottom: '1px solid #1e293b',
      }}
    >
      <div className="corporate-container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <h2
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '18px',
            }}
          >
            Padrão corporativo de segurança para sua carga rodar protegida.
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#94a3b8', lineHeight: 1.7 }}>
            Processos homologados para garantir que sua operação logística nunca pare por falta de conformidade.
          </p>
        </div>

        {/* Security Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            marginBottom: '64px',
          }}
          className="security-grid"
        >
          {securityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#0f1d30',
                  borderRadius: '20px',
                  border: '1px solid #1e3a5f',
                  padding: '28px 24px',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(26, 86, 219, 0.2)',
                    border: '1px solid rgba(26, 86, 219, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px',
                  }}
                >
                  <Icon size={24} color="#60a5fa" />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6 }}>
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Vehicles Supported Box */}
        <div
          style={{
            backgroundColor: '#0f1d30',
            borderRadius: '24px',
            border: '1px solid #1e3a5f',
            padding: '40px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <Truck size={24} color="#60a5fa" />
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
              Modalidades e Categorias de Veículos Atendidas
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
            }}
            className="vehicles-grid"
          >
            {vehicleCategories.map((cat, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#09121f',
                  borderRadius: '16px',
                  border: '1px solid #1e293b',
                  padding: '20px',
                }}
              >
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#60a5fa', marginBottom: '6px' }}>
                  {cat.type}
                </div>
                <div style={{ fontSize: '0.84rem', color: '#e2e8f0', fontWeight: 600, marginBottom: '6px' }}>
                  {cat.models}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                  {cat.ideal}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 960px) {
          .security-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .vehicles-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .security-grid {
            grid-template-columns: 1fr !important;
          }
          .vehicles-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
