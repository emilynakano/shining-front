import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FcCalendar, FcKindle } from 'react-icons/fc';
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
        <Main>
          <Notes onClick={() => navigate('/notes')}>
            <FcKindle size={60} />
            <h2>NOTES</h2>
            <h2 className="description">
              See all your
              notes and create them.
            </h2>
          </Notes>
          <Today onClick={() => navigate('/notes/today')}>
            <FcCalendar size={60} />
            <h2>TODAY</h2>
            <h2 className="description">
              See all your notes that need
              to be reviewed today.
            </h2>
          </Today>
        </Main>
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
const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  @media(max-width:640px) {
    padding-bottom:20px;
    flex-direction: column;
  }
`;
const Notes = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:space-between;
  text-align:center;

  width: 300px;
  height: 200px;

  opacity: 0.8;
  border: 2px solid #FFFFFF;
  border-radius: 30px;
  padding: 20px;

  font-size: 20px;
  font-weight: 600;
  color: white;

  .description {
    font-weight: 400;
  }

  cursor: pointer;
  transition: border-color 0.4s;
  &:hover {
    border-color: rgba(179,45,45,0.66);
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

  margin-bottom: 20px;
`;
