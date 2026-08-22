import React from 'react';
import { X, Info } from 'lucide-react';

export default function DownloadModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="balloon-modal-backdrop"
      onClick={onClose}
    >
      <div
        className="balloon-modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="balloon-modal-close"
          aria-label="Fechar aviso"
        >
          <X size={18} />
        </button>

        <div className="balloon-modal-icon">
          <Info size={24} color="#1a56db" />
        </div>

        <h3 className="balloon-modal-title">
          Aplicativo em período de testes
        </h3>

        <p className="balloon-modal-text">
          O aplicativo do <strong>RotaJá</strong> ainda não foi lançado oficialmente nas lojas e está em fase de testes. Em breve estará disponível para download.
        </p>

        <button
          onClick={onClose}
          className="balloon-modal-btn"
        >
          Entendido
        </button>
      </div>

      <style>{`
        .balloon-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background-color: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(4px);
          animation: balloonFade 0.15s ease;
        }

        .balloon-modal-box {
          position: relative;
          width: 100%;
          max-width: 380px;
          background-color: #ffffff;
          border-radius: 20px;
          padding: 28px 24px 24px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          animation: balloonPop 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .balloon-modal-close {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #f1f5f9;
          border: none;
          color: #64748b;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s ease;
        }
        .balloon-modal-close:hover {
          background: #e2e8f0;
          color: #0f172a;
        }

        .balloon-modal-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: #eff6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2px;
        }

        .balloon-modal-title {
          font-family: 'Plus Jakarta Sans', Inter, sans-serif;
          font-size: 1.18rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          line-height: 1.3;
        }

        .balloon-modal-text {
          font-size: 0.9rem;
          color: #475569;
          line-height: 1.55;
          margin: 0 0 6px;
        }

        .balloon-modal-btn {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          background-color: #1a56db;
          color: #ffffff;
          font-family: 'Plus Jakarta Sans', Inter, sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: background 0.15s ease;
        }
        .balloon-modal-btn:hover {
          background-color: #1042b8;
        }

        @keyframes balloonFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes balloonPop {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
