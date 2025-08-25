import { Gavel } from 'lucide-react';

const SectorAutor = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Gavel size={64} className="text-purple-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">BB Autor</h1>
        <p className="text-lg text-gray-400 max-w-2xl">
          Assistentes virtuais para a parte autora, desde o ajuizamento de ações 
          até o acompanhamento processual e negociações.
        </p>
      </div>
      
      <div className="w-full max-w-4xl">
        <div className="glass-card p-8 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Assistentes em Desenvolvimento
          </h2>
          <p className="text-gray-400 mb-6">
            Esta seção estará disponível em breve com assistentes especializados 
            para a parte autora.
          </p>
          <div className="flex justify-center">
            <div className="animate-pulse bg-purple-400/20 rounded-lg p-4">
              <Gavel size={32} className="text-purple-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorAutor;
