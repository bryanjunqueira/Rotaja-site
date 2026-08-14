import React, { useState } from 'react';
import { Building2, Truck, CheckCircle2, DollarSign, Shield, Zap, MapPin, FileCheck, ArrowRight, BarChart3, Clock, Users } from 'lucide-react';

export default function ValueProposition({ onOpenDownloadModal }) {
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
      style={{
        padding: '100px 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div className="corporate-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
          <h2
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '18px',
            }}
          >
            A plataforma completa para quem precisa transportar e quem vive da estrada.
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: 1.7 }}>
            Desenvolvemos uma infraestrutura digital robusta para atender com máxima eficiência tanto embarcadores exigentes quanto motoristas profissionais.
          </p>

          {/* Toggle Switcher */}
          <div
            style={{
              display: 'inline-flex',
              padding: '6px',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1.5px solid #cbd5e1',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.05)',
              marginTop: '32px',
              gap: '6px',
            }}
          >
            <button
              onClick={() => setActiveTab('empresas')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '12px',
                fontSize: '0.92rem',
                fontWeight: 700,
                backgroundColor: activeTab === 'empresas' ? '#1a56db' : 'transparent',
                color: activeTab === 'empresas' ? '#ffffff' : '#64748b',
                transition: 'all 0.2s ease',
              }}
            >
              <Building2 size={18} />
              Para Empresas & Embarcadores
            </button>

            <button
              onClick={() => setActiveTab('motoristas')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '12px',
                fontSize: '0.92rem',
                fontWeight: 700,
                backgroundColor: activeTab === 'motoristas' ? '#1a56db' : 'transparent',
                color: activeTab === 'motoristas' ? '#ffffff' : '#64748b',
                transition: 'all 0.2s ease',
              }}
            >
              <Truck size={18} />
              Para Motoristas & Frotistas
            </button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="value-prop-grid"
        >
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
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      backgroundColor: '#eff6ff',
                      border: '1px solid #bfdbfe',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    <Icon size={24} color="#1a56db" />
                  </div>
                  <h3
                    style={{
                      fontSize: '1.18rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      marginBottom: '10px',
                      lineHeight: 1.25,
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.65 }}>
                    {benefit.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#1a56db',
                    fontSize: '0.84rem',
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
          style={{
            marginTop: '48px',
            padding: '40px 48px',
            borderRadius: '24px',
            background: activeTab === 'empresas'
              ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
              : 'linear-gradient(135deg, #1a56db 0%, #1042b8 100%)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ maxWidth: '650px' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
              {activeTab === 'empresas'
                ? 'Quer otimizar a logística e reduzir o frete da sua empresa?'
                : 'Quer ter acesso a cargas diárias com valor justo na sua região?'}
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6 }}>
              {activeTab === 'empresas'
                ? 'Cadastre sua empresa para falar com nossos especialistas corporativos e agendar uma demonstração operacional.'
                : 'Baixe o aplicativo RotaJá gratuitamente, envie seus documentos e comece a rodar com garantia de pagamento.'}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {activeTab === 'empresas' ? (
              <a
                href="#contato"
                className="btn-primary"
                style={{
                  backgroundColor: '#1a56db',
                  padding: '14px 28px',
                  borderRadius: '12px',
                }}
              >
                Solicitar Demonstração
                <ArrowRight size={18} />
              </a>
            ) : (
              <button
                onClick={onOpenDownloadModal}
                className="btn-primary"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#1a56db',
                  padding: '14px 28px',
                  borderRadius: '12px',
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
        @media (max-width: 960px) {
          .value-prop-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .value-prop-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
