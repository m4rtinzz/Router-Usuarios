import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/dashboard/perfil">Perfil</Link></li>
          <li><Link to="/dashboard/configuracoes">Configurações</Link></li>
        </ul>
      </nav>
      <h1>Dashboard</h1>
      <Outlet /> {/* Renderiza os componentes filhos aqui */}
    </div>);
}