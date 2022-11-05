import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { useState } from 'react';
import logo from '../assets/images/logo.png';
import { useAuth } from '../hooks/useAuth';

export default function HeaderUser() {
  const { logout } = useAuth();
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <img onClick={() => navigate('/home')} src={logo} alt="shinning" />
        <Main>
          <h1
            className="notes"
            onClick={() => navigate('/notes')}
          >
            notes
          </h1>
          <h1
            className="today"
            onClick={() => navigate('/notes/today')}
          >
            today

          </h1>
          <Icon>
            <FiLogOut onClick={() => setClick(!click)} />
          </Icon>
        </Main>
      </Container>
      <Logout click={click} onClick={() => logout()}>
        <div>
          <h1>Logout</h1>
        </div>
      </Logout>

    </>

  );
}

const Logout = styled.div`
  cursor:pointer;
  width: 100%;
  display:flex;
  justify-content:end;
  position:fixed;
  h1 {
    font-size: 14px;
  }
  div {
    border-radius: 0 0 7px 7px;
    display:flex;
    align-items:center;
    justify-content:center;
    width: 70px;
    height: 40px;
    background:red;
  }
  transform: ${(props) => (props.click ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s ease-in;
`;

const Icon = styled.div`
  cursor:pointer;
  margin-left: 10px;
`;

const Main = styled.div`
    display: flex;
    gap: 10px;
    color:white;
    font-size:20px; 
    h1 {
      cursor:pointer;
    }   
    .notes:hover {
      text-shadow: 2px 2px  red;
    }
    .today:hover {
      text-shadow: 2px 2px  red;
    }
    transition: all .4s ease-in-out
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
    img {
        height: 40px;
        cursor:pointer;
    }
`;
