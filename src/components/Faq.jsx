import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';

export default function Faq({ onOpenContact }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Como minha empresa pode começar a publicar fretes no RotaJá?',
      a: 'O cadastro é simples e rápido. Basta clicar no botão "Sou Embarcador / Empresa" ou preencher o formulário ao final desta página. Nossa equipe corporativa validará o CNPJ e liberará o acesso ao painel de gestão para início imediato das publicações.',
    },
    {
      q: 'Quais documentos são exigidos para o motorista autônomo rodar no RotaJá?',
      a: 'Para garantir a segurança das cargas, exigimos CNH válida com observação EAR (Exerce Atividade Remunerada), CRLV do veículo atualizado e cadastro de ANTT/RNTRC ativo para transporte rodoviário.',
    },
    {
      q: 'Como é garantido o pagamento do frete para o motorista?',
      a: 'O valor do frete fica caucionado na plataforma assim que a empresa confirma a contratação. Assim que o motorista conclui a entrega e anexa a foto do canhoto assinado no aplicativo, o saldo é liberado diretamente para sua conta bancária sem intermediários.',
    },
    {
      q: 'A empresa consegue acompanhar o andamento da carga?',
      a: 'Sim. Todas as etapas do transporte (Aguardando Motorista, Carga Aceita, Em Rota e Entregue) são atualizadas em tempo real pelo aplicativo com confirmação digital.',
    },
    {
      q: 'Existe cobrança de mensalidade ou mensalidade fixa para usar o sistema?',
      a: 'Não cobramos taxas de adesão nem mensalidades abusivas. O modelo é baseado no sucesso das operações realizadas, garantindo o melhor custo-benefício para embarcadores e rentabilidade máxima para os motoristas.',
    },
    {
      q: 'Como funciona o canhoto e a comprovação digital de entrega?',
      a: 'No momento do descarregamento, o motorista tira uma foto em alta definição do canhoto assinado e do local da entrega. A imagem é vinculada à nota fiscal e enviada instantaneamente ao sistema da empresa para baixa operacional.',
    },
  ];

  return (
    <section
      id="faq"
      className="faq-section"
    >
      <div className="corporate-container" style={{ maxWidth: '880px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(1.75rem, 3.2vw, 2.8rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '16px',
            }}
          >
            Tire suas dúvidas sobre a operação do RotaJá.
          </h2>
          <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.7 }}>
            Esclarecimentos detalhados sobre requisitos cadastrais, segurança financeira e prazos operacionais.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="faq-accordion-item"
                style={{
                  backgroundColor: isOpen ? '#ffffff' : '#f8fafc',
                  border: isOpen ? '1.5px solid #1a56db' : '1px solid #e2e8f0',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease',
                  boxShadow: isOpen ? '0 4px 20px -2px rgba(26, 86, 219, 0.1)' : 'none',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="faq-btn"
                  style={{
                    color: isOpen ? '#1a56db' : '#0f172a',
                  }}
                >
                  <span>{faq.q}</span>
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '8px',
                      backgroundColor: isOpen ? '#eff6ff' : '#ffffff',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    <ChevronDown size={18} color={isOpen ? '#1a56db' : '#64748b'} />
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra contact box */}
        <div className="faq-extra-contact">
          <span style={{ fontSize: '0.9rem', color: '#64748b' }}>
            Ainda tem dúvidas específicas sobre a sua operação?{' '}
          </span>
          <button
            onClick={onOpenContact}
            style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1a56db', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            Fale com nossa equipe comercial
          </button>
        </div>

      </div>

      <style>{`
        .faq-section {
          padding: 90px 0;
          background-color: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          overflow-x: hidden;
          max-width: 100vw;
        }
        .faq-btn {
          width: 100%;
          padding: 20px 24px;
          text-align: left;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          background-color: transparent;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
        }
        .faq-answer {
          padding: 0 24px 22px;
          color: '#475569';
          font-size: 0.92rem;
          line-height: 1.7;
          border-top: 1px solid #eff6ff;
          padding-top: 14px;
        }
        .faq-extra-contact {
          margin-top: 36px;
          text-align: center;
          padding: 20px;
          background-color: #f8fafc;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
        }

        @media (max-width: 640px) {
          .faq-section {
            padding: 60px 0;
          }
          .faq-btn {
            padding: 16px 18px;
            font-size: 0.92rem;
            gap: 12px;
          }
          .faq-answer {
            padding: 0 18px 18px;
            font-size: 0.88rem;
            padding-top: 12px;
          }
          .faq-extra-contact {
            padding: 16px;
          }
        }
      `}</style>
    </section>
  );
}
