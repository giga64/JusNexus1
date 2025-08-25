import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface SectorCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  path: string;
  variant: 'reu' | 'autor';
}

const SectorCard: React.FC<SectorCardProps> = ({ icon: Icon, title, description, path, variant }) => {
  const navigate = useNavigate();
  
  const colorClasses = variant === 'reu' 
    ? 'border-blue-500/20 hover:border-blue-400/40 hover:bg-blue-500/5' 
    : 'border-emerald-500/20 hover:border-emerald-400/40 hover:bg-emerald-500/5';

  const iconColor = variant === 'reu' ? 'text-blue-400' : 'text-emerald-400';

  return (
    <div
      onClick={() => navigate(path)}
      className={cn(
        "bg-white/5 backdrop-blur-sm border rounded-xl p-8 text-center cursor-pointer group transition-all duration-300 transform hover:scale-[1.02]",
        colorClasses
      )}
    >
      <div className="flex justify-center mb-6">
        <Icon className={cn("w-12 h-12 transition-transform duration-300 group-hover:scale-110", iconColor)} />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-6 text-sm leading-relaxed">{description}</p>
      <button className="w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white font-medium py-3 rounded-lg transition-all duration-300 border border-gray-600/50">
        Acessar Setor
      </button>
    </div>
  );
};

export default SectorCard;
