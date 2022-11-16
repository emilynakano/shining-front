import { Navigate } from 'react-router-dom';
import HeaderUser from '../components/HeaderUser';
import { useAuth } from '../hooks/useAuth';

function PrivateRouter({ children }) {
  const { auth } = useAuth();
  return auth
    ? (
      <>
        <HeaderUser />
        {children}
      </>
    )
    : <Navigate to="/" replace />;
}

export default PrivateRouter;
