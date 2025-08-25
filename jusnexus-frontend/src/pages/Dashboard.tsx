import { useAuth } from '../context/AuthContext';
import { LogOut, User } from 'lucide-react';

const Dashboard = () => {
  const { user, logout, isAdmin } = useAuth();

  return (
    <div className="min-h-screen bg-nexus-dark">
      {/* Header */}
      <header className="bg-nexus-secondary border-b border-nexus-accent/20 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-nexus-accent font-sans">JusNexus</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-300">
              <User size={20} />
              <span>{user?.name}</span>
              {isAdmin && (
                <span className="bg-nexus-purple px-2 py-1 rounded text-xs font-semibold">
                  ADMIN
                </span>
              )}
            </div>
            <button
              onClick={logout}
              className="flex items-center space-x-2 text-gray-300 hover:text-nexus-accent transition-colors"
            >
              <LogOut size={20} />
              <span>Sair</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-2">
            Bem-vindo ao JusNexus, {user?.name}!
          </h2>
          <p className="text-gray-400">
            Sistema jurídico de nova geração - Sua conta foi aprovada e você já pode acessar todas as funcionalidades.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-nexus-secondary p-6 rounded-lg border border-nexus-accent/20">
            <h3 className="text-xl font-semibold text-nexus-accent mb-3">Processos</h3>
            <p className="text-gray-400 mb-4">Gerencie seus processos jurídicos</p>
            <button className="bg-nexus-accent text-nexus-dark px-4 py-2 rounded hover:bg-nexus-accent/90 transition-colors">
              Acessar
            </button>
          </div>

          <div className="bg-nexus-secondary p-6 rounded-lg border border-nexus-accent/20">
            <h3 className="text-xl font-semibold text-nexus-purple mb-3">Documentos</h3>
            <p className="text-gray-400 mb-4">Biblioteca de documentos jurídicos</p>
            <button className="bg-nexus-purple text-white px-4 py-2 rounded hover:bg-nexus-purple/90 transition-colors">
              Acessar
            </button>
          </div>

          <div className="bg-nexus-secondary p-6 rounded-lg border border-nexus-accent/20">
            <h3 className="text-xl font-semibold text-nexus-green mb-3">Relatórios</h3>
            <p className="text-gray-400 mb-4">Análises e relatórios detalhados</p>
            <button className="bg-nexus-green text-nexus-dark px-4 py-2 rounded hover:bg-nexus-green/90 transition-colors">
              Acessar
            </button>
          </div>
        </div>

        {isAdmin && (
          <div className="mt-8">
            <div className="bg-nexus-primary p-6 rounded-lg border border-nexus-purple/50">
              <h3 className="text-xl font-semibold text-nexus-purple mb-3">Painel Administrativo</h3>
              <p className="text-gray-400 mb-4">
                Gerencie usuários, aprovações e configurações do sistema
              </p>
              <a
                href="/admin"
                className="inline-block bg-nexus-purple text-white px-4 py-2 rounded hover:bg-nexus-purple/90 transition-colors"
              >
                Acessar Painel Admin
              </a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
