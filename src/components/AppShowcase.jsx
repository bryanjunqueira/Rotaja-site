import React, { useState } from 'react';
import { Smartphone, Map, CreditCard, Truck, Check, Eye } from 'lucide-react';

export default function AppShowcase({ onOpenDownloadModal }) {
  const [activeScreen, setActiveScreen] = useState(0);

  const screens = [
    {
      id: 'mapa',
      title: 'Mapa & Corridas',
      badge: 'MONITORAMENTO EM TEMPO REAL',
      subtitle: 'Visualização de ofertas de fretes na sua região com cálculo automático de raio e distância.',
      icon: Map,
      previewTitle: 'Cargas Próximas - SP',
      previewItems: [
        { title: 'Carga Comercial · Baú', distance: '12 km', price: 'R$ 290,00', route: 'Lapa → Santana' },
        { title: 'Entrega Expressa · VUC', distance: '28 km', price: 'R$ 450,00', route: 'Mooca → Guarulhos' },
        { title: 'Carga Fechada · Toco', distance: '55 km', price: 'R$ 820,00', route: 'Osasco → Campinas' }
      ]
    },
    {
      id: 'detalhes',
      title: 'Detalhes da Carga',
      badge: 'TRANSPARÊNCIA COMPLETA',
      subtitle: 'Acesse peso, volumes, horário limite de coleta e contatos sem surpresas no momento do carregamento.',
      icon: Eye,
      previewTitle: 'Carga #9021 - Detalhes',
      previewItems: [
        { title: 'Tipo de Mercadoria', distance: 'Paletizado / Caixas', price: '1.450 kg', route: '3 Paletes' },
        { title: 'Local de Coleta', distance: 'Av. das Nações Unidas', price: '14:30h', route: 'Docas 04' },
        { title: 'Requisito do Veículo', distance: 'Baú 3/4 ou VUC', price: 'R$ 510,00', route: 'Pago na Entrega' }
      ]
    },
    {
      id: 'extrato',
      title: 'Extrato de Ganhos',
      badge: 'CONTROLE FINANCEIRO',
      subtitle: 'Acompanhe seus rendimentos diários e semanais com detalhamento de cada corrida realizada.',
      icon: CreditCard,
      previewTitle: 'Resumo Financeiro Semanal',
      previewItems: [
        { title: 'Total da Semana', distance: '18 Corridas Concluídas', price: 'R$ 3.840,00', route: 'Liberado' },
        { title: 'Frete #4819 (Ontem)', distance: 'Barra Funda → Sto André', price: 'R$ 410,00', route: 'Pago' },
        { title: 'Frete #4812 (12/08)', distance: 'Pinheiros → Alphaville', price: 'R$ 360,00', route: 'Pago' }
      ]
    },
    {
      id: 'veiculos',
      title: 'Gestão de Veículos',
      badge: 'CADASTRO DE FROTA',
      subtitle: 'Cadastre e gerencie a documentação do seu veículo para habilitação automática em novos fretes.',
      icon: Truck,
      previewTitle: 'Meus Veículos Cadastrados',
      previewItems: [
        { title: 'Mercedes-Benz Accelo 1016', distance: 'Placa: ABC-8A99', price: 'Ativo', route: 'VUC Baú Sider' },
        { title: 'VW Delivery Express', distance: 'Placa: FGH-3M22', price: 'Ativo', route: 'Caminhão 3/4' },
        { title: 'Documentação ANTT', distance: 'Válida até 11/2027', price: 'OK', route: 'Verificada' }
      ]
    }
  ];

  const current = screens[activeScreen];

  return (
    <section className="py-24 bg-[#0b0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>INTERFACE DO APLICATIVO</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Conheça as telas do RotaJá
          </h2>
          <p className="text-slate-400 text-base">
            Design focado na praticidade para o motorista no trânsito e no controle do embarcador.
          </p>
        </div>

        {/* Screen Tabs Nav */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12">
          {screens.map((screen, idx) => {
            const Icon = screen.icon;
            const isActive = activeScreen === idx;
            return (
              <button
                key={screen.id}
                onClick={() => setActiveScreen(idx)}
                className={`py-3.5 px-4 rounded-2xl text-xs font-bold transition-all flex flex-col items-center gap-2 border ${
                  isActive
                    ? 'bg-[#131b2a] border-[#00e676] text-white shadow-xl shadow-[#00e676]/10'
                    : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#00e676]' : 'text-slate-500'}`} />
                <span>{screen.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Viewer Box */}
        <div className="bg-[#131b2a] rounded-3xl p-8 sm:p-12 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Info Side */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-[#162218] border border-[#00e676]/30 text-[#00e676] text-[11px] font-extrabold uppercase tracking-wider">
              {current.badge}
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              {current.title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed">
              {current.subtitle}
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-xs text-slate-300">
                <div className="w-5 h-5 rounded-full bg-[#00e676]/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-[#00e676]" />
                </div>
                <span>Navegação intuitiva em poucos toques</span>
              </li>
              <li className="flex items-center gap-3 text-xs text-slate-300">
                <div className="w-5 h-5 rounded-full bg-[#00e676]/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-[#00e676]" />
                </div>
                <span>Notificações push instantâneas de novas chamadas</span>
              </li>
              <li className="flex items-center gap-3 text-xs text-slate-300">
                <div className="w-5 h-5 rounded-full bg-[#00e676]/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-[#00e676]" />
                </div>
                <span>Funcionamento otimizado para baixo consumo de dados</span>
              </li>
            </ul>

            <button
              onClick={onOpenDownloadModal}
              className="mt-4 px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-[#00e676] hover:bg-[#05c46b] transition-all flex items-center gap-2"
            >
              <Smartphone className="w-4 h-4" />
              <span>Experimentar Versão Beta</span>
            </button>
          </div>

          {/* Interactive Screen Preview Side */}
          <div className="lg:col-span-6 bg-[#0b0f17] p-5 rounded-3xl border border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00e676]" />
                {current.previewTitle}
              </span>
              <span className="text-[10px] font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                Simulador UI
              </span>
            </div>

            <div className="space-y-3">
              {current.previewItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#131b2a] border border-slate-800 flex items-center justify-between gap-3 text-xs hover:border-emerald-500/30 transition-colors"
                >
                  <div>
                    <p className="font-bold text-white mb-0.5">{item.title}</p>
                    <p className="text-[11px] text-slate-400">{item.route} · {item.distance}</p>
                  </div>
                  <span className="font-extrabold text-[#00e676] bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <span className="text-[11px] text-slate-500">
                Toque acima para alternar as visualizações do aplicativo.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
