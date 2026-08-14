import React from 'react';
import { Mail, PhoneCall, MapPin, MessageSquare, Building2, Truck, ShieldCheck, ArrowRight, Clock, CheckCircle2, Headphones, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const contactChannels = [
    {
      badge: 'Para Embarcadores & Indústrias',
      title: 'Atendimento Comercial Corporativo',
      desc: 'Demonstração da plataforma para sua empresa, negociação de grandes volumes de fretes e integração com seu sistema ERP.',
      icon: Building2,
      iconBg: '#eff6ff',
      iconColor: '#1a56db',
      primaryAction: {
        label: 'Conversar com Consultor Comercial',
        href: 'https://wa.me/5511999999999?text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20as%20solu%C3%A7%C3%B5es%20do%20RotaJ%C3%A1%20para%20minha%20empresa.',
        icon: MessageSquare,
        color: '#1a56db',
        textColor: '#ffffff',
      },
      secondaryAction: {
        label: '(11) 99999-0000 · Ligação Direta',
        href: 'tel:5511999999999',
        icon: PhoneCall,
      },
      highlights: [
        'Demonstração guiada do painel',
        'Atendimento prioritário para CNPJ',
        'Cotações para rotas dedicadas',
      ],
    },
    {
      badge: 'Para Motoristas & Frotistas',
      title: 'Suporte Operacional ao Motorista',
      desc: 'Tire dúvidas sobre validação de cadastro, homologação ANTT/RNTRC, liberação de saldo de fretes e uso do aplicativo no dia a dia.',
      icon: Truck,
      iconBg: '#ecfdf5',
      iconColor: '#10b981',
      primaryAction: {
        label: 'Falar com Suporte ao Motorista',
        href: 'https://wa.me/5511999999999?text=Ol%C3%A1%21%20Sou%20motorista%20e%20preciso%20de%20suporte%20no%20RotaJ%C3%A1.',
        icon: MessageSquare,
        color: '#10b981',
        textColor: '#ffffff',
      },
      secondaryAction: {
        label: 'Dúvidas sobre Cadastro no App',
        href: '#faq',
        icon: Headphones,
      },
      highlights: [
        'Apoio em viagens ativas',
        'Agilidade na liberação de pagamentos',
        'Suporte técnico no aplicativo',
      ],
    },
    {
      badge: 'Central Institucional & Parcerias',
      title: 'E-mail Oficial & Ouvidoria',
      desc: 'Canal direto para propostas de parcerias estratégicas, imprensa, conformidade fiscal e assuntos corporativos gerais.',
      icon: Mail,
      iconBg: '#f8fafc',
      iconColor: '#334155',
      primaryAction: {
        label: 'Enviar E-mail para contato@rotaja.com.br',
        href: 'mailto:contato@rotaja.com.br?subject=Contato%20via%20Site%20RotaJ%C3%A1',
        icon: Mail,
        color: '#0f172a',
        textColor: '#ffffff',
      },
      secondaryAction: {
        label: 'Base Operacional · São Paulo, SP',
        href: '#',
        icon: MapPin,
      },
      highlights: [
        'Resposta em até 2 horas úteis',
        'Conformidade LGPD e segurança',
        'Atendimento em território nacional',
      ],
    },
  ];

  return (
    <section
      id="contato"
      style={{
        padding: '100px 0',
        backgroundColor: '#f0f7ff',
        borderBottom: '1px solid #e2e8f0',
        position: 'relative',
      }}
    >
      <div className="corporate-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <h2
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(2.1rem, 3.4vw, 2.9rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '18px',
              lineHeight: 1.15,
            }}
          >
            Fale diretamente com nossa equipe especializada.
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: 1.7 }}>
            Sem burocracia ou formulários longos. Escolha o canal de sua preferência e conecte-se com especialistas em logística de cargas em 1 clique.
          </p>
        </div>

        {/* 3 Interactive Direct Action Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
          }}
          className="contact-cards-grid"
        >
          {contactChannels.map((channel, idx) => {
            const Icon = channel.icon;
            const PrimaryIcon = channel.primaryAction.icon;
            const SecondaryIcon = channel.secondaryAction.icon;

            return (
              <div
                key={idx}
                className="corp-card contact-action-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '24px',
                  padding: '36px 30px',
                  borderRadius: '24px',
                  backgroundColor: '#ffffff',
                  border: '1.5px solid #e2e8f0',
                  boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                }}
              >
                <div>
                  {/* Badge & Icon Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '16px',
                        backgroundColor: channel.iconBg,
                        border: `1.5px solid ${channel.iconColor}33`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={26} color={channel.iconColor} />
                    </div>

                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        color: channel.iconColor,
                        backgroundColor: channel.iconBg,
                        padding: '6px 12px',
                        borderRadius: '9999px',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {channel.badge}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3
                    style={{
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      marginBottom: '12px',
                      lineHeight: 1.25,
                    }}
                  >
                    {channel.title}
                  </h3>

                  <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.65, marginBottom: '20px' }}>
                    {channel.desc}
                  </p>

                  {/* Highlights checklist */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                    {channel.highlights.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: '0.86rem', fontWeight: 600, color: '#334155' }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a
                    href={channel.primaryAction.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      padding: '14px 20px',
                      backgroundColor: channel.primaryAction.color,
                      color: channel.primaryAction.textColor,
                      fontWeight: 700,
                      fontSize: '0.92rem',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      boxShadow: `0 4px 14px ${channel.primaryAction.color}40`,
                      transition: 'all 0.2s ease',
                    }}
                    className="contact-btn-hover"
                  >
                    <PrimaryIcon size={18} />
                    <span>{channel.primaryAction.label}</span>
                    <ExternalLink size={14} style={{ opacity: 0.8 }} />
                  </a>

                  <a
                    href={channel.secondaryAction.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '12px 18px',
                      backgroundColor: '#f8fafc',
                      color: '#334155',
                      fontWeight: 600,
                      fontSize: '0.86rem',
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#f1f5f9';
                      e.currentTarget.style.borderColor = '#cbd5e1';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#f8fafc';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                    }}
                  >
                    <SecondaryIcon size={16} color="#64748b" />
                    <span>{channel.secondaryAction.label}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Support Guarantee Banner */}
        <div
          style={{
            marginTop: '48px',
            padding: '24px 32px',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            border: '1.5px solid #bfdbfe',
            boxShadow: '0 8px 24px -4px rgba(26, 86, 219, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                boxShadow: '0 0 0 4px rgba(16, 185, 129, 0.2)',
                animation: 'pulse 2s infinite',
              }}
            />
            <div>
              <div style={{ fontSize: '0.96rem', fontWeight: 800, color: '#0f172a' }}>
                Atendimento Operacional Ativo em Todo o Brasil
              </div>
              <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                Segunda a Sexta das 07h às 19h · Sábados e Plantão Operacional 24h para Cargas em Rota
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1a56db', fontSize: '0.86rem', fontWeight: 700 }}>
            <ShieldCheck size={18} color="#1a56db" />
            <span>Dados e Contatos Protegidos por Criptografia</span>
          </div>
        </div>

      </div>

      <style>{`
        .contact-action-card:hover {
          transform: translateY(-6px);
          border-color: #1a56db !important;
          box-shadow: 0 16px 36px -6px rgba(26, 86, 219, 0.15) !important;
        }
        .contact-btn-hover:hover {
          transform: translateY(-2px);
          filter: brightness(1.06);
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
          70% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        @media (max-width: 960px) {
          .contact-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
