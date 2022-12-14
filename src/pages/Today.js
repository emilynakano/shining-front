import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { toast } from 'react-toastify';
import NoteToday from '../components/NoteToday';
import Loading from '../components/Loading';
import noteService from '../services/noteService';

export default function Today() {
  const [notes, setNotes] = useState(false);
  const [atualization, setAtualization] = useState(false);

  const { getTodayNotes } = noteService();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getTodayNotes();
        setNotes(response);
      } catch (err) {
        console.log(err);
        toast.error('An error occurred while loading the notes');
      }
    }
    fetchData();
  }, [atualization]);
  if (!notes) {
    return (
      <Loading />
    );
  }

  return (
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
          <NoteToday
            atualization={atualization}
            setAtualization={setAtualization}
            note={note}
          />
        ))}

    </Container>
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
