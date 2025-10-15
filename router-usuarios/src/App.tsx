import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import NaoEncontrada from './pages/NaoEncontrada'
import Usuario from './pages/Usuario'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Perfil from './pages/dashboard/Perfil'
import Configuracoes from './pages/dashboard/Configuracoes'

function App() {
  return (
    <>
    <Router>
      <>
      <nav className="nav">
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li><Link to="/login/">Entrar</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/usuario/:id" element={<Usuario />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="perfil" element={<Perfil />} />
          <Route path="configuracoes" element={<Configuracoes />} />
        </Route>
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      </>
    </Router>
    </>
  )
}
export default App