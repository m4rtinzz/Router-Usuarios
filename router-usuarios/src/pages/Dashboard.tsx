import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet /> {/* Renderiza os componentes filhos aqui */}
    </div>);
}