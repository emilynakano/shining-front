import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HeaderUser from '../components/HeaderUser';

export default function UserHome() {
  const username = localStorage.getItem('@shining:username');
  const navigate = useNavigate();
  return (
    <>
      <HeaderUser />
      <Container>
        <Text>
          <h2>
            Welcome,
            {' '}
            {username}
            !
          </h2>
          <h2>Choose one of the options.</h2>
        </Text>
        <Notes onClick={() => navigate('/notes')}>
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
  border-radius: 10px;

  padding: 20px;

  font-size: 20px;
  font-weight: 600;
  color: black;

  .description {
    font-weight: 400;
  }

  cursor: pointer;
  transition: box-shadow 0.4s;
  &:hover {
    box-shadow: 10px 9px 37px 6px rgba(179,45,45,0.66);
  }

  @media(max-width:420px) {
    border-radius:0px;
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

  margin-bottom: 10px;
`;
