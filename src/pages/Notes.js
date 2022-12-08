import styled from 'styled-components';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { toast } from 'react-toastify';
import Note from '../components/note';
import CreateNote from '../components/note/CreateNote';
import Loading from '../components/Loading';
import DeleteModel from '../components/modals/DeleteModel';
import noteService from '../services/noteService';
import PlanWarn from '../components/modals/PlanWarn';

export default function Notes() {
  const [clickCreateNote, setClickCreateNote] = useState(false);
  const [clickNoteId, setClickNoteId] = useState(-1);

  const [notes, setNotes] = useState(false);
  const [atualization, setAtualization] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);
  const [modalPlanIsOpen, setModalPlanIsOpen] = useState(false);

  const { getNotes } = noteService();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getNotes();
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
    <>
      <Container onClick={() => (modalIsOpen ? setModalIsOpen(false) : '')}>
        <Title>
          <h2>NOTES</h2>
          <AiFillPlusCircle
            data-cy="button-add-note"
            color="#C50B0B"
            font-size={30}
            onClick={() => setClickCreateNote(!clickCreateNote)}
          />
        </Title>
        <CreateNote
          clickCreateNote={clickCreateNote}
          setClickCreateNote={setClickCreateNote}
          atualization={atualization}
          setAtualization={setAtualization}
          setModalPlanIsOpen={setModalPlanIsOpen}
        />
        <Row />

        {notes.length === 0
          ? (
            <Fade left cascade>
              <h2 className="zeroNotes">There are no notes yet, create one.</h2>
            </Fade>
          )
          : notes.map((note) => (

            <Note
              clickCreateNote={clickCreateNote}
              clickNoteId={clickNoteId}
              setClickNoteId={setClickNoteId}
              note={note}
              setModalIsOpen={setModalIsOpen}
              setNoteToDelete={setNoteToDelete}
              atualization={atualization}
              setAtualization={setAtualization}
            />

          ))}
      </Container>
      <DeleteModel
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        noteToDelete={noteToDelete}
        atualization={atualization}
        setAtualization={setAtualization}
      />
      <PlanWarn
        modalIsOpen={modalPlanIsOpen}
        setModalIsOpen={setModalPlanIsOpen}
      />
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
  gap: 2px;
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
