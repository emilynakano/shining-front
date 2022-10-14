import { useAuth } from '../hooks/useAuth';

function PublicRouter({ children }) {
  const { auth } = useAuth();
  console.log(auth);
  return children;
}

export default PublicRouter;
