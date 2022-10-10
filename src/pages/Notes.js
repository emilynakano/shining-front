import styled from 'styled-components';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderUser from '../components/HeaderUser';
import api from '../services/api';
import Note from '../components/Note';
import CreateNote from '../components/CreateNote';

export default function Notes() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [notes, setNotes] = useState(false);
  const [atualization, setAtualization] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('@shining:token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = api.get('notes', config);
    promise.then((res) => setNotes(res.data));
    promise.catch((err) => {
      if (err.response.status === 401) {
        navigate('/sign-in');
      }
    });
  }, [atualization]);
  if (!notes) return <h1>loading</h1>;
  return (
    <>
      <HeaderUser />
      <Container>
        <Title>
          <h2>NOTES</h2>
          <AiFillPlusCircle
            data-cy="button-add-note"
            color="#C50B0B"
            font-size={30}
            onClick={() => setClick(!click)}
          />
        </Title>
        <CreateNote
          click={click}
          setClick={setClick}
          atualization={atualization}
          setAtualization={setAtualization}
        />
        <Row />
        {notes.length === 0
          ? <h2 className="zeroNotes">There are no notes yet, create one.</h2>
          : notes.map((note) => (
            <Note note={note} />
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
