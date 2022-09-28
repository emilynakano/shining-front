import styled from 'styled-components';
import logo from '../assets/images/logo.png';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="" srcSet="" />
      <h1>You will never forget!</h1>
    </Container>

  );
}

const Container = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    height: 100px;
    
    img {
        height: 50px;
    }
`;
