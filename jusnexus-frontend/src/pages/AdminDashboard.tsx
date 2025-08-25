import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { LogOut, User, CheckCircle, Clock } from 'lucide-react';
import api from '../services/api';

interface PendingUser {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const [pendingUsers, setPendingUsers] = useState<PendingUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchPendingUsers = async () => {
    try {
      const response = await api.get('/admin/users/pending');
      setPendingUsers(response.data);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Erro ao carregar usuários pendentes');
    } finally {
      setLoading(false);
    }
  };

  const approveUser = async (userId: string) => {
    try {
      await api.patch(`/admin/users/${userId}/approve`);
      setPendingUsers(pendingUsers.filter(user => user.id !== userId));
    } catch (err: any) {
      setError(err.response?.data?.error || 'Erro ao aprovar usuário');
    }
  };

  useEffect(() => {
    fetchPendingUsers();
  }, []);

  return (
    <div className="min-h-screen bg-nexus-dark">
      {/* Header */}
      <header className="bg-nexus-secondary border-b border-nexus-purple/20 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-nexus-purple font-sans">JusNexus Admin</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-300">
              <User size={20} />
              <span>{user?.name}</span>
              <span className="bg-nexus-purple px-2 py-1 rounded text-xs font-semibold">
                ADMIN
              </span>
            </div>
            <a
              href="/dashboard"
              className="text-nexus-accent hover:text-nexus-accent/80 transition-colors"
            >
              Dashboard Principal
            </a>
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
          <h2 className="text-3xl font-bold text-gray-200 mb-2">Painel Administrativo</h2>
          <p className="text-gray-400">
            Gerencie aprovações de usuários e configurações do sistema
          </p>
        </div>

        {/* Pending Users Section */}
        <div className="bg-nexus-secondary rounded-lg border border-nexus-purple/20 p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Clock className="text-nexus-purple" size={24} />
            <h3 className="text-xl font-semibold text-nexus-purple">
              Usuários Aguardando Aprovação ({pendingUsers.length})
            </h3>
          </div>

          {loading && (
            <div className="text-center py-8">
              <div className="text-gray-400">Carregando usuários...</div>
            </div>
          )}

          {error && (
            <div className="text-red-400 text-center bg-red-900/20 p-4 rounded mb-4">
              {error}
            </div>
          )}

          {!loading && pendingUsers.length === 0 && (
            <div className="text-center py-8">
              <CheckCircle className="mx-auto text-nexus-green mb-4" size={48} />
              <div className="text-gray-400">
                Nenhum usuário pendente de aprovação no momento.
              </div>
            </div>
          )}

          {!loading && pendingUsers.length > 0 && (
            <div className="space-y-4">
              {pendingUsers.map((pendingUser) => (
                <div
                  key={pendingUser.id}
                  className="bg-nexus-primary p-4 rounded-lg border border-gray-600 flex justify-between items-center"
                >
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200">
                      {pendingUser.name}
                    </h4>
                    <p className="text-gray-400">{pendingUser.email}</p>
                    <p className="text-sm text-gray-500">
                      Solicitado em: {new Date(pendingUser.createdAt).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                  <button
                    onClick={() => approveUser(pendingUser.id)}
                    className="bg-nexus-green text-nexus-dark px-4 py-2 rounded hover:bg-nexus-green/90 transition-colors font-semibold"
                  >
                    Aprovar
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-nexus-secondary p-6 rounded-lg border border-nexus-accent/20">
            <h3 className="text-xl font-semibold text-nexus-accent mb-3">Sistema</h3>
            <p className="text-gray-400 mb-4">Status e configurações gerais</p>
            <div className="text-sm text-gray-500">
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="text-nexus-green">Online</span>
              </div>
            </div>
          </div>

          <div className="bg-nexus-secondary p-6 rounded-lg border border-nexus-purple/20">
            <h3 className="text-xl font-semibold text-nexus-purple mb-3">Usuários</h3>
            <p className="text-gray-400 mb-4">Gestão de usuários do sistema</p>
            <div className="text-sm text-gray-500">
              <div className="flex justify-between">
                <span>Pendentes:</span>
                <span className="text-nexus-purple">{pendingUsers.length}</span>
              </div>
            </div>
          </div>

          <div className="bg-nexus-secondary p-6 rounded-lg border border-nexus-green/20">
            <h3 className="text-xl font-semibold text-nexus-green mb-3">Logs</h3>
            <p className="text-gray-400 mb-4">Monitoramento e auditoria</p>
            <div className="text-sm text-gray-500">
              <div className="flex justify-between">
                <span>Último acesso:</span>
                <span className="text-nexus-green">Agora</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
