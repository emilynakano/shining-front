import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function PublicRouter({ children }) {
  const { auth } = useAuth();
  return auth
    ? (
      <Navigate to="/home" replace />
    )
    : children;
}

export default PublicRouter;
