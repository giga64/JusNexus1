import SectorCard from '../components/SectorCard';
import { Shield, Gavel } from 'lucide-react'; // Ícones para os setores

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Selecione o Setor</h1>
            <p className="mt-4 text-lg text-gray-400">Escolha a área de atuação para iniciar o assistente virtual.</p>
        </div>
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
            <SectorCard
                title="BB Réu"
                description="Assistentes focados na defesa, elaborando contestações, recursos e outras manifestações defensivas."
                icon={<Shield size={48} />}
                path="/setor/reu"
            />
            <SectorCard
                title="BB Autor"
                description="Assistentes para a parte autora, desde o ajuizamento de ações até o acompanhamento processual e negociações."
                icon={<Gavel size={48} />}
                path="/setor/autor"
            />
        </div>
    </div>
  );
};

export default Dashboard;
