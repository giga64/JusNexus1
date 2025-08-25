import { ReactNode } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { LogOut, Shield } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

interface AppLayoutProps {
  children?: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <ParticleBackground />
      <header className="relative z-20 flex justify-between items-center p-4 border-b border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="cursor-pointer" onClick={() => navigate('/dashboard')}>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">JusNexus</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="font-medium text-white">{user?.name}</p>
            <p className="text-xs text-gray-400">{user?.email}</p>
          </div>
          {isAdmin && (
             <Button onClick={() => navigate('/admin')} size="icon" variant="ghost" className="text-blue-400 hover:bg-white/10 hover:text-blue-300">
                <Shield className="h-5 w-5" />
             </Button>
          )}
          <Button onClick={handleLogout} size="icon" variant="ghost" className="text-gray-400 hover:bg-red-500/10 hover:text-red-400">
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="relative z-10 flex-1 p-6 md:p-8">
        {children || <Outlet />}
      </main>
    </div>
  );
};

export default AppLayout;
