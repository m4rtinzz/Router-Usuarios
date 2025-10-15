import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bem-vindo ao seu painel!</p>
      <Outlet /> {/* Renderiza os componentes filhos aqui */}
    </div>);
}