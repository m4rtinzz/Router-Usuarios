import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: JSX.Element;
}

const ProtectedRoute = ({ isAuthenticated, children }: ProtectedRouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ message: 'Você precisa fazer login para acessar esta página.' }} />;
  }

  return children;
};

export default ProtectedRoute;
