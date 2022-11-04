import styled from 'styled-components';
import { FaFireAlt, FaClock, FaLightbulb } from 'react-icons/fa';
import { Title as StyleTitle } from './FirstSection';

export default function MotivationSection() {
  return (
    <Container>
      <Main>
        <Title>
          <h1>Why choose Shining platform?</h1>
        </Title>
        <Row />
        <Content>
          <FaFireAlt size={28} />
          <h1>
            The only platform focused on memorization based
            on Ebbinghaus theory.
          </h1>
        </Content>
        <Row />
        <Content>
          <FaLightbulb size={28} />
          <h1>
            Creation of Markdown-style notes for review, allowing
            for more complete editing.
          </h1>
        </Content>
        <Row />
        <Content>
          <FaClock size={40} />
          <h1>
            Combat the forgetting curve with periodic reviews
            (shortly after, one day, one week and one month later)
          </h1>
        </Content>
        <Row />
      </Main>
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

const Main = styled.div`
  width: 80%;
  max-width: 600px;

  display:flex;
  flex-direction:column;
  align-items:center;
`;

const Row = styled.div`
  width: 100%;
  margin: 18px 0;
  height: 1px;
  background-color:black;
`;

const Content = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items:center;
  @media(max-width:600px) {
    h1 {
      font-size: 14px;
    }
    padding: 0 5px;
  }
`;

const Title = styled(StyleTitle)`
  width: 100%;
  text-align:center;
  h1 {
    color: black;
  }
`;
