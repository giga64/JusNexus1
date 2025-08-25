import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await api.post('/auth/login', { email, password });
      login(response.data.token);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-nexus-dark flex items-center justify-center">
      <div className="bg-nexus-secondary p-8 rounded-lg shadow-2xl w-full max-w-md border border-nexus-accent/20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-nexus-accent font-sans">JusNexus</h1>
          <p className="text-gray-400 mt-2">Sistema Jurídico do Futuro</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-nexus-primary border border-gray-600 rounded-lg focus:border-nexus-accent focus:outline-none text-gray-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-nexus-primary border border-gray-600 rounded-lg focus:border-nexus-accent focus:outline-none text-gray-200"
              required
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center bg-red-900/20 p-3 rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-nexus-accent text-nexus-dark py-3 rounded-lg font-semibold hover:bg-nexus-accent/90 transition-colors disabled:opacity-50"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Não tem uma conta?{' '}
            <Link to="/register" className="text-nexus-accent hover:text-nexus-accent/80">
              Cadastre-se aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
