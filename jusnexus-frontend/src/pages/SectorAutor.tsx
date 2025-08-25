import React from 'react';
import AssistantCard from '../components/AssistantCard';
import { Building2, FileCheck, Handshake } from 'lucide-react';

const SectorAutor: React.FC = () => {
  const assistants = [
    {
      id: 'ajuizamento',
      name: 'Assistente de Ajuizamento',
      description: 'Especialista em petições iniciais e ações judiciais.',
      icon: Building2,
    },
    {
      id: 'processual',
      name: 'Assistente Processual',
      description: 'Especialista em manifestações e peças processuais.',
      icon: FileCheck,
    },
    {
      id: 'negocial',
      name: 'Assistente Negocial',
      description: 'Especialista em acordos e negociações.',
      icon: Handshake,
    },
  ];

  return (
    <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent mb-4">Setor BB Autor</h1>
        <p className="mt-2 text-lg text-gray-400 mb-10">Escolha um assistente especializado em ações.</p>
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {assistants.map(assistant => (
            <AssistantCard
              key={assistant.id}
              id={assistant.id}
              name={assistant.name}
              description={assistant.description}
              icon={assistant.icon}
              sector="autor"
            />
          ))}
        </div>
    </div>
  );
};

export default SectorAutor;
