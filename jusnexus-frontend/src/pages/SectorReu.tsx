import React from 'react';
import AssistantCard from '../components/AssistantCard';
import { FileText, Scale } from 'lucide-react';

const SectorReu: React.FC = () => {
  const assistants = [
    {
      id: 'recursos',
      name: 'Assistente de Recursos',
      description: 'Especialista em análise e geração de recursos judiciais.',
      icon: FileText,
    },
    {
      id: 'contestacao',
      name: 'Assistente de Contestação',
      description: 'Especialista em defesas e contestações processuais.',
      icon: Scale,
    },
  ];

  return (
    <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-4">Setor BB Réu</h1>
        <p className="mt-2 text-lg text-gray-400 mb-10">Escolha um assistente especializado em defesa.</p>
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {assistants.map(assistant => (
            <AssistantCard
              key={assistant.id}
              id={assistant.id}
              name={assistant.name}
              description={assistant.description}
              icon={assistant.icon}
              sector="reu"
            />
          ))}
        </div>
    </div>
  );
};
export default SectorReu;
