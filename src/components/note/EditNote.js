import { useState } from 'react';
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import TextEditor from '../TextEditor';
import noteService from '../../services/noteService';

export default function EditNote({
  edit, setEdit, note, setAtualization, atualization, setClickNoteId,
}) {
  const { editNote } = noteService();
  const [content, setContent] = useState(note.content);

  if (content !== note.content && !edit) {
    setContent(note.content);
  }

  async function HandleEdit() {
    try {
      await editNote({ id: note.id, content });
      setAtualization(!atualization);
      toast.success('Note edited successfully!');
      setClickNoteId(-1);
      setEdit(false);
    } catch (error) {
      if (error.response.status === 422) {
        return toast.error('Blank notes are not allowed!');
      }
      toast.error('An error occurred while deleting this note');
    }
  }
  return (
    <Fade>
      <ContentEdit>
        <TextEditor height="20vh" content={content} setContent={setContent} />
      </ContentEdit>
      <Button onClick={() => HandleEdit()}>
        <div>
          Update
        </div>
      </Button>
    </Fade>
  );
}

const ContentEdit = styled.div`
   
`;

const Button = styled.div`
  display: flex;
  justify-content: end;
  div {
    display: flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    width: 100px;
    height: 25px;
    border: none;
    background-color:#6baaf7; 
    border-radius: 50px 50px 0 50px;
    position:relative;
    z-index:12;
    margin-top: -26px;
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
  }
 
`;
