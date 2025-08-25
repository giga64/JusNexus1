import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { Button } from './ui/Button';

interface AssistantCardProps {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  sector: string;
}

const AssistantCard: React.FC<AssistantCardProps> = ({ id, name, description, icon: Icon, sector }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl text-center transform hover:scale-[1.02] transition-all duration-300 hover:bg-white/10">
      <div className="flex justify-center mb-4">
        <Icon className="w-10 h-10 text-blue-400" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
      <p className="text-sm text-gray-400 mb-6 leading-relaxed">{description}</p>
      <Button
        onClick={() => navigate(`/assistant/${sector}/${id}`)}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium border-0"
      >
        Iniciar Assistente
      </Button>
    </div>
  );
};

export default AssistantCard;
