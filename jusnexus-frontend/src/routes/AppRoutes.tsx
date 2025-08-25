import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import AdminDashboard from '../pages/AdminDashboard';
import SectorReu from '../pages/SectorReu';
import SectorAutor from '../pages/SectorAutor';
import ProtectedRoute from './ProtectedRoute';
import AppLayout from '../layouts/AppLayout';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rotas Protegidas para Usuários Logados */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
          <Route path="/" element={<AppLayout><Dashboard /></AppLayout>} />
          <Route path="/setor/reu" element={<AppLayout><SectorReu /></AppLayout>} />
          <Route path="/setor/autor" element={<AppLayout><SectorAutor /></AppLayout>} />
        </Route>

        {/* Rotas Protegidas apenas para Admins */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/admin" element={<AppLayout><AdminDashboard /></AppLayout>} />
        </Route>

        {/* Rota Padrão */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
