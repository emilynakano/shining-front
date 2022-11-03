import styled from 'styled-components';
import { Title as StyleTitle } from './FirstSection';

export default function MotivationSection() {
  return (
    <Container>
      <Title>
        <h1>Why choose Shining platform?</h1>
      </Title>
      <Row />
    </Container>
  );
}
const Container = styled.div`
  padding-top: 50px;
  background-color:white;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const Row = styled.div`
  margin: 18px 0;
  height: 1px;
  background-color:black;
  width: 80%;
  max-width: 600px;
`;

const Title = styled(StyleTitle)`
  max-width:600px;
  text-align:center;
  h1 {
    color: black;
  }
`;
