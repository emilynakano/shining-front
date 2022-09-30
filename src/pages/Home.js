/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';
import SmallHeader from '../components/SmallHeader';
import Balloon from '../assets/images/balloon.jpg';

export default function Home() {
  return (
    <>
      <SmallHeader />
      <Container>
        <Main>
          <div className="top">
            <h1>It's not a horror movie, but you'll never forget!</h1>
          </div>
          <div className="description">
            <h2>
              Exercise your memory with a program
              entirely based on the studies of the
              psychologist Hermann Ebbinghaus.
            </h2>
          </div>
          <div className="signUp">
            <h3>Get Started</h3>
          </div>
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
  @media (max-width: 465px) {
    img {
      width: 40px;
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
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 800;
    font-size: 45px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #DA2222;
    mix-blend-mode: lighten;
  }
  h2 {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
  }
  .top {
    width: 80%;
    max-width: 700px;
  }
  .description {
    width: 80%;
    max-width: 600px;
  }

  .signUp {
    display:flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 35px;
    
    border-radius: 50px;
    background: #D9D9D9;
    h3 {
      text-align:center;
      color: black;
      font-weight: 700;
      font-size: 13px;
    }
  }

  @media (max-width: 465px) {
    margin-top: 20px;
    h1 {
      line-height: 34px;
      font-size: 30px;
      letter-spacing: 0;
    }
    h2 {
      font-size: 15px;
    }
  }
`;
