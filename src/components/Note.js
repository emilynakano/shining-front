import React, { useState } from 'react';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
import Fade from 'react-reveal/Fade';

export default function Note({ note }) {
  const [click, setClick] = useState(false);
  return (
    <>
      <Container className="hover" onClick={() => (click ? setClick(false) : setClick(true))}>
        <Title><h1>{note.title}</h1></Title>

        <DataNote>
          <Date>
            <h2>{`Date: ${note.date}`}</h2>
          </Date>
          <Progress>
            <h2>{`Progress: ${note.progress}`}</h2>
          </Progress>
        </DataNote>
      </Container>
      <Row />
      <NoteContent click={click} content={note.content} />
    </>

  );
}

function NoteContent({ content, click }) {
  return (
    <Fade left opposite collapse when={click}>
      <Content>
        <MDEditor.Markdown
          source={content}
          linkTarget="_blank"
        />
      </Content>
    </Fade>
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
`;

const Date = styled.div`
    h1 {
    color: white;
    font-size: 13px;
    margin-top: 5px
    }
`;

const Progress = styled.div`
    h1 {
    color: white;
    font-size: 13px;
    margin-top: 5px
    }
`;
