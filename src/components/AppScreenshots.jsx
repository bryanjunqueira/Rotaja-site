import React, { useEffect, useRef } from 'react';
import { Smartphone, CheckCircle, LayoutDashboard, Truck, Building2, Receipt, ShieldCheck, ArrowRight } from 'lucide-react';
import appDashboard from '../assets/image.png';
import appMotorista from '../assets/image copy.png';
import appEmpresa from '../assets/image copy 2.png';
import appFretes from '../assets/image copy 3.png';

export default function AppScreenshots({ onOpenDownloadModal }) {
  const sectionRef = useRef(null);

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
      style={{
        padding: '100px 0',
        backgroundColor: '#f0f7ff',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div className="corporate-container">
        {/* Section Header */}
        <div
          className="scroll-reveal"
          style={{
            textAlign: 'center',
            maxWidth: '740px',
            margin: '0 auto 80px',
          }}
        >
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
            Interface intuitiva, pensada para o dia a dia na estrada.
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: 1.7 }}>
            Veja as telas reais do <strong>RotaJá</strong> em funcionamento: simples de usar, sem termos complicados e com todas as informações na palma da mão.
          </p>
        </div>

        {/* 4 Real App Screens with Smartphone Chassis */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '96px' }}>
          {screens.map((screen, idx) => {
            const Icon = screen.icon;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={screen.id}
                className="scroll-reveal"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '64px',
                  alignItems: 'center',
                  direction: isReversed ? 'rtl' : 'ltr',
                }}
                data-direction={isReversed ? 'right' : 'left'}
              >
                {/* Smartphone Device Frame displaying REAL Screenshot */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    direction: 'ltr',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '290px',
                      borderRadius: '42px',
                      backgroundColor: '#0f172a',
                      padding: '10px',
                      boxShadow: '0 24px 50px -12px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(15, 23, 42, 0.08)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    className="app-phone-card"
                  >
                    {/* Notch / Dynamic Island */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '16px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '74px',
                        height: '18px',
                        backgroundColor: '#0f172a',
                        borderRadius: '12px',
                        zIndex: 10,
                      }}
                    />

                    {/* Screen Container */}
                    <div
                      style={{
                        width: '100%',
                        borderRadius: '34px',
                        overflow: 'hidden',
                        backgroundColor: '#f1f5f9',
                      }}
                    >
                      <img
                        src={screen.image}
                        alt={screen.title}
                        style={{
                          width: '100%',
                          height: '560px',
                          objectFit: 'cover',
                          objectPosition: 'top',
                          display: 'block',
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Explanation Content */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    direction: 'ltr',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
                      }}
                    >
                      <Icon size={22} color="#1a56db" />
                    </div>
                    <span
                      style={{
                        fontSize: '0.8rem',
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
                      fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)',
                      fontWeight: 800,
                      color: '#0f172a',
                      lineHeight: 1.2,
                    }}
                  >
                    {screen.title}
                  </h3>

                  <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.7 }}>
                    {screen.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '4px' }}>
                    {screen.highlights.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '0.94rem', fontWeight: 600, color: '#1e293b' }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div style={{ paddingTop: '8px' }}>
                    <button
                      onClick={onOpenDownloadModal}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '12px 24px',
                        backgroundColor: '#eff6ff',
                        color: '#1a56db',
                        border: '1.5px solid #bfdbfe',
                        borderRadius: '12px',
                        fontWeight: 700,
                        fontSize: '0.92rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#1a56db';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#eff6ff';
                        e.currentTarget.style.color = '#1a56db';
                      }}
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
        <div
          className="scroll-reveal"
          style={{
            marginTop: '80px',
            padding: '36px 40px',
            backgroundColor: '#0f172a',
            borderRadius: '24px',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
              Pronto para começar a rodar ou publicar suas cargas?
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#94a3b8' }}>
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

      <style>{`
        .app-phone-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 30px 60px -12px rgba(26, 86, 219, 0.25) !important;
        }
      `}</style>
    </section>
  );
}
