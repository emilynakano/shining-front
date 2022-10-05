import { useState } from 'react';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';

export default function Note({ note }) {
  const [click, setClick] = useState(false);
  return (
    <>
      <Container onClick={() => (click ? setClick(false) : setClick(true))}>
        <h1>{note.title}</h1>
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
      {click ? <NoteContent content={note.content} /> : ''}
    </>

  );
}

function NoteContent({ content }) {
  return (
    <Content>
      <MDEditor.Markdown
        source={content}
        linkTarget="_blank"
      />
    </Content>
  );
}

const Content = styled.div`
    padding: 15px;
    background: white;
`;

const Row = styled.div`
    width: 100%;
    height: 1px;
    box-shadow: 0px 1px 1px rgba(253, 253, 253, 0.1);
  `;
const Container = styled.div`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    h1 {
    color: white;
    font-size: 13px;
    margin-top: 5px
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
