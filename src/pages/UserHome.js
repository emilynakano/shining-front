import styled from 'styled-components';
import HeaderUser from '../components/HeaderUser';

export default function UserHome() {
  return (
    <>
      <HeaderUser />
      <Container>
        <Text>
          <h2>Welcome, Emily!</h2>
          <h2>Choose one of the options.</h2>
        </Text>
        <Notes>
          <h2>NOTES</h2>
          <h2 className="description">
            Here you can see all your
            notes and create them.
          </h2>
        </Notes>
        <Today>
          <h2>TODAY</h2>
          <h2 className="description">
            Here you see all your notes that need
            to be reviewed today
          </h2>
        </Today>
      </Container>
    </>
  );
}
const Container = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
`;
const Notes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  max-width: 420px;

  background: #D9D9D9;
  border-radius: 30px;

  padding: 20px;

  font-size: 20px;
  font-weight: 600;
  color: black;

  word-break: break-word;
  .description {
    font-weight: 400;
  }
`;

const Today = styled(Notes)`
  
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 420px;

  gap: 10px;

  font-size: 25px;
  font-weight: 700;
  color: white;
`;
