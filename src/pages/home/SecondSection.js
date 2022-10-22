import styled from 'styled-components';
import { Title as StyleTitle, Description } from './FirstSection';

export default function SecondSection() {
  return (

    <Container>
      <Title>
        <h1>
          How will we do for
          you never forget?
        </h1>
      </Title>
    </Container>

  );
}
const Container = styled.div`
  background: #FFFFFF;
  height: 100vh;
  display: flex;
  justify-content:center;
  text-align:center;
  padding-top: 80px;
`;
const Title = styled(StyleTitle)`
  max-width: 500px;
  h1 {
    color:black;
  }
`;
