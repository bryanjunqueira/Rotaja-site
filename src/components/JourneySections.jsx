import React, { useEffect, useRef } from 'react';
import { Truck, Building2, CheckCircle, Smartphone, MapPin, Shield, Zap, Clock } from 'lucide-react';

import appDashboard from '../assets/app-dashboard.jpg';
import appMotorista from '../assets/app-motorista.jpg';
import appEmpresa from '../assets/app-empresa.jpg';
import appFretes from '../assets/app-fretes.jpg';

/* ─── Reveal Hook ─── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

/* ─── Section Heading ─── */
function SectionHeading({ badge, title, subtitle, align = 'left' }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        textAlign: align,
        maxWidth: align === 'center' ? '700px' : '600px',
        margin: align === 'center' ? '0 auto' : undefined,
      }}
    >
      <span
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '5px 14px', borderRadius: '50px',
          background: 'rgba(26,86,219,0.15)', border: '1px solid rgba(26,86,219,0.4)',
          fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.7rem',
          color: '#93c5fd', letterSpacing: '0.07em', textTransform: 'uppercase',
          marginBottom: '20px',
        }}
      >
        {badge}
      </span>
      <h2
        style={{
          fontFamily: 'Plus Jakarta Sans, Inter, sans-serif', fontWeight: 800,
          fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#fff',
          lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '18px',
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontFamily: 'Inter, sans-serif', fontWeight: 400,
          fontSize: '1.05rem', color: 'rgba(203,213,225,0.85)', lineHeight: 1.75,
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}

/* ─── Feature Card ─── */
function FeatureCard({ icon: Icon, title, desc, delay = 0 }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal glass-card"
      style={{ padding: '28px', transitionDelay: `${delay}ms`, cursor: 'default' }}
    >
      <div
        style={{
          width: '48px', height: '48px', borderRadius: '14px',
          background: 'rgba(26,86,219,0.18)', border: '1px solid rgba(26,86,219,0.35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '18px',
        }}
      >
        <Icon size={22} color="#60a5fa" />
      </div>
      <h3
        style={{
          fontFamily: 'Plus Jakarta Sans, Inter, sans-serif', fontWeight: 700,
          fontSize: '1.05rem', color: '#fff', marginBottom: '10px', letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: 'Inter, sans-serif', fontWeight: 400,
          fontSize: '0.875rem', color: 'rgba(203,213,225,0.75)', lineHeight: 1.7,
        }}
      >
        {desc}
      </p>
    </div>
  );
}

/* ─── Step Card ─── */
function StepCard({ step, title, desc, delay = 0 }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      <div
        style={{
          padding: '32px', borderRadius: '24px',
          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
          height: '100%', transition: 'all 0.3s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(26,86,219,0.12)';
          e.currentTarget.style.borderColor = 'rgba(26,86,219,0.4)';
          e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <div style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 900, fontSize: '3.5rem',
          color: 'rgba(26,86,219,0.25)', lineHeight: 1, marginBottom: '20px', letterSpacing: '-0.04em',
        }}>{step}</div>
        <h3 style={{
          fontFamily: 'Plus Jakarta Sans, Inter, sans-serif', fontWeight: 700,
          fontSize: '1.05rem', color: '#fff', marginBottom: '10px', letterSpacing: '-0.02em',
        }}>{title}</h3>
        <p style={{
          fontFamily: 'Inter, sans-serif', fontWeight: 400,
          fontSize: '0.85rem', color: 'rgba(203,213,225,0.7)', lineHeight: 1.7,
        }}>{desc}</p>
        <div style={{
          marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)',
          fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.68rem',
          color: '#60a5fa', letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>
          Etapa {step} de 4
        </div>
      </div>
    </div>
  );
}

/* ─── Phone Frame ─── */
function PhoneFrame({ src, alt }) {
  return (
    <div
      style={{
        position: 'relative', width: '260px', borderRadius: '44px',
        background: '#080c14', border: '3px solid #1a2540',
        boxShadow: `
          0 0 0 1px rgba(255,255,255,0.07),
          0 40px 80px rgba(0,0,0,0.6),
          0 0 50px rgba(26,86,219,0.25),
          inset 0 1px 0 rgba(255,255,255,0.08)
        `,
        overflow: 'hidden',
        filter: 'drop-shadow(0 20px 50px rgba(26,86,219,0.3))',
      }}
    >
      {/* Notch */}
      <div style={{
        position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)',
        width: '88px', height: '26px', background: '#080c14', borderRadius: '20px',
        zIndex: 10, border: '2px solid #1a2540',
      }} />
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%', height: '540px', objectFit: 'cover',
          objectPosition: 'top', display: 'block', paddingTop: '44px',
        }}
      />
    </div>
  );
}

/* ─── App Showcase Row ─── */
function AppShowcaseRow({ image, alt, title, subtitle, features, reversed = false, delay = 0 }) {
  const phoneRef = useReveal();
  const textRef = useReveal();

  return (
    <div
      style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '60px', alignItems: 'center', padding: '60px 0',
      }}
    >
      {/* Phone */}
      <div
        ref={phoneRef}
        className={reversed ? 'reveal-right' : 'reveal-left'}
        style={{ order: reversed ? 2 : 1, transitionDelay: `${delay}ms`, display: 'flex', justifyContent: 'center' }}
      >
        <PhoneFrame src={image} alt={alt} />
      </div>

      {/* Text */}
      <div
        ref={textRef}
        className={reversed ? 'reveal-left' : 'reveal-right'}
        style={{
          order: reversed ? 1 : 2,
          transitionDelay: `${delay + 100}ms`,
          display: 'flex', flexDirection: 'column', gap: '24px',
        }}
      >
        <h3 style={{
          fontFamily: 'Plus Jakarta Sans, Inter, sans-serif', fontWeight: 800,
          fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: '#fff',
          letterSpacing: '-0.03em', lineHeight: 1.15,
        }}>{title}</h3>
        <p style={{
          fontFamily: 'Inter, sans-serif', fontWeight: 400,
          fontSize: '1rem', color: 'rgba(203,213,225,0.8)', lineHeight: 1.75,
        }}>{subtitle}</p>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {features.map((f, i) => (
            <li key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: '12px',
              fontFamily: 'Inter, sans-serif', fontWeight: 500,
              fontSize: '0.9rem', color: 'rgba(203,213,225,0.85)',
            }}>
              <CheckCircle size={17} color="#3b82f6" style={{ marginTop: '2px', flexShrink: 0 }} />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── Section Divider ─── */
function SectionDivider({ label }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 24px' }}>
      <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(26,86,219,0.4))' }} />
      {label && (
        <span style={{
          fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.7rem',
          color: '#60a5fa', letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap',
        }}>{label}</span>
      )}
      <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(26,86,219,0.4), transparent)' }} />
    </div>
  );
}

/* ─── Stat Item ─── */
function StatItem({ value, label, icon: Icon, index, bordered }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        padding: '36px 28px', background: 'rgba(255,255,255,0.04)',
        textAlign: 'center', transitionDelay: `${index * 80}ms`,
        borderRight: bordered ? '1px solid rgba(255,255,255,0.08)' : 'none',
      }}
    >
      <Icon size={22} color="rgba(96,165,250,0.6)" style={{ margin: '0 auto 12px' }} />
      <div style={{
        fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 900,
        fontSize: '2.2rem', color: '#fff', letterSpacing: '-0.04em',
        lineHeight: 1, marginBottom: '8px',
      }}>{value}</div>
      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'rgba(147,197,253,0.7)', fontWeight: 500 }}>
        {label}
      </div>
    </div>
  );
}

/* ─── Audience Card ─── */
function AudienceCard({ icon: Icon, title, desc, items, delay, dir }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`${dir} glass-card`}
      style={{ padding: '40px', transitionDelay: `${delay}ms` }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
        <div style={{
          width: '56px', height: '56px', borderRadius: '16px',
          background: 'rgba(26,86,219,0.2)', border: '1px solid rgba(26,86,219,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon size={26} color="#60a5fa" />
        </div>
        <h3 style={{
          fontFamily: 'Plus Jakarta Sans, Inter, sans-serif', fontWeight: 700,
          fontSize: '1.35rem', color: '#fff', letterSpacing: '-0.02em',
        }}>{title}</h3>
      </div>
      <p style={{
        fontFamily: 'Inter, sans-serif', fontSize: '0.9rem',
        color: 'rgba(203,213,225,0.75)', lineHeight: 1.75, marginBottom: '24px',
      }}>{desc}</p>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {items.map((item, i) => (
          <li key={i} style={{
            display: 'flex', gap: '10px', alignItems: 'flex-start',
            fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'rgba(203,213,225,0.85)',
          }}>
            <CheckCircle size={16} color="#3b82f6" style={{ marginTop: '2px', flexShrink: 0 }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── CTA Box ─── */
function CTABox({ onOpenDownloadModal }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        textAlign: 'center', marginTop: '80px', padding: '60px 40px',
        borderRadius: '32px', background: 'rgba(26,86,219,0.1)',
        border: '1px solid rgba(26,86,219,0.25)',
      }}
    >
      <Smartphone size={36} color="#3b82f6" style={{ margin: '0 auto 16px' }} />
      <h3 style={{
        fontFamily: 'Plus Jakarta Sans, Inter, sans-serif', fontWeight: 800,
        fontSize: '1.6rem', color: '#fff', marginBottom: '12px', letterSpacing: '-0.02em',
      }}>
        Disponível para iOS e Android
      </h3>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: 'rgba(203,213,225,0.75)', marginBottom: '28px' }}>
        Baixe o RotaJá agora e comece a transportar ou publicar fretes em minutos.
      </p>
      <button
        onClick={onOpenDownloadModal}
        style={{
          fontFamily: 'Plus Jakarta Sans, Inter, sans-serif', fontWeight: 700,
          fontSize: '1rem', color: '#fff', background: '#1a56db',
          border: 'none', borderRadius: '14px', padding: '16px 40px',
          cursor: 'pointer', transition: 'all 0.25s ease',
          boxShadow: '0 8px 30px rgba(26,86,219,0.5)',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = '#1042b8'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = '#1a56db'; e.currentTarget.style.transform = 'translateY(0)'; }}
      >
        Baixar o RotaJá
      </button>
    </div>
  );
}

/* ─── Final CTA Section ─── */
function FinalCTA({ onOpenDownloadModal }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal"
      style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}
    >
      <div style={{
        width: '80px', height: '80px', borderRadius: '24px',
        background: 'rgba(26,86,219,0.2)', border: '2px solid rgba(26,86,219,0.4)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 28px', animation: 'glow-pulse 2.5s ease-in-out infinite',
      }}>
        <MapPin size={38} color="#60a5fa" />
      </div>
      <h2 style={{
        fontFamily: 'Plus Jakarta Sans, Inter, sans-serif', fontWeight: 900,
        fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#fff',
        letterSpacing: '-0.03em', marginBottom: '20px', lineHeight: 1.1,
      }}>
        Pronto para encontrar sua próxima rota?
      </h2>
      <p style={{
        fontFamily: 'Inter, sans-serif', fontSize: '1.05rem',
        color: 'rgba(203,213,225,0.8)', lineHeight: 1.75, marginBottom: '40px',
      }}>
        Seja motorista em busca de fretes justos ou empresa que precisa de transporte com pontualidade, o RotaJá é a sua plataforma.
      </p>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          id="final-download-btn"
          onClick={onOpenDownloadModal}
          style={{
            fontFamily: 'Plus Jakarta Sans, Inter, sans-serif', fontWeight: 700,
            fontSize: '1.05rem', color: '#fff', background: '#1a56db',
            border: 'none', borderRadius: '16px', padding: '18px 48px',
            cursor: 'pointer', transition: 'all 0.25s ease',
            boxShadow: '0 8px 40px rgba(26,86,219,0.6)',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 14px 50px rgba(26,86,219,0.75)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(26,86,219,0.6)'; }}
        >
          Baixar o RotaJá Agora
        </button>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════ */
export default function JourneySections({ onOpenDownloadModal }) {
  return (
    <div
      style={{
        position: 'relative', zIndex: 20,
        background: 'linear-gradient(180deg, #060f1e 0%, #0a1628 100%)',
      }}
    >

      {/* ══ SEÇÃO 1: SOBRE ══ */}
      <section id="sobre" style={{ padding: '120px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        <SectionHeading
          badge="Sobre o RotaJá"
          title="Conectando quem transporta a quem precisa enviar."
          subtitle="O RotaJá elimina intermediários e burocracia. Conectamos motoristas autônomos e empresas de forma direta, transparente e eficiente."
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '60px' }}>
          <AudienceCard
            icon={Truck}
            title="Para Motoristas Autônomos"
            desc="Encontre fretes compatíveis com o seu veículo na sua região. Saiba o valor antes de aceitar e receba sem surpresas."
            items={[
              'Autonomia total para aceitar as melhores ofertas',
              'Rotas inteligentes otimizadas via GPS',
              'Extrato e histórico claro de todos os ganhos',
            ]}
            delay={100}
            dir="reveal-left"
          />
          <AudienceCard
            icon={Building2}
            title="Para Empresas e Embarcadores"
            desc="Publique necessidades de carga em segundos e conecte-se com motoristas qualificados. Acompanhe a entrega ao vivo."
            items={[
              'Cotação e publicação imediata de cargas',
              'Rastreamento GPS em tempo real no mapa',
              'Comprovação digital de entrega e canhoto fotográfico',
            ]}
            delay={200}
            dir="reveal-right"
          />
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px',
          marginTop: '60px', borderRadius: '24px', overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.08)',
        }}>
          {[
            { value: '50K+', label: 'Motoristas cadastrados', icon: Truck },
            { value: '15K+', label: 'Empresas parceiras', icon: Building2 },
            { value: '1M+', label: 'Fretes realizados', icon: MapPin },
            { value: '98%', label: 'Taxa de entrega no prazo', icon: CheckCircle },
          ].map((s, i) => (
            <StatItem key={i} {...s} index={i} bordered={i < 3} />
          ))}
        </div>
      </section>

      <SectionDivider label="Como funciona" />

      {/* ══ SEÇÃO 2: COMO FUNCIONA ══ */}
      <section id="como-funciona" style={{ padding: '80px 24px 120px', maxWidth: '1280px', margin: '0 auto' }}>
        <SectionHeading
          badge="Processo"
          title="Como funciona a operação no RotaJá"
          subtitle="4 etapas simples que conectam a coleta ao destino com total transparência."
          align="center"
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '60px' }}>
          {[
            { step: '01', title: 'Publicação do Frete', desc: 'A empresa insere origem, destino, volume da carga e requisitos do veículo em segundos.' },
            { step: '02', title: 'Aceite do Motorista', desc: 'Motoristas parceiros próximos visualizam todos os detalhes e confirmam o atendimento.' },
            { step: '03', title: 'Rastreamento GPS', desc: 'O percurso é monitorado em tempo real com atualizações constantes de status.' },
            { step: '04', title: 'Comprovação & Entrega', desc: 'Foto da entrega e canhoto digital validados para liberação imediata do pagamento.' },
          ].map((item, i) => (
            <StepCard key={i} {...item} delay={i * 100} />
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '60px' }}>
          <FeatureCard icon={Zap} title="Conexão Instantânea" desc="Motoristas disponíveis são notificados em tempo real assim que um frete compatível é publicado." delay={0} />
          <FeatureCard icon={Shield} title="Segurança Garantida" desc="Todos os motoristas são verificados com documentação ANTT válida e histórico de entregas." delay={100} />
          <FeatureCard icon={Clock} title="Suporte 24/7" desc="Central de atendimento disponível durante todo o trajeto para resolver qualquer imprevisto." delay={200} />
        </div>
      </section>

      <SectionDivider label="O aplicativo" />

      {/* ══ SEÇÃO 3: APLICATIVO ══ */}
      <section id="aplicativo" style={{ padding: '80px 24px 120px', maxWidth: '1280px', margin: '0 auto' }}>
        <SectionHeading
          badge="Aplicativo"
          title="O RotaJá na prática."
          subtitle="Interface desenvolvida para uso ágil durante o transporte e controle completo no painel de gestão."
          align="center"
        />

        <div style={{ marginTop: '80px' }}>
          <AppShowcaseRow
            image={appDashboard}
            alt="Dashboard inicial do RotaJá"
            title="Tela inicial — Bem-vindo ao RotaJá"
            subtitle="Acesse rapidamente todas as informações mais importantes ao abrir o app. Métricas em destaque e navegação simplificada para motoristas e empresas."
            features={[
              'Visão geral de motoristas, empresas e fretes disponíveis',
              'Login seguro com acesso separado para cada perfil',
              'Criação de conta gratuita em menos de 2 minutos',
            ]}
            reversed={false}
          />

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '20px 0' }} />

          <AppShowcaseRow
            image={appMotorista}
            alt="Painel do motorista RotaJá"
            title="Painel do Motorista — Controle total"
            subtitle="Acompanhe cargas disponíveis, aceitas e entregues em um painel intuitivo com todas as informações para tomar melhores decisões."
            features={[
              'Cargas disponíveis filtradas por tipo de veículo e região',
              'Histórico completo com status de cada entrega',
              'Ações rápidas: Buscar cargas, editar perfil e gerir veículos',
            ]}
            reversed={true}
            delay={100}
          />

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '20px 0' }} />

          <AppShowcaseRow
            image={appEmpresa}
            alt="Tela da empresa no RotaJá"
            title="Painel da Empresa — Gestão Eficiente"
            subtitle="Publique novos fretes, acompanhe ativos e gerencie toda a operação de transporte da sua empresa em um único lugar."
            features={[
              'Publicação de frete em poucos toques com todos os detalhes',
              'Monitoramento em tempo real de cargas em andamento',
              'Visão consolidada: Total, Ativos, Em Andamento e Finalizados',
            ]}
            reversed={false}
            delay={100}
          />

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '20px 0' }} />

          <AppShowcaseRow
            image={appFretes}
            alt="Lista de fretes no RotaJá"
            title="Meus Fretes — Histórico Completo"
            subtitle="Visualize todos os fretes publicados com status em tempo real, valores, datas e informações de coleta e entrega."
            features={[
              'Filtros por status: Recentes, Ativos e em Andamento',
              'Detalhes completos: Peso, valor, veículo e data de coleta',
              'Rastreamento do motorista vinculado a cada frete',
            ]}
            reversed={true}
            delay={100}
          />
        </div>

        <CTABox onOpenDownloadModal={onOpenDownloadModal} />
      </section>

      {/* ══ SEÇÃO 4: CTA FINAL ══ */}
      <section
        id="chegada"
        style={{ padding: '80px 24px 140px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(26,86,219,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <FinalCTA onOpenDownloadModal={onOpenDownloadModal} />
      </section>

      <style>{`
        @media (max-width: 900px) {
          #sobre > div:nth-child(2) { grid-template-columns: 1fr !important; }
          #sobre > div:nth-child(3) { grid-template-columns: 1fr 1fr !important; }
          #como-funciona > div:nth-child(2) { grid-template-columns: 1fr 1fr !important; }
          #como-funciona > div:nth-child(3) { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          #sobre > div:nth-child(3) { grid-template-columns: 1fr 1fr !important; }
          #aplicativo [style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          #aplicativo [style*="order: 2"] { order: 1 !important; }
        }
      `}</style>
    </div>
  );
}
