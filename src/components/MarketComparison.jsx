import React from 'react';
import { Check, X, ShieldAlert, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';

export default function MarketComparison({ onOpenDownloadModal, onOpenContact }) {
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
      className="comparison-section"
    >
      <div className="corporate-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 52px' }}>
          <h2
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(1.75rem, 3.2vw, 2.8rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '16px',
            }}
          >
            O fim da burocracia no transporte rodoviário.
          </h2>
          <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.7 }}>
            Veja a comparação entre o modelo tradicional com atravessadores e a eficiência direta da plataforma RotaJá.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="comparison-card">
          {/* Table Header (Desktop only) */}
          <div className="comparison-header">
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
              className={`comparison-row ${idx % 2 === 0 ? 'comparison-row--even' : 'comparison-row--odd'}`}
            >
              <div className="comparison-cell-feature">
                {row.feature}
              </div>

              <div className="comparison-cell-trad">
                <span className="comparison-mobile-badge comparison-mobile-badge--trad">
                  <X size={11} color="#ef4444" />
                  Tradicional
                </span>
                <div className="comparison-icon-wrap comparison-icon-wrap--trad">
                  <X size={12} color="#ef4444" />
                </div>
                <span>{row.traditional}</span>
              </div>

              <div className="comparison-cell-rotaja">
                <span className="comparison-mobile-badge comparison-mobile-badge--rotaja">
                  <Check size={11} color="#1a56db" />
                  Com o RotaJá
                </span>
                <div className="comparison-icon-wrap comparison-icon-wrap--rotaja">
                  <Check size={13} color="#1a56db" />
                </div>
                <span>{row.rotaja}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="comparison-bottom-callout">
          <p style={{ fontSize: '0.94rem', color: '#64748b', fontWeight: 500 }}>
            Modernize agora a logística da sua empresa ou comece a rodar com autonomia.
          </p>
          <div className="comparison-cta-wrap">
            <button
              onClick={onOpenDownloadModal}
              className="btn-primary"
              style={{ borderRadius: '12px' }}
            >
              Experimentar o RotaJá
              <ArrowRight size={16} />
            </button>
            <button
              onClick={onOpenContact}
              className="btn-secondary"
              style={{ borderRadius: '12px', cursor: 'pointer' }}
            >
              Falar com Especialista
            </button>
          </div>
        </div>

      </div>

      <style>{`
        .comparison-section {
          padding: 90px 0;
          background-color: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          overflow-x: hidden;
          max-width: 100vw;
        }
        .comparison-card {
          background-color: #ffffff;
          border-radius: 24px;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 12px 36px -4px rgba(15, 23, 42, 0.08);
          overflow: hidden;
        }
        .comparison-header {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          background-color: #f8fafc;
          border-bottom: 2px solid #e2e8f0;
          padding: 20px 28px;
          font-weight: 800;
          font-size: 0.95rem;
        }
        .comparison-row {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          padding: 20px 28px;
          border-bottom: 1px solid #f1f5f9;
          align-items: center;
          gap: 16px;
        }
        .comparison-row:last-child {
          border-bottom: none;
        }
        .comparison-row--even {
          background-color: #ffffff;
        }
        .comparison-row--odd {
          background-color: #f8fafc;
        }
        .comparison-cell-feature {
          font-weight: 700;
          color: #0f172a;
          font-size: 0.94rem;
        }
        .comparison-cell-trad {
          color: #64748b;
          font-size: 0.88rem;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .comparison-cell-rotaja {
          color: #0f172a;
          font-weight: 600;
          font-size: 0.9rem;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .comparison-icon-wrap {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .comparison-icon-wrap--trad {
          background-color: #fef2f2;
        }
        .comparison-icon-wrap--rotaja {
          background-color: #eff6ff;
        }
        .comparison-mobile-badge {
          display: none;
        }
        .comparison-bottom-callout {
          margin-top: 40px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .comparison-cta-wrap {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .comparison-section {
            padding: 60px 0;
          }
          .comparison-header {
            display: none !important;
          }
          .comparison-card {
            border-radius: 18px;
          }
          .comparison-row {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
            padding: 20px 16px !important;
          }
          .comparison-cell-feature {
            font-size: 1rem;
            color: #0f172a;
            padding-bottom: 4px;
            border-bottom: 1px solid #e2e8f0;
          }
          .comparison-icon-wrap {
            display: none !important;
          }
          .comparison-mobile-badge {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 3px 8px;
            border-radius: 6px;
            font-size: 0.72rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.03em;
            flex-shrink: 0;
          }
          .comparison-mobile-badge--trad {
            background-color: #fef2f2;
            color: #ef4444;
          }
          .comparison-mobile-badge--rotaja {
            background-color: #eff6ff;
            color: #1a56db;
          }
          .comparison-cell-trad, .comparison-cell-rotaja {
            flex-direction: column;
            gap: 6px;
            background-color: rgba(255, 255, 255, 0.7);
            padding: 10px 12px;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
          }
          .comparison-cell-rotaja {
            background-color: #f0f7ff;
            border-color: #bfdbfe;
          }
          .comparison-cta-wrap {
            width: 100%;
            flex-direction: column;
          }
          .comparison-cta-wrap button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
