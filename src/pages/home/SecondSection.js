import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { Title as StyleTitle, Description as StyleDescription } from './FirstSection';
import Hermann from '../../assets/images/Hermann.jpg';

export default function SecondSection() {
  return (
    <Container>
      <Main>
        <Title>
          <Fade left cascade>
            <div>
              <h1>

                How will we do for
                you never forget?

              </h1>
            </div>
          </Fade>
        </Title>
        <Description>
          <Fade bottom cascade>
            <div>
              <h1>
                That question who will answer
                will be nothing more, nothing
                less than the great scholar in
                the area of human memory, he left
                you a letter! Check out what Ebbinghaus
                has to say!
              </h1>
            </div>
          </Fade>
        </Description>
      </Main>
      <Fade right>
        <LogoHermann>
          <img src={Hermann} alt="herman" />
        </LogoHermann>
      </Fade>
    </Container>
  );
}

const Container = styled.div`
  background: #FFFFFF;

  display: flex;
  flex-direction: row;
  justify-content:center;
  padding-top: 80px;

  @media (max-width: 760px) {
    flex-direction: column;
    align-items:center;
    gap: 25px;
  }
`;
const Main = styled.div`
  max-width: 520px;

  display: flex;
  flex-direction: column;
  align-items:center;
  text-align:center;
  justify-content: space-around;
  max-height: 310px;

  @media (max-width: 760px) { 
    gap: 20px;
  }
`;
const Title = styled(StyleTitle)`
  h1 {
    color:black;
  }

`;
const Description = styled(StyleDescription)`
  h1 {
    color:black;
  }

`;
const LogoHermann = styled.div`
  cursor: pointer;
  img {
    width: 300px;
    height: 340px;
    margin-right: 25px;

    @keyframes go-back {
      from {
        transform: translatex(-5px);
      }
      to {
        transform: translatex(0px) rotate(2deg);    
      }
    }
    animation: go-back 0.5s infinite alternate;
  }

  @media (max-width: 760px) { 
    img {
      width: 260px;
      height: 300px;
      margin-right: 0px;
    }
  }
  
`;
