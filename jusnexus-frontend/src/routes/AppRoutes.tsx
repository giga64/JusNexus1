import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import AdminDashboard from '../pages/AdminDashboard';
import SectorReu from '../pages/SectorReu';
import SectorAutor from '../pages/SectorAutor';
import AssistantChat from '../pages/AssistantChat';
import ProtectedRoute from './ProtectedRoute';
import AppLayout from '../layouts/AppLayout';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rotas Protegidas com o Layout Padrão */}
        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/setor/reu" element={<SectorReu />} />
            <Route path="/setor/autor" element={<SectorAutor />} />
            <Route path="/assistant/:sector/:assistant" element={<AssistantChat />} />
          </Route>
        </Route>

        {/* Rotas de Admin */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
           <Route element={<AppLayout />}>
             <Route path="/admin" element={<AdminDashboard />} />
           </Route>
        </Route>

        {/* Rota Padrão */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
