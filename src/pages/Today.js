import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import HeaderUser from '../components/HeaderUser';
import NoteToday from '../components/NoteToday';
import api from '../services/api';
import Loading from '../components/Loading';

export default function Today() {
  const navigate = useNavigate();

  const [notes, setNotes] = useState(false);
  const [atualization, setAtualization] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('@shining:token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = api.get('notes/today', config);
    promise.then((res) => setNotes(res.data));
    promise.catch((err) => {
      if (err.response.status === 401) {
        navigate('/sign-in');
      }
    });
  }, [atualization]);
  if (!notes) {
    return (
      <>
        <HeaderUser />
        <Loading />
      </>
    );
  }

  return (
    <>
      <HeaderUser />
      <Container>
        <Title>
          <h2>TODAY</h2>
        </Title>
        <Row />

        {notes.length === 0
          ? (
            <Fade left cascade>
              <h2 className="zeroNotes">There are no notes to review now.</h2>
            </Fade>
          )
          : notes.map((note) => (
            <Fade>
              <NoteToday
                atualization={atualization}
                setAtualization={setAtualization}
                note={note}
              />
            </Fade>

          ))}

      </Container>

    </>
  );
}
const Row = styled.div`
    width: 100%;
    height: 1px;
    box-shadow: 0px 1px 1px rgba(253, 253, 253, 0.1);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  h2 {
    font-weight: 700;
    color: white;
  }
  .zeroNotes {
    padding: 30px 0;
    color: red;
  }
`;
const Title = styled.div`
  width: 100%;
  margin-top: 5px;
  padding: 20px 0;
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
