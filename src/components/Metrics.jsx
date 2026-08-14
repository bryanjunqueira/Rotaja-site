import React from 'react';
import { ShieldCheck, Zap, FileText, Lock } from 'lucide-react';

export default function Metrics() {
  const items = [
    {
      icon: Zap,
      title: 'Respostas Rápidas',
      desc: 'Conexão em minutos entre solicitação de frete e motoristas disponíveis.'
    },
    {
      icon: ShieldCheck,
      title: 'Verificação Rigorosa',
      desc: 'Validação de documentos, licenças e veículos cadastrados na plataforma.'
    },
    {
      icon: FileText,
      title: 'Comprovante Digital',
      desc: 'Canhoto e foto de entrega registrados diretamente no aplicativo.'
    },
    {
      icon: Lock,
      title: 'Transparência Total',
      desc: 'Valores e condições combinadas diretamente sem comissões veladas.'
    }
  ];

  return (
    <section className="py-12 relative z-10" style={{ background: 'rgba(255,255,255,0.5)', borderTop: '1px solid rgba(37,99,235,0.1)', borderBottom: '1px solid rgba(37,99,235,0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-200" style={{ background: '#ffffff', border: '1px solid rgba(37,99,235,0.1)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#dbeafe', border: '1px solid #bfdbfe' }}>
                  <Icon className="w-5 h-5" style={{ color: '#2563eb' }} />
                </div>
                <div>
                  <h3 className="text-sm font-bold font-display mb-1" style={{ color: '#111827' }}>{item.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
