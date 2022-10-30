import styled from 'styled-components';
import { Title } from './FirstSection';

export default function ForgettingCurveSection() {
  return (
    <Container>
      <Title>
        <h1>Forgetting Curve</h1>
      </Title>
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
`;
