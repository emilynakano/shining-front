import styled from 'styled-components';
import HeaderUser from '../components/HeaderUser';

export default function UserHome() {
  return (
    <>
      <HeaderUser />
      <Container>
        <Text>
          <h2>Welcome, Emily!</h2>
          <h2>Choose one of the options.</h2>
        </Text>
      </Container>
    </>
  );
}
const Container = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 420px;

  gap: 10px;

  font-size: 25px;
  font-weight: 700;
  color: white;
`;
