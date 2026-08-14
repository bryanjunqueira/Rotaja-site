import React, { useState } from 'react';
import { X, Smartphone, CheckCircle, Mail, ShieldCheck, ArrowRight, Truck, Building2 } from 'lucide-react';
import logoNoBg from '../assets/WhatsApp_Image_2026-08-10_at_20.09.11-removebg-preview.png';

export default function DownloadModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [perfil, setPerfil] = useState('motorista');
  const [subscribed, setSubscribed] = useState(false);

  if (!isOpen) return null;

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const handleClose = () => {
    setSubscribed(false);
    setEmail('');
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        backgroundColor: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(8px)',
      }}
      onClick={handleClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '520px',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          padding: '36px 32px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          border: '1px solid #e2e8f0',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            padding: '8px',
            borderRadius: '50%',
            backgroundColor: '#f1f5f9',
            border: 'none',
            color: '#64748b',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Fechar"
        >
          <X size={18} />
        </button>

        {subscribed ? (
          <div style={{ textAlign: 'center', padding: '24px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#ecfdf5',
                border: '2px solid #10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CheckCircle size={32} color="#10b981" />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a' }}>
              Acesso Confirmado com Sucesso!
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, maxWidth: '380px' }}>
              Enviamos o link direto de download e instruções para o e-mail <strong>{email}</strong>.
            </p>
            <button
              onClick={handleClose}
              className="btn-primary"
              style={{ marginTop: '8px', borderRadius: '10px' }}
            >
              Concluir
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src={logoNoBg} alt="RotaJá" style={{ height: '36px', width: 'auto' }} />
              <span className="corporate-badge" style={{ fontSize: '0.72rem' }}>
                Versão Oficial RotaJá
              </span>
            </div>

            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                Baixe o Aplicativo RotaJá
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
                Disponível para Android e iOS. Acesse a melhor rede de cargas e transportadores.
              </p>
            </div>

            {/* Store Badges */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div
                style={{
                  padding: '14px',
                  borderRadius: '12px',
                  backgroundColor: '#f8fafc',
                  border: '1.5px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <Smartphone size={24} color="#1a56db" />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>
                    Disponível no
                  </div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a' }}>
                    Google Play
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: '14px',
                  borderRadius: '12px',
                  backgroundColor: '#f8fafc',
                  border: '1.5px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <Smartphone size={24} color="#1a56db" />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>
                    Disponível na
                  </div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a' }}>
                    App Store
                  </div>
                </div>
              </div>
            </div>

            {/* Email Direct Access Form */}
            <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Perfil de Acesso:
                </label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    type="button"
                    onClick={() => setPerfil('motorista')}
                    style={{
                      flex: 1,
                      padding: '10px',
                      borderRadius: '10px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      border: perfil === 'motorista' ? '2px solid #1a56db' : '1px solid #cbd5e1',
                      backgroundColor: perfil === 'motorista' ? '#eff6ff' : '#ffffff',
                      color: perfil === 'motorista' ? '#1a56db' : '#64748b',
                    }}
                  >
                    <Truck size={14} style={{ display: 'inline', marginRight: '6px' }} />
                    Motorista
                  </button>

                  <button
                    type="button"
                    onClick={() => setPerfil('empresa')}
                    style={{
                      flex: 1,
                      padding: '10px',
                      borderRadius: '10px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      border: perfil === 'empresa' ? '2px solid #1a56db' : '1px solid #cbd5e1',
                      backgroundColor: perfil === 'empresa' ? '#eff6ff' : '#ffffff',
                      color: perfil === 'empresa' ? '#1a56db' : '#64748b',
                    }}
                  >
                    <Building2 size={14} style={{ display: 'inline', marginRight: '6px' }} />
                    Empresa
                  </button>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Receba o link de instalação no seu e-mail:
                </label>
                <div style={{ position: 'relative' }}>
                  <Mail size={18} color="#94a3b8" style={{ position: 'absolute', left: '14px', top: '14px' }} />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu.email@exemplo.com.br"
                    style={{
                      width: '100%',
                      padding: '12px 14px 12px 42px',
                      borderRadius: '10px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.92rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                }}
              >
                Garantir Acesso Imediato
                <ArrowRight size={16} />
              </button>
            </form>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.78rem', color: '#64748b' }}>
              <ShieldCheck size={14} color="#10b981" />
              <span>Seus dados estão protegidos pela LGPD.</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
