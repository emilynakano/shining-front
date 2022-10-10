import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default function HeaderUser() {
  const navigate = useNavigate();
  return (
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
      </Main>
    </Container>

  );
}
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
