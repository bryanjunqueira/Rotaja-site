import React, { useState } from 'react';
import { Truck, Building2, MapPin, DollarSign, Clock, Shield, CheckCircle2, Navigation, Layers, BarChart3 } from 'lucide-react';

export default function Features({ onOpenDownloadModal }) {
  const [activeTab, setActiveTab] = useState('motoristas');

  const driverFeatures = [
    {
      icon: DollarSign,
      title: 'Autonomia nos Ganhos',
      desc: 'Visualize o valor líquido do frete, distância e detalhes do destino antes de aceitar a corrida.'
    },
    {
      icon: Navigation,
      title: 'Rotas Otimizadas por GPS',
      desc: 'Integração inteligente para economizar combustível e evitar congestionamentos.'
    },
    {
      icon: Clock,
      title: 'Histórico e Extrato em Tempo Real',
      desc: 'Acompanhe todas as entregas concluídas, valores a receber e saldo direto no app.'
    },
    {
      icon: Shield,
      title: 'Segurança e Suporte Operacional',
      desc: 'Canais de comunicação direta e suporte para eventuais imprevistos durante o trajeto.'
    }
  ];

  const companyFeatures = [
    {
      icon: Layers,
      title: 'Gestão Inteligente de Cargas',
      desc: 'Cadastre especificações do frete, tipo de veículo necessário e horários limite de coleta.'
    },
    {
      icon: MapPin,
      title: 'Rastreamento em Tempo Real',
      desc: 'Monitore a posição exata do motorista do momento do carregamento até o descarregamento.'
    },
    {
      icon: BarChart3,
      title: 'Histórico Operacional e Notas',
      desc: 'Painel com histórico de entregas efetuadas, comprovantes anexados e controle financeiro.'
    },
    {
      icon: CheckCircle2,
      title: 'Motoristas Qualificados',
      desc: 'Acesso a uma rede de profissionais autônomos e frotistas com documentação validada.'
    }
  ];

  return (
    <section id="funcionalidades" className="py-24 relative z-10" style={{ background: 'transparent' }}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="badge-blue">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#2563eb' }} />
            <span>SOLUÇÕES SOB MEDIDA</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: '#111827' }}>
            Tecnologia desenvolvida para quem transporta e para quem contrata.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#64748b' }}>
            Uma plataforma completa criada para simplificar a rotina de fretes urbanos e rodoviários com eficiência.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 rounded-2xl flex gap-2 max-w-md w-full" style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(37,99,235,0.15)' }}>
            <button
              onClick={() => setActiveTab('motoristas')}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2`}
              style={activeTab === 'motoristas' ? { background: '#2563eb', color: '#fff' } : { background: 'transparent', color: '#64748b' }}
            >
              <Truck className="w-4 h-4" />
              <span>Para Motoristas</span>
            </button>
            <button
              onClick={() => setActiveTab('empresas')}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2`}
              style={activeTab === 'empresas' ? { background: '#2563eb', color: '#fff' } : { background: 'transparent', color: '#64748b' }}
            >
              <Building2 className="w-4 h-4" />
              <span>Para Empresas</span>
            </button>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(activeTab === 'motoristas' ? driverFeatures : companyFeatures).map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-3xl transition-all duration-300 group hover:-translate-y-1"
                style={{ background: '#ffffff', border: '1px solid rgba(37,99,235,0.1)' }}
              >
                <div className="w-13 h-13 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ background: '#dbeafe', border: '1px solid #bfdbfe', width: '52px', height: '52px' }}>
                  <Icon className="w-6 h-6" style={{ color: '#2563eb' }} />
                </div>
                <h3 className="font-display text-lg font-bold mb-3" style={{ color: '#111827' }}>
                  {feat.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#64748b' }}>
                  {feat.desc}
                </p>
                <button
                  onClick={onOpenDownloadModal}
                  className="text-xs font-bold flex items-center gap-1.5 transition-colors"
                  style={{ color: '#2563eb' }}
                >
                  <span>Saiba como participar dos testes</span>
                  <span className="text-base">→</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div id="motoristas" className="scroll-mt-32 mt-16 p-8 sm:p-12 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8" style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)', boxShadow: '0 8px 40px rgba(37,99,235,0.2)' }}>
          <div className="space-y-3 text-center md:text-left z-10">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold" style={{ color: '#ffffff' }}>
              Quer testar o RotaJá em primeira mão?
            </h3>
            <p className="text-sm max-w-xl" style={{ color: '#bfdbfe' }}>
              Estamos cadastrando motoristas e empresas selecionadas para a fase piloto da nossa plataforma.
            </p>
          </div>
          <button
            onClick={onOpenDownloadModal}
            className="z-10 px-8 py-4 rounded-xl font-bold flex-shrink-0 text-sm transition-all hover:-translate-y-0.5"
            style={{ background: '#ffffff', color: '#2563eb' }}
          >
            Quero me Cadastrar
          </button>
        </div>

      </div>
    </section>
  );
}
