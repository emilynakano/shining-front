import HeaderUser from '../components/HeaderUser';

function PrivateRouter({ children }) {
  return (
    <>
      <HeaderUser />
      {children}
    </>
  );
}

export default PrivateRouter;
