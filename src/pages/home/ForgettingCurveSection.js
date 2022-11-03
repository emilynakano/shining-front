import styled from 'styled-components';
import { useState } from 'react';
import { Fade } from 'react-reveal';
import { Title as StyleTitle } from './FirstSection';
import Curve from '../../assets/images/curve.png';

export default function ForgettingCurveSection() {
  const [click, setClick] = useState(false);
  return (
    <Fade bottom>
      <Container>
        <Title>
          <h1>The Forgetting Curve</h1>
        </Title>
        <Fade bottom>
          <Main click={click}>
            <div className="back-face" onClick={() => setClick(!click)}>
              <img src={Curve} alt="curve" />
            </div>
            <div className="front-face" onClick={() => setClick(!click)}>
              <h2>
                The forgetting curve is the graphical representation of the
                relationship between retention of acquired information and time
                in which they remain in our memory. In this way, as
                revisions are made the knowledge is more likely not to be lost.
              </h2>
            </div>
          </Main>
        </Fade>
      </Container>
    </Fade>
  );
}
const Main = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  width: 100%;
  .back-face {
    cursor: pointer;
    max-width: 600px;
    width: 90%;
    max-height: 320px;
    img {
      width:100%;
    }
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    transform: rotateY(180deg);
    backface-visibility: hidden;
    transition: all 1s;
    transform-style: preserve-3d;

    transform: ${(props) => (props.click ? '' : 'rotateY(0deg)')}
  }
  .front-face {
    cursor: pointer;
    max-width: 600px;
    width: 80%;
    padding:0 65px;
    
    height: 320px;

    display: flex;
    justify-content: start;
    align-items: center;
    
    position: absolute;

    backface-visibility: hidden;
    transition: all 1s;
    transform-style: preserve-3d;

    transform: ${(props) => (props.click ? '' : 'rotateY(-180deg)')};
    h2 {
      font-family: Roboto;
      font-weight: 500;
      font-size: 23px;
      letter-spacing: 0.05em;
      font-weight: 700px;
      color: white;
      text-align: start;
    }

    @media (max-width: 600px) {
      padding:0px;
    }
    @media (max-width: 465px) {
      h2 {
        font-size: 17px;
      }
    }
  }
`;
const Title = styled(StyleTitle)`
 
  h1 {
    color:white;
  }
`;

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  text-align:center;
  gap:35px;
`;
