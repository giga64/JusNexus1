import React from 'react';
import { useParams } from 'react-router-dom';

const AssistantChat: React.FC = () => {
  const { sector, assistant } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
        Assistente: {assistant}
      </h1>
      <p className="text-gray-400 mb-8">Setor: {sector}</p>
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl">
        <p className="text-white text-lg mb-4">
          Interface de chat e formulários para o assistente <strong>{assistant}</strong> do setor <strong>{sector}</strong>.
        </p>
        <p className="text-gray-400">
          Esta é uma página de placeholder. Na próxima fase, vamos implementar a interface completa do assistente.
        </p>
      </div>
    </div>
  );
};

export default AssistantChat;
