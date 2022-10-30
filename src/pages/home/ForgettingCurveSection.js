import styled from 'styled-components';
import { Title as StyleTitle } from './FirstSection';
import Curve from '../../assets/images/curve.png';

export default function ForgettingCurveSection() {
  return (
    <Container>
      <Title>
        <h1>The Forgetting Curve</h1>
      </Title>
      <img src={Curve} alt="curve" />
    </Container>
  );
}
const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  text-align:center;
  img {
    margin-top: 50px;
    width: 80%;
    max-width: 600px;
    cursor: pointer;
  }
`;
const Title = styled(StyleTitle)`
  h1 {
    color:white;
  }
`;
