import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';

export default function Faq() {
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
      style={{
        padding: '100px 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div className="corporate-container" style={{ maxWidth: '880px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '18px',
            }}
          >
            Tire suas dúvidas sobre a operação do RotaJá.
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7 }}>
            Esclarecimentos detalhados sobre requisitos cadastrais, segurança financeira e prazos operacionais.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
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
                  style={{
                    width: '100%',
                    padding: '22px 24px',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    backgroundColor: 'transparent',
                    fontSize: '1.02rem',
                    fontWeight: 700,
                    color: isOpen ? '#1a56db' : '#0f172a',
                    cursor: 'pointer',
                  }}
                >
                  <span>{faq.q}</span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
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
                  <div
                    style={{
                      padding: '0 24px 24px',
                      color: '#475569',
                      fontSize: '0.94rem',
                      lineHeight: 1.7,
                      borderTop: '1px solid #eff6ff',
                      paddingTop: '16px',
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra contact box */}
        <div
          style={{
            marginTop: '40px',
            textAlign: 'center',
            padding: '24px',
            backgroundColor: '#f8fafc',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
          }}
        >
          <span style={{ fontSize: '0.92rem', color: '#64748b' }}>
            Ainda tem dúvidas específicas sobre a sua operação?{' '}
          </span>
          <a
            href="#contato"
            style={{ fontSize: '0.92rem', fontWeight: 700, color: '#1a56db', textDecoration: 'underline' }}
          >
            Fale com nossa equipe comercial
          </a>
        </div>

      </div>
    </section>
  );
}
