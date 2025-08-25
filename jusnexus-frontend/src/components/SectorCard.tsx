import { useNavigate } from 'react-router-dom';
import { Card } from './ui/Card';
import { ArrowRight } from 'lucide-react';

interface SectorCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
}

const SectorCard = ({ title, description, icon, path }: SectorCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(path)}
      className="glass-card p-6 flex flex-col items-center text-center cursor-pointer group hover:border-nexus-accent transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="text-nexus-accent mb-4 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-6 flex-grow">{description}</p>
      <div className="flex items-center text-nexus-accent font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Acessar Setor <ArrowRight className="ml-2 h-5 w-5" />
      </div>
    </Card>
  );
};

export default SectorCard;
