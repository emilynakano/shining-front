import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default function HeaderUser() {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={logo} alt="shinning" />
    </Container>

  );
}
const Auth = styled.div`
    display: flex;
    gap: 10px;
`;

const SignIn = styled.div`
    cursor: pointer;
    background: none;
    mix-blend-mode: exclusion;
    border: 2px solid #D9D9D9;
    h1 {
        color: white;
    }
    display:flex;
    align-items: center;
    justify-content: center;
    width: 121px;
    height: 35px;
    
    border-radius: 50px;
  
`;

const SignUp = styled(SignIn)`
  border:none;
  background: #D9D9D9;
  h1 {
    text-align:center;
    color: black;
    font-weight: 700;
    font-size: 13px;
  }
  @media (max-width: 465px) {
    display: none
  }
      
`;

const Container = styled.div`
    background: #100E0E;
    display: flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding: 0 20px;
    height: 60px;
    box-shadow: 0px 1px 1px rgba(253, 253, 253, 0.1);
    
    .color {
        transition: border-color 0.4s;
        &:hover {
            border-color: #DA2222;
            h1 {
                color: #DA2222;
            }
        }
    }

    .background {
        transition: background-color 0.4s;
        &:hover {
            background-color: #DA2222;
        }
    }

    img {
        height: 40px;
    }
`;
