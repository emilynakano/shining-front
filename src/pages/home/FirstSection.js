import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import SmallHeader from '../../components/SmallHeader';
import Balloon from '../../assets/images/balloon.jpg';

export default function FirstSection() {
  const navigate = useNavigate();
  return (
    <>
      <SmallHeader />
      <Zoom left>
        <Container>
          <Main>
            <Title>
              <h1>It's not a horror movie, but you'll never forget!</h1>
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
      </Zoom>
    </>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: space-around;
  height: calc(100vh - 60px);
  
  img {
    margin-top: 40px;
    width: 60px;
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

`;

const SignUp = styled.div`
  margin-top: 10px;
  cursor: pointer;
  display:flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 35px;
  border-radius: 50px;
  background: #D9D9D9;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 10px 9px 37px 6px rgba(179,45,45,0.66);
  }
  h1 {
    text-align:center;
    color: black;
    font-weight: 700;
    font-size: 18px;
  }
`;
const Description = styled.div`
  width: 80%;
  max-width: 500px;
  h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
  }
  @media (max-width: 465px) {
    h1 {
      font-size: 15px;
    }
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
  @media (max-width: 465px) {
    h1 {
      line-height: 34px;
      font-size: 30px;
      letter-spacing: 0;
    }
  }
`;
