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
    <main className="contact-page-main">
      <div className="corporate-container" style={{ maxWidth: '760px' }}>
        <button
          onClick={onGoHome}
          className="contact-back-btn"
        >
          <ArrowLeft size={18} />
          Voltar para o início
        </button>

        <div className="contact-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '14px',
                backgroundColor: '#eff6ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <MessageSquare size={24} color="#1a56db" />
            </div>
            <div>
              <h1
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                  fontWeight: 800,
                  color: '#0f172a',
                  margin: 0,
                }}
              >
                Suporte & Contato
              </h1>
            </div>
          </div>
          <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.65, marginBottom: '28px' }}>
            Preencha o formulário abaixo e nossa equipe retornará o mais rápido possível. Escolha o setor que melhor atende a sua necessidade.
          </p>

          {sent ? (
            <div style={{ textAlign: 'center', padding: '36px 16px' }}>
              <CheckCircle2 size={56} color="#10b981" style={{ marginBottom: '16px' }} />
              <h2
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: '10px',
                }}
              >
                Solicitação enviada!
              </h2>
              <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.65, maxWidth: '460px', margin: '0 auto 24px' }}>
                Recebemos seus dados, {form.nome || 'cliente'}. Nossa equipe de {form.setor.toLowerCase()} entrará em contato pelo email {form.email || 'informado'} em até 2 horas úteis.
              </p>
              <button
                onClick={onGoHome}
                className="btn-primary"
                style={{ borderRadius: '12px', width: '100%', maxWidth: '280px' }}
              >
                Voltar para o início
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Nome & Sobrenome */}
              <div className="contact-form-row">
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
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
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
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
              <div className="contact-form-row">
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
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
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
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
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                  Setor *
                </label>
                <div className="contact-setor-grid">
                  {SETORES.map((s) => {
                    const Icon = s.icon;
                    const isActive = form.setor === s.value;
                    return (
                      <button
                        key={s.value}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, setor: s.value }))}
                        className={`contact-setor-btn ${isActive ? 'contact-setor-btn--active' : ''}`}
                      >
                        <Icon size={20} color={isActive ? '#1a56db' : '#94a3b8'} />
                        <span>{s.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mensagem */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                  Como podemos ajudar? *
                </label>
                <textarea
                  name="mensagem"
                  required
                  rows={5}
                  value={form.mensagem}
                  onChange={handleChange}
                  placeholder="Descreva em detalhes o que você precisa: dúvida, demonstração, suporte técnico, negociação de valores..."
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '120px', lineHeight: 1.6 }}
                  onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
                  onBlur={(e) => Object.assign(e.currentTarget.style, { borderColor: '#cbd5e1', boxShadow: 'none' })}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '15px 28px',
                  fontSize: '1rem',
                  borderRadius: '12px',
                }}
              >
                <Send size={18} />
                Enviar solicitação
              </button>
            </form>
          )}
        </div>

        {/* Direct channels */}
        <div className="contact-channels-grid">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="contact-channel-item"
          >
            <PhoneCall size={20} color="#10b981" />
            <span>WhatsApp Direto</span>
          </a>
          <a
            href="mailto:contato@rotaja.com.br"
            className="contact-channel-item"
          >
            <Mail size={20} color="#1a56db" />
            <span>contato@rotaja.com.br</span>
          </a>
          <div className="contact-channel-item">
            <MapPin size={20} color="#334155" />
            <span>São Paulo, SP</span>
          </div>
        </div>
      </div>

      <style>{`
        .contact-page-main {
          background-color: #f0f7ff;
          min-height: 100vh;
          padding-top: 110px;
          padding-bottom: 70px;
          overflow-x: hidden;
          max-width: 100vw;
        }
        .contact-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          color: #1a56db;
          font-weight: 700;
          font-size: 0.92rem;
          cursor: pointer;
          padding: 0 0 20px;
        }
        .contact-card {
          background-color: #ffffff;
          border-radius: 24px;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 16px 40px -8px rgba(15, 23, 42, 0.1);
          padding: 44px 40px;
        }
        .contact-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          margin-bottom: 18px;
        }
        .contact-setor-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }
        .contact-setor-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 14px 8px;
          border-radius: 12px;
          border: 1.5px solid #cbd5e1;
          background-color: #ffffff;
          color: #475569;
          font-weight: 700;
          font-size: 0.82rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .contact-setor-btn--active {
          border: 2px solid #1a56db;
          background-color: #eff6ff;
          color: #1a56db;
        }
        .contact-channels-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 24px;
        }
        .contact-channel-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 18px;
          background-color: #ffffff;
          border-radius: 16px;
          border: 1.5px solid #e2e8f0;
          text-decoration: none;
          color: '#0f172a';
          font-weight: 700;
          font-size: 0.88rem;
          transition: all 0.2s ease;
        }
        .contact-channel-item:hover {
          transform: translateY(-2px);
          border-color: #1a56db;
          box-shadow: 0 8px 20px -4px rgba(26, 86, 219, 0.15);
        }

        @media (max-width: 680px) {
          .contact-page-main {
            padding-top: 88px;
            padding-bottom: 40px;
          }
          .contact-card {
            padding: 24px 18px;
            border-radius: 18px;
          }
          .contact-form-row {
            grid-template-columns: 1fr;
            gap: 14px;
            margin-bottom: 14px;
          }
          .contact-setor-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          .contact-channels-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
        }
      `}</style>
    </main>
  );
}