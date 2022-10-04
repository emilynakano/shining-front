import styled from 'styled-components';
import HeaderUser from '../components/HeaderUser';

export default function Notes() {
  return (
    <>
      <HeaderUser />
      <Container>
        <Title>
          <h2>NOTES</h2>
        </Title>
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  h2 {
    font-weight: 700;
    color: white;
  }
`;
const Title = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
  h2 {
    font-weight: 700;
    font-size: 20px;
    color: white;
  }
`;
