import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { LogOut, Shield } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <ParticleBackground />
      <header className="relative z-20 flex justify-between items-center p-4 border-b border-nexus-secondary/50 glass-card">
        <div className="cursor-pointer" onClick={() => navigate('/dashboard')}>
            <h1 className="text-2xl font-bold logo-gradient">JusNexus</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="font-bold text-white">{user?.name}</p>
            <p className="text-xs text-gray-400">{user?.email}</p>
          </div>
          {isAdmin && (
             <Button onClick={() => navigate('/admin')} size="icon" variant="ghost" className="text-nexus-accent hover:bg-nexus-secondary hover:text-nexus-accent">
                <Shield className="h-5 w-5" />
             </Button>
          )}
          <Button onClick={handleLogout} size="icon" variant="ghost" className="text-red-500 hover:bg-nexus-secondary hover:text-red-400">
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="relative z-10 flex-1 p-6 md:p-8">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
