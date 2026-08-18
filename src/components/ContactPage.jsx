import React, { useState } from 'react';
import { Mail, PhoneCall, MapPin, Send, CheckCircle2, ArrowLeft, Building2, User, MessageSquare, Headphones, BadgeDollarSign, Briefcase } from 'lucide-react';

const SETORES = [
  { value: 'Vendas', label: 'Vendas', icon: BadgeDollarSign },
  { value: 'Suporte', label: 'Suporte', icon: Headphones },
  { value: 'Cobrança', label: 'Cobrança', icon: Briefcase },
  { value: 'Geral', label: 'Geral', icon: MessageSquare },
];

export default function ContactPage({ onGoHome }) {
  const [form, setForm] = useState({
    nome: '',
    sobrenome: '',
    telefone: '',
    email: '',
    setor: 'Geral',
    mensagem: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '12px',
    border: '1.5px solid #cbd5e1',
    backgroundColor: '#ffffff',
    fontSize: '0.95rem',
    color: '#0f172a',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  };

  const inputFocusStyle = {
    borderColor: '#1a56db',
    boxShadow: '0 0 0 3px rgba(26, 86, 219, 0.12)',
  };

  return (
    <main style={{ backgroundColor: '#f0f7ff', minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="corporate-container" style={{ maxWidth: '760px' }}>
        <button
          onClick={onGoHome}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            color: '#1a56db',
            fontWeight: 700,
            fontSize: '0.92rem',
            cursor: 'pointer',
            padding: '0 0 24px',
          }}
        >
          <ArrowLeft size={18} />
          Voltar para o início
        </button>

        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            border: '1.5px solid #e2e8f0',
            boxShadow: '0 16px 40px -8px rgba(15, 23, 42, 0.1)',
            padding: '48px 44px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                backgroundColor: '#eff6ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <MessageSquare size={26} color="#1a56db" />
            </div>
            <div>
              <h1
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: 'clamp(1.7rem, 3vw, 2.3rem)',
                  fontWeight: 800,
                  color: '#0f172a',
                  margin: 0,
                }}
              >
                Suporte & Contato
              </h1>
            </div>
          </div>
          <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: '36px' }}>
            Preencha o formulário abaixo e nossa equipe retornará o mais rápido possível. Escolha o setor que melhor atende a sua necessidade.
          </p>

          {sent ? (
            <div style={{ textAlign: 'center', padding: '48px 24px' }}>
              <CheckCircle2 size={64} color="#10b981" style={{ marginBottom: '20px' }} />
              <h2
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: '12px',
                }}
              >
                Solicitação enviada!
              </h2>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, maxWidth: '460px', margin: '0 auto 28px' }}>
                Recebemos seus dados, {form.nome || 'cliente'}. Nossa equipe de {form.setor.toLowerCase()} entrará em contato pelo email {form.email || 'informado'} em até 2 horas úteis.
              </p>
              <button
                onClick={onGoHome}
                className="btn-primary"
                style={{ borderRadius: '12px' }}
              >
                Voltar para o início
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Nome & Sobrenome */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }} className="contact-form-row">
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    required
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
                    onBlur={(e) => Object.assign(e.currentTarget.style, { borderColor: '#cbd5e1', boxShadow: 'none' })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                    Sobrenome *
                  </label>
                  <input
                    type="text"
                    name="sobrenome"
                    required
                    value={form.sobrenome}
                    onChange={handleChange}
                    placeholder="Seu sobrenome"
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
                    onBlur={(e) => Object.assign(e.currentTarget.style, { borderColor: '#cbd5e1', boxShadow: 'none' })}
                  />
                </div>
              </div>

              {/* Telefone & Email */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }} className="contact-form-row">
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    required
                    value={form.telefone}
                    onChange={handleChange}
                    placeholder="(11) 99999-0000"
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
                    onBlur={(e) => Object.assign(e.currentTarget.style, { borderColor: '#cbd5e1', boxShadow: 'none' })}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="voce@email.com"
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
                    onBlur={(e) => Object.assign(e.currentTarget.style, { borderColor: '#cbd5e1', boxShadow: 'none' })}
                  />
                </div>
              </div>

              {/* Setor */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                  Setor *
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }} className="contact-setor-grid">
                  {SETORES.map((s) => {
                    const Icon = s.icon;
                    const isActive = form.setor === s.value;
                    return (
                      <button
                        key={s.value}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, setor: s.value }))}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '16px 8px',
                          borderRadius: '14px',
                          border: isActive ? '2px solid #1a56db' : '1.5px solid #cbd5e1',
                          backgroundColor: isActive ? '#eff6ff' : '#ffffff',
                          color: isActive ? '#1a56db' : '#475569',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <Icon size={22} color={isActive ? '#1a56db' : '#94a3b8'} />
                        {s.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mensagem */}
              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                  Como podemos ajudar? *
                </label>
                <textarea
                  name="mensagem"
                  required
                  rows={6}
                  value={form.mensagem}
                  onChange={handleChange}
                  placeholder="Descreva em detalhes o que você precisa: dúvida, demonstração, suporte técnico, negociação de valores..."
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '140px', lineHeight: 1.6 }}
                  onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
                  onBlur={(e) => Object.assign(e.currentTarget.style, { borderColor: '#cbd5e1', boxShadow: 'none' })}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '16px 28px',
                  fontSize: '1.02rem',
                  borderRadius: '14px',
                }}
              >
                <Send size={18} />
                Enviar solicitação
              </button>
            </form>
          )}
        </div>

        {/* Direct channels */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '28px' }} className="contact-channels-grid">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '18px 20px',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1.5px solid #e2e8f0',
              textDecoration: 'none',
              color: '#0f172a',
              fontWeight: 700,
              fontSize: '0.9rem',
              transition: 'all 0.2s ease',
            }}
          >
            <PhoneCall size={20} color="#10b981" />
            WhatsApp Direto
          </a>
          <a
            href="mailto:contato@rotaja.com.br"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '18px 20px',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1.5px solid #e2e8f0',
              textDecoration: 'none',
              color: '#0f172a',
              fontWeight: 700,
              fontSize: '0.9rem',
              transition: 'all 0.2s ease',
            }}
          >
            <Mail size={20} color="#1a56db" />
            contato@rotaja.com.br
          </a>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '18px 20px',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1.5px solid #e2e8f0',
              color: '#0f172a',
              fontWeight: 700,
              fontSize: '0.9rem',
            }}
          >
            <MapPin size={20} color="#334155" />
            São Paulo, SP
          </div>
        </div>
      </div>

      <style>{`
        .contact-form-row {
          grid-template-columns: 1fr 1fr !important;
        }
        .contact-channels-grid {
          grid-template-columns: repeat(3, 1fr) !important;
        }
        .contact-channels-grid a:hover {
          transform: translateY(-2px);
          border-color: #1a56db;
          box-shadow: 0 8px 20px -4px rgba(26, 86, 219, 0.15);
        }
        @media (max-width: 700px) {
          .contact-form-row {
            grid-template-columns: 1fr !important;
          }
          .contact-setor-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .contact-channels-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}