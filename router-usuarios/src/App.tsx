import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import NaoEncontrada from './pages/NaoEncontrada'
import Usuario from './pages/Usuario'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Perfil from './pages/dashboard/Perfil'
import Configuracoes from './pages/dashboard/Configuracoes'
import ProtectedRoute from './components/ProtectedRoute'

interface NavigationProps {
  isAuthenticated: boolean;
  logout: () => void;
}

const Navigation = ({ isAuthenticated, logout }: NavigationProps) => {
  return (
    <nav className="nav">
      <ul>
        {isAuthenticated ? (
          <>
            <li><Link to="/dashboard/perfil">Perfil</Link></li>
            <li><Link to="/dashboard/configuracoes">Configurações</Link></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); logout(); }}>Sair</a></li>
          </>
        ) : (
          <>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/contato">Contato</Link></li>
            <li><Link to="/login/">Entrar</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

function AppContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/login');
    return alert('Faça seu login para acessar o dashboard.');
  };

  return (
    <>
      <Navigation isAuthenticated={isAuthenticated} logout={handleLogout} />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/usuario/:id" element={<Usuario />} />
        <Route path="/login" element={<Login onLoginSuccess={handleLogin} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          }>
          <Route path="perfil" element={<Perfil />} />
          <Route path="configuracoes" element={<Configuracoes />} />
        </Route>
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </>
  )
}

function App() {
  return (
  <Router>
    <AppContent />
  </Router>
  )
}

export default App;