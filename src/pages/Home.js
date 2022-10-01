/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SmallHeader from '../components/SmallHeader';
import Balloon from '../assets/images/balloon.jpg';

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <SmallHeader />
      <Container>
        <Main>
          <Title>
            <h1 className="title">It's not a horror movie, but you'll never forget!</h1>
          </Title>
          <Description>
            <h1 className="description">
              Exercise your memory with a program
              entirely based on the studies of the
              psychologist Hermann Ebbinghaus.
            </h1>
          </Description>
          <SignUp onClick={() => navigate('/sign-up')}>
            <h1>Get Started</h1>
          </SignUp>
        </Main>

        <img src={Balloon} alt="balloon" />
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  
  img {
    margin-top: 40px;
    width: 60px;
  }
  @media (max-width: 400px) {
    img {
      width: 45px;
    }
  }
`;

const Main = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 20px;
  h1 {
    font-family: 'Roboto Mono';
    font-style: normal;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 465px) {
    margin-top: 20px;
    .title {
      line-height: 34px;
      font-size: 30px;
      letter-spacing: 0;
    }
    .description {
      font-size: 15px;
    }
  }
`;

const SignUp = styled.div`
  cursor: pointer;
  display:flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 35px;
  border-radius: 50px;
  background: #D9D9D9;
  h1 {
    text-align:center;
    color: black;
    font-weight: 700;
    font-size: 18px;
  }
`;
const Description = styled.div`
  width: 80%;
  max-width: 600px;
  h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: #FFFFFF;
  }
`;

const Title = styled.div`
  width: 80%;
  max-width: 700px;
  h1 {
    font-weight: 800;
    font-size: 45px;
    line-height: 50px;
    letter-spacing: 0.05em;
    color: #DA2222;
    mix-blend-mode: lighten;
  }
  
`;
