import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';
import styled from 'styled-components';
import HeaderUser from '../components/HeaderUser';

export default function CreateNote() {
  const [value, setValue] = useState('');
  return (
    <>
      <HeaderUser />
      <Container>

        <Editor>
          <MDEditor height="60vh" value={value} onChange={setValue} />
        </Editor>
      </Container>
    </>
  );
}
const Editor = styled.div`
  padding: 5%;
`;
const Container = styled.div`
`;
