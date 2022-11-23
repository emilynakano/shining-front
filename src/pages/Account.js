import { useState } from 'react';
import styled from 'styled-components';
import { IoIosCheckmarkCircleOutline, IoIosCheckmarkCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Img from '../assets/images/ghost.png';
import { useAuth } from '../hooks/useAuth';

export default function Account() {
  const { data } = useAuth();
  const { username } = data;

  const [click, setClick] = useState('free');
  const navigate = useNavigate();
  return (
    <Container>
      <Profile>
        <img src={Img} alt="img" />
        <h1>{username}</h1>
      </Profile>
      <Main>
        <h2>Your Plan</h2>
        <Free onClick={() => setClick('free')}>
          {click === 'free' ? <IoIosCheckmarkCircle size="23px" color="white" /> : <IoIosCheckmarkCircleOutline size="23px" color="white" />}
          <h2>Free</h2>
        </Free>
        <Premium onClick={() => {
          setClick('premium');
          navigate('/plan');
        }}
        >
          {click === 'premium' ? <IoIosCheckmarkCircle size="23px" color="white" /> : <IoIosCheckmarkCircleOutline size="23px" color="white" />}
          <h2>Premium</h2>
        </Premium>
      </Main>
    </Container>
  );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;

    gap: 4%;

    padding: 50px 0;

    @media(max-width: 950px) {
        flex-direction: column;
        padding: 50px 20px;
    }
`;

const Profile = styled.div`
    background: black;
    border-radius: 20px;
    width: 24%;
    height: 300px;

    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-around;

    h1 {
        font-weight: 800;
        color: white;
    }

    img {
        width: 200px;
        height: 200px;
        border-radius: 100px;
        border: solid 5px white;
    }

    @media(max-width: 950px) {
        width: 100%;
    }
`;

const Main = styled.div`
    margin-top: 40px;
    background: black;
    width: 60%;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    gap: 20px;

    h2 {
        font-weight: 800;
        color: white;
        font-size: 26px;
    }

    @media(max-width: 950px) {
        width: 100%;
    }
`;

const Free = styled.div`
    width: 100%;
    border: solid 1px white;
    padding: 10px;
    display: flex;
    align-items:Center;
    gap: 15px;
    cursor:pointer;
    border-radius: 10px;
    h2 {
        font-size: 18px;
    }
`;

const Premium = styled(Free)`    
`;
