import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';

export default function Header() {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <img onClick={() => navigate('/')} src={logo} alt="shinning" />
        <h1>You will never forget!</h1>
      </Main>
      <Row />
    </Container>
  );
}

const Container = styled.div`
  background:#100E0E;
`;

const Row = styled.div`
    height: 0px;
    border: 1px solid #FBF3F3;
`;

const Main = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    height: 85px;
    
    img {
        height: 50px;
        cursor: pointer;
    }

    h1 {
        color: white;
        font-weight: 700;
        font-size: 16px;
    }
`;
