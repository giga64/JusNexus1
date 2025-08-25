import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    setLoading(true);

    try {
      await api.post('/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      setSuccess('Cadastro realizado com sucesso! Aguardando aprovação do administrador.');
      setTimeout(() => navigate('/login'), 3000);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Erro ao fazer cadastro');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-nexus-dark flex items-center justify-center">
      <div className="bg-nexus-secondary p-8 rounded-lg shadow-2xl w-full max-w-md border border-nexus-accent/20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-nexus-accent font-sans">JusNexus</h1>
          <p className="text-gray-400 mt-2">Criar Nova Conta</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Nome Completo
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-nexus-primary border border-gray-600 rounded-lg focus:border-nexus-accent focus:outline-none text-gray-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-nexus-primary border border-gray-600 rounded-lg focus:border-nexus-accent focus:outline-none text-gray-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Confirmar Senha
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-nexus-primary border border-gray-600 rounded-lg focus:border-nexus-accent focus:outline-none text-gray-200"
              required
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center bg-red-900/20 p-3 rounded">
              {error}
            </div>
          )}

          {success && (
            <div className="text-green-400 text-sm text-center bg-green-900/20 p-3 rounded">
              {success}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-nexus-accent text-nexus-dark py-3 rounded-lg font-semibold hover:bg-nexus-accent/90 transition-colors disabled:opacity-50"
          >
            {loading ? 'Cadastrando...' : 'Criar Conta'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Já tem uma conta?{' '}
            <Link to="/login" className="text-nexus-accent hover:text-nexus-accent/80">
              Faça login aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
