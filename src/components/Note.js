import React, { useState } from 'react';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
import Fade from 'react-reveal/Fade';
import { FiTrash2 } from 'react-icons/fi';
import Delete from '../services/noteService';

export default function Note({ note, setModalIsOpen }) {
  const [click, setClick] = useState(false);
  const [deletedPost, setDeletedPost] = useState(-1);

  async function DeleteNote() {
    setModalIsOpen(true);
  }
  if (note.id === deletedPost) {
    return (
      <></>
    );
  }
  return (
    <>
      <Fade>
        <Container className="hover" onClick={() => (click ? setClick(false) : setClick(true))}>
          <Header>
            <Title>
              <h1>{note.title}</h1>
            </Title>
            <Icon>
              <FiTrash2 size={20} onClick={() => DeleteNote()} />
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
      <NoteContent click={click} content={note.content} />
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

function NoteContent({ content, click }) {
  return (
    <Fade opposite collapse when={click}>
      <Content data-color-mode="light">
        <MDEditor.Markdown
          source={content}
          linkTarget="_blank"
        />
      </Content>
    </Fade>
  );
}
