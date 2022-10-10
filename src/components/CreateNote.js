import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function CreateNote({
  click, setClick, setAtualization, atualization,
}) {
  const mkString = `### Your title here
  
  Lorem ipsum, or lipsum as it is sometimes known. 
  `;
  const [value, setValue] = useState(mkString);

  function getTitle(str) {
    const stringArray = str.split('\n');
    let title = '';
    if (stringArray[0][0] !== '#') {
      return '';
    }
    for (let i = 0; i < stringArray[0].length; i++) {
      if (stringArray[0][i] !== '#') {
        title += stringArray[0][i];
      }
    }
    return title;
  }
  function createNote() {
    const title = getTitle(value);
    if (title === '') {
      return toast.error('Insert a correct title!');
    }
    setValue(mkString);
    const token = localStorage.getItem('@shining:token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = api.post('notes', { content: value, title }, config);
    promise.then((res) => {
      setAtualization(!atualization);
      toast.success('Note created successfully!');
      setClick(false);
    });
    promise.catch((err) => {
      if (err.response.status === 409) {
        toast.error('You already have a note with this title!');
      }
    });
  }

  return (
    <Fade left opposite collapse when={click}>
      <Editor data-color-mode="light">
        <MDEditor height="55vh" value={value} onChange={setValue} />
        <Submit>
          <Button onClick={() => createNote()}>
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
  height: 55vh;
  background-color:red;
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
  background: #4FB5F7;
  border-radius: 50px 50px 0 50px;
  position:relative;
  z-index:12;
  margin-top: -26px;

  @keyframes go-back {
  from {
    transform: translateY(-3px);
  }
  to {
    transform: translateY(0);
  }
  }
  animation: go-back 1s infinite alternate;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
  }
`;
