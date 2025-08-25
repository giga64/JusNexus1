import React from 'react';
import SectorCard from '../components/SectorCard';
import StatsCard from '../components/StatsCard';
import { BarChart3, Bot, Zap, Target, Shield, Scale } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto mb-12">
        <StatsCard icon={BarChart3} title="Processos" value="1,247" subtitle="Total em andamento" />
        <StatsCard icon={Bot} title="IA Ativa" value="98.5%" subtitle="Precisão média" />
        <StatsCard icon={Zap} title="Eficiência" value="2.3x" subtitle="Mais rápido" />
        <StatsCard icon={Target} title="Sucesso" value="94%" subtitle="Taxa de aprovação" />
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Selecione o Setor</h1>
        <p className="mt-4 text-lg text-gray-400">Escolha a área de atuação para iniciar o assistente virtual.</p>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <SectorCard
          title="BB Réu"
          description="Setor especializado em defesa jurídica, recursos e contestações processuais."
          icon={Shield}
          path="/setor/reu"
          variant="reu"
        />
        <SectorCard
          title="BB Autor"
          description="Setor especializado em ações judiciais, ajuizamentos e negociações."
          icon={Scale}
          path="/setor/autor"
          variant="autor"
        />
      </div>
    </div>
  );
};

export default Dashboard;
