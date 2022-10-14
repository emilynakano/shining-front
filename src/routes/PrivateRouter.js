import HeaderUser from '../components/HeaderUser';
import { useAuth } from '../hooks/useAuth';

function PrivateRouter({ children }) {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <>
      <HeaderUser />
      {children}
    </>
  );
}

export default PrivateRouter;
