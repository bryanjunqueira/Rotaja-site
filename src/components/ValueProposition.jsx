import React, { useState } from 'react';
import { Building2, Truck, CheckCircle2, DollarSign, Shield, Zap, MapPin, FileCheck, ArrowRight, BarChart3, Clock, Users } from 'lucide-react';

export default function ValueProposition({ onOpenDownloadModal, onOpenContact }) {
  const [activeTab, setActiveTab] = useState('empresas');

  const shipperBenefits = [
    {
      icon: DollarSign,
      title: 'Redução de Custos com Intermediários',
      desc: 'Elimine taxas abusivas de agenciadores e negocie fretes direto com transportadores qualificados.',
    },
    {
      icon: Zap,
      title: 'Alocação de Veículos em Minutos',
      desc: 'Publique a rota e o tipo de carga necessária para receber aceites imediatos de motoristas próximos.',
    },
    {
      icon: MapPin,
      title: 'Gestão de Status em Tempo Real',
      desc: 'Acompanhe cada etapa da mercadoria do carregamento até a conclusão do transporte.',
    },
    {
      icon: FileCheck,
      title: 'Canhotos e Comprovantes Digitais',
      desc: 'Receba a foto da entrega e o canhoto assinado em alta resolução no momento em que o frete for concluído.',
    },
    {
      icon: Shield,
      title: 'Triagem e Homologação Rigorosa',
      desc: 'Validação de CNH, EAR, RNTRC/ANTT e histórico profissional de todos os parceiros cadastrados.',
    },
    {
      icon: BarChart3,
      title: 'Painel Centralizado de Operações',
      desc: 'Gestão completa de múltiplos fretes simultâneos com relatórios de performance e SLA de entrega.',
    },
  ];

  const driverBenefits = [
    {
      icon: DollarSign,
      title: 'Transparência Total nos Ganhos',
      desc: 'Saiba o valor exato a receber, a quilometragem e o peso da carga antes de confirmar o frete.',
    },
    {
      icon: Clock,
      title: 'Pagamento Rápido e Garantido',
      desc: 'Finalizou a entrega e enviou o comprovante? O valor é liberado sem burocracia e sem atrasos.',
    },
    {
      icon: MapPin,
      title: 'Rotas Otimizadas na Sua Região',
      desc: 'Encontre cargas compatíveis com a capacidade do seu veículo sem rodar com o caminhão vazio.',
    },
    {
      icon: Users,
      title: 'Conexão Direta com Grandes Empresas',
      desc: 'Trabalhe com embarcadores sérios e indústrias conceituadas que contratam fretes diários.',
    },
    {
      icon: Zap,
      title: 'Autonomia Total de Horários',
      desc: 'Você é seu próprio chefe: decida quais viagens aceitar de acordo com sua disponibilidade e preferência.',
    },
    {
      icon: Shield,
      title: 'Suporte Operacional Dedicado',
      desc: 'Equipe de apoio disponível durante todo o trajeto para te auxiliar em qualquer imprevisto.',
    },
  ];

  return (
    <section
      id="solucoes"
      className="vp-section"
    >
      <div className="corporate-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
          <h2
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(1.75rem, 3.2vw, 2.8rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '16px',
            }}
          >
            A plataforma completa para quem precisa transportar e quem vive da estrada.
          </h2>
          <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.7 }}>
            Desenvolvemos uma infraestrutura digital robusta para atender com máxima eficiência tanto embarcadores exigentes quanto motoristas profissionais.
          </p>

          {/* Responsive Toggle Switcher */}
          <div className="vp-tabs-container">
            <button
              onClick={() => setActiveTab('empresas')}
              className={`vp-tab-btn ${activeTab === 'empresas' ? 'vp-tab-btn--active' : ''}`}
            >
              <Building2 size={18} />
              <span>Para Empresas & Embarcadores</span>
            </button>

            <button
              onClick={() => setActiveTab('motoristas')}
              className={`vp-tab-btn ${activeTab === 'motoristas' ? 'vp-tab-btn--active' : ''}`}
            >
              <Truck size={18} />
              <span>Para Motoristas & Frotistas</span>
            </button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="value-prop-grid">
          {(activeTab === 'empresas' ? shipperBenefits : driverBenefits).map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="corp-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      backgroundColor: '#eff6ff',
                      border: '1px solid #bfdbfe',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    <Icon size={22} color="#1a56db" />
                  </div>
                  <h3
                    style={{
                      fontSize: '1.14rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      marginBottom: '8px',
                      lineHeight: 1.25,
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.65 }}>
                    {benefit.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#1a56db',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    paddingTop: '12px',
                    borderTop: '1px solid #f1f5f9',
                  }}
                >
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>Funcionalidade Ativa na Plataforma</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic CTA Banner based on selected profile */}
        <div
          className={`vp-cta-banner ${activeTab === 'empresas' ? 'vp-cta-banner--shipper' : 'vp-cta-banner--driver'}`}
        >
          <div style={{ maxWidth: '650px' }}>
            <h3 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
              {activeTab === 'empresas'
                ? 'Quer otimizar a logística e reduzir o frete da sua empresa?'
                : 'Quer ter acesso a cargas diárias com valor justo na sua região?'}
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.88)', lineHeight: 1.6 }}>
              {activeTab === 'empresas'
                ? 'Cadastre sua empresa para falar com nossos especialistas corporativos e agendar uma demonstração operacional.'
                : 'Baixe o aplicativo RotaJá gratuitamente, envie seus documentos e comece a rodar com garantia de pagamento.'}
            </p>
          </div>

          <div className="vp-cta-actions">
            {activeTab === 'empresas' ? (
              <button
                onClick={onOpenContact}
                className="btn-primary"
                style={{
                  backgroundColor: '#1a56db',
                  padding: '14px 28px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  width: '100%',
                }}
              >
                Solicitar Demonstração
                <ArrowRight size={18} />
              </button>
            ) : (
              <button
                onClick={onOpenDownloadModal}
                className="btn-primary"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#1a56db',
                  padding: '14px 28px',
                  borderRadius: '12px',
                  width: '100%',
                }}
              >
                Cadastrar como Motorista
                <ArrowRight size={18} />
              </button>
            )}
          </div>
        </div>

      </div>

      <style>{`
        .vp-section {
          padding: 90px 0;
          background-color: #ffffff;
          border-bottom: 1px solid #e2e8f0;
        }
        .vp-tabs-container {
          display: inline-flex;
          padding: 6px;
          background-color: #ffffff;
          border-radius: 16px;
          border: 1.5px solid #cbd5e1;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);
          margin-top: 28px;
          gap: 6px;
          max-width: 100%;
        }
        .vp-tab-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 12px;
          font-size: 0.92rem;
          font-weight: 700;
          background-color: transparent;
          color: #64748b;
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
          white-space: nowrap;
        }
        .vp-tab-btn--active {
          background-color: #1a56db !important;
          color: #ffffff !important;
        }
        .value-prop-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .vp-cta-banner {
          margin-top: 48px;
          padding: 40px 44px;
          border-radius: 24px;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }
        .vp-cta-banner--shipper {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        }
        .vp-cta-banner--driver {
          background: linear-gradient(135deg, #1a56db 0%, #1042b8 100%);
        }
        .vp-cta-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          min-width: 220px;
        }

        @media (max-width: 960px) {
          .value-prop-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .vp-cta-banner {
            flex-direction: column;
            align-items: stretch;
            gap: 24px;
            padding: 32px 28px;
          }
          .vp-cta-actions {
            width: 100%;
          }
        }
        @media (max-width: 640px) {
          .vp-section {
            padding: 60px 0;
          }
          .vp-tabs-container {
            display: flex;
            width: 100%;
            padding: 4px;
            gap: 4px;
            border-radius: 14px;
          }
          .vp-tab-btn {
            flex: 1;
            padding: 10px 8px;
            font-size: 0.8rem;
            white-space: normal;
            line-height: 1.25;
            text-align: center;
            border-radius: 10px;
            gap: 6px;
          }
          .vp-tab-btn svg {
            flex-shrink: 0;
            width: 16px;
            height: 16px;
          }
          .value-prop-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .vp-cta-banner {
            padding: 24px 18px;
            border-radius: 18px;
            margin-top: 36px;
          }
        }
      `}</style>
    </section>
  );
}
