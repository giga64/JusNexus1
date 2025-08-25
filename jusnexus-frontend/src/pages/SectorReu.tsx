import { Shield } from 'lucide-react';

const SectorReu = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Shield size={64} className="text-blue-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">BB Réu</h1>
        <p className="text-lg text-gray-400 max-w-2xl">
          Assistentes virtuais especializados na defesa, elaboração de contestações, 
          recursos e outras manifestações defensivas.
        </p>
      </div>
      
      <div className="w-full max-w-4xl">
        <div className="glass-card p-8 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Assistentes em Desenvolvimento
          </h2>
          <p className="text-gray-400 mb-6">
            Esta seção estará disponível em breve com assistentes especializados 
            para a defesa jurídica.
          </p>
          <div className="flex justify-center">
            <div className="animate-pulse bg-blue-400/20 rounded-lg p-4">
              <Shield size={32} className="text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorReu;
