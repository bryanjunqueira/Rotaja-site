import React from 'react';
import { Check, X, ShieldAlert, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';

export default function MarketComparison({ onOpenDownloadModal }) {
  const comparisonData = [
    {
      feature: 'Tempo para Contratação do Frete',
      traditional: 'Horas ou dias no telefone ligando para agenciadores',
      rotaja: 'Match instantâneo com motoristas qualificados em minutos',
    },
    {
      feature: 'Acompanhamento da Carga',
      traditional: 'Ligações incertas e mensagens sem precisão de horário',
      rotaja: 'Status de cada etapa em tempo real direto no aplicativo',
    },
    {
      feature: 'Transparência de Custos',
      traditional: 'Taxas ocultas e margens abusivas de intermediários',
      rotaja: 'Valor 100% transparente: a empresa sabe o que paga e o motorista o que recebe',
    },
    {
      feature: 'Comprovação de Entrega (Canhoto)',
      traditional: 'Dias ou semanas aguardando o envio do papel físico',
      rotaja: 'Foto em alta resolução e canhoto digital liberados na mesma hora',
    },
    {
      feature: 'Homologação e Segurança',
      traditional: 'Contratação no escuro sem checagem prévia',
      rotaja: 'Validação automática de CNH, EAR, ANTT e histórico profissional',
    },
    {
      feature: 'Pagamento e Faturamento',
      traditional: 'Atrasos, cheques e burocracia contábil manual',
      rotaja: 'Processo digital com liberação garantida e relatórios consolidados',
    },
  ];

  return (
    <section
      id="diferenciais"
      style={{
        padding: '100px 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div className="corporate-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <h2
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '18px',
            }}
          >
            O fim da burocracia no transporte rodoviário.
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: 1.7 }}>
            Veja a comparação entre o modelo tradicional com atravessadores e a eficiência direta da plataforma RotaJá.
          </p>
        </div>

        {/* Comparison Table */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            border: '1.5px solid #e2e8f0',
            boxShadow: '0 12px 36px -4px rgba(15, 23, 42, 0.08)',
            overflow: 'hidden',
          }}
        >
          {/* Table Header */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr 1fr',
              backgroundColor: '#f8fafc',
              borderBottom: '2px solid #e2e8f0',
              padding: '22px 28px',
              fontWeight: 800,
              fontSize: '0.95rem',
            }}
            className="comparison-header"
          >
            <div style={{ color: '#0f172a' }}>Critério Operacional</div>
            <div style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <X size={18} color="#ef4444" />
              Modelo Tradicional
            </div>
            <div style={{ color: '#1a56db', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={18} color="#1a56db" />
              Com o RotaJá
            </div>
          </div>

          {/* Table Rows */}
          {comparisonData.map((row, idx) => (
            <div
              key={idx}
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr 1fr',
                padding: '20px 28px',
                borderBottom: idx === comparisonData.length - 1 ? 'none' : '1px solid #f1f5f9',
                backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc',
                alignItems: 'center',
                gap: '16px',
              }}
              className="comparison-row"
            >
              <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.94rem' }}>
                {row.feature}
              </div>

              <div style={{ color: '#64748b', fontSize: '0.88rem', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: '#fef2f2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <X size={12} color="#ef4444" />
                </div>
                <span>{row.traditional}</span>
              </div>

              <div style={{ color: '#0f172a', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: '#eff6ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <Check size={14} color="#1a56db" />
                </div>
                <span>{row.rotaja}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div
          style={{
            marginTop: '40px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <p style={{ fontSize: '0.95rem', color: '#64748b', fontWeight: 500 }}>
            Modernize agora a logística da sua empresa ou comece a rodar com autonomia.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={onOpenDownloadModal}
              className="btn-primary"
              style={{ borderRadius: '12px' }}
            >
              Experimentar o RotaJá
              <ArrowRight size={16} />
            </button>
            <a
              href="#contato"
              className="btn-secondary"
              style={{ borderRadius: '12px' }}
            >
              Falar com Especialista
            </a>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .comparison-header {
            display: none !important;
          }
          .comparison-row {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
            padding: 20px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
