import { useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { toast } from 'react-toastify';
import api from '../../services/api';
import TextEditor from '../TextEditor';

export default function CreateNote({
  clickCreateNote, setClickCreateNote, setAtualization, atualization, setModalPlanIsOpen,
}) {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  function createNote() {
    if (title === '') {
      return toast.error('Insert a title!');
    }
    if (content === '') {
      return toast.error('Insert something!');
    }

    const promise = api.post('notes', { content, title });
    promise.then((res) => {
      setContent('');
      setTitle('');
      setAtualization(!atualization);
      toast.success('Note created successfully!');
      setClickCreateNote(false);
    });
    promise.catch((err) => {
      if (err.response.status === 409) {
        toast.error('You already have a note with this title!');
      }
      if (err.response.status === 400) {
        setClickCreateNote(false);
        setModalPlanIsOpen(true);
      }
    });
  }

  return (
    <Fade opposite collapse when={clickCreateNote}>
      <Editor data-color-mode="light">
        <Title>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
        </Title>
        <TextEditor height="50vh" setContent={setContent} content={content} />
        <Submit>
          <Button data-cy="button-submit" onClick={() => createNote()}>
            <span>Create</span>
          </Button>
        </Submit>
      </Editor>
    </Fade>
  );
}
const Editor = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    color: white;
  }
`;
const Submit = styled.div`
  display: flex;
  justify-content: end;
`;
const Title = styled.div`
  display: flex;
  justify-content: start;
`;
const Input = styled.input`
  border-radius: 15px 15px 0 0;
  font-size:16px; 
  border-color:#cccccc; 
  padding: 10px; 
  padding-bottom: 5px;
  border-style:hidden; 
  background-color:#6baaf7; 
  color:black;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px; 
  width: 100%;

  &::placeholder {
    color:black;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
  }

  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;
const Button = styled.button`
  cursor: pointer;
  width: 100px;
  height: 30px;
  border: none;
  background-color:#6baaf7; 
  border-radius: 50px 50px 0 50px;
  z-index:12;
  margin-top: -32px;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
  }
`;
