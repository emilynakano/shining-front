import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
import Fade from 'react-reveal/Fade';
import { FiTrash2, FiEdit3 } from 'react-icons/fi';
import disabledEventPropagation from '../utils/eventPropagation';
import TextEditor from './TextEditor';

export default function Note({
  note, setModalIsOpen, setNoteToDelete, clickCreateNote, clickNoteId, setClickNoteId,
}) {
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (clickCreateNote) {
      setClickNoteId(-1);
    }
  }, [clickCreateNote]);

  return (
    <>
      <Fade>
        <Container
          className="hover"
          onClick={() => {
            if (!clickCreateNote) {
              if (edit) {
                setEdit(false);
              }
              if (clickNoteId === note.id) {
                setClickNoteId(-1);
              } else setClickNoteId(note.id);
            }
          }}
        >
          <Header>
            <Title>
              <h1>{note.title}</h1>
            </Title>
            <Icon onClick={(e) => disabledEventPropagation(e)}>
              <FiEdit3
                className="edit"
                size={20}
                onClick={() => {
                  if (!clickCreateNote) {
                    if (clickNoteId === note.id && edit) {
                      setEdit(false);
                      setClickNoteId(-1);
                    }
                    if (clickNoteId === note.id && !edit) {
                      setEdit(true);
                    }
                    if (clickNoteId !== note.id && !edit) {
                      setClickNoteId(note.id);
                      setEdit(true);
                    }
                    if (clickNoteId !== note.id && edit) {
                      setClickNoteId(note.id);
                      setEdit(true);
                    }
                  }
                }}
              />
              <FiTrash2
                className="trash"
                size={20}
                onClick={(e) => {
                  setModalIsOpen(true);
                  setNoteToDelete(note.id);
                }}
              />
            </Icon>
          </Header>
          <DataNote>
            <Date>
              <h2>
                Date:
                <h1>{note.date}</h1>
              </h2>
            </Date>
            <Progress progress={note.progress}>
              <h2>
                Progress:
                <h1>
                  {note.progress}
                </h1>
              </h2>
            </Progress>
          </DataNote>
        </Container>
      </Fade>
      <Row />

      {clickNoteId === note.id && edit
        ? (
          <EditNote
            edit={edit}
            note={note}
          />

        )
        : (

          <NoteContent
            clickNoteId={clickNoteId}
            content={note.content}
            id={note.id}
            edit={edit}
          />
        )}

    </>

  );
}

const Content = styled.div`
  padding: 15px;
  background: white;
  border-radius: 5px;
`;

const Title = styled.div`
  white-space:nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Header = styled.div`
  display:flex;
  justify-content: space-between;
  gap: 10px;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  transition: color 0.2s;
  .trash {
    &:hover {
      color: red;
    }
  }
  .edit {
    &:hover {
      color: yellow;
    } 
  }

`;

const Row = styled.div`
    width: 100%;
    height: 1px;
    box-shadow: 0px 1px 1px rgba(253, 253, 253, 0.1);
  `;
const Container = styled.div` 
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    h1 {
    color: white;
    font-size: 13px;
    margin-top: 5px
    }
    &:hover {
    background-image: linear-gradient(90deg, #161212  0%, black 10%, #161212 80%);

    background-position: 100% 0;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
   }

`;

const DataNote = styled.div`
    display: flex;
    gap: 14px;
    h2 {
      display:flex;
      flex-direction:row;
      align-items:center;
      gap: 4px;
    }
`;

const Date = styled.div`
    h1 {
      color: ${(props) => (props.progress === 'lost' ? 'red' : '#60BFE6')};
    }
`;

const Progress = styled.div`
    h1 {
    color: ${(props) => (props.progress === 'lost' ? 'red' : '#2FDB2F')};
    }
`;

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

function NoteContent({
  content, clickNoteId, id, edit,
}) {
  return (
    <Fade opposite collapse when={clickNoteId === id && !edit}>

      <Content data-color-mode="light" con={clickNoteId === id && !edit}>
        <MDEditor.Markdown
          source={content}
          linkTarget="_blank"
          style={{ maxHeight: '350px', overflow: 'auto' }}
        />

      </Content>
    </Fade>

  );
}

function EditNote({
  edit, note,
}) {
  const [content, setContent] = useState(note.content);

  if (content !== note.content && !edit) {
    setContent(note.content);
  }
  function HandleEdit() {
    alert(content);
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
