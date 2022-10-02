/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';
import styled from 'styled-components';
import HeaderUser from '../components/HeaderUser';

export default function CreateNote() {
  const [value, setValue] = useState('## Hello World!');

  return (
    <>
      <HeaderUser />
      <Container>
        <Editor>
          <h1>
            Create the note you won't forget!
          </h1>
          <MDEditor height="55vh" value={value} onChange={setValue} />
          <Submit>
            <Button>
              <span>Create</span>
            </Button>
          </Submit>
        </Editor>
      </Container>
    </>
  );
}
const Editor = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 18px;
 
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
const Button = styled.button`
  cursor: pointer;
  width: 120px;
  height: 25px;
  border: none;
  background: #FFFFFF;
  border-radius: 50px;
  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
  }
`;
const Container = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
