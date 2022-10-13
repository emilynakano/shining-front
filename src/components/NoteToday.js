import React, { useState } from 'react';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
import Fade from 'react-reveal/Fade';
import { AiFillCheckCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';
import api from '../services/api';

export default function NoteToday({ note, atualization, setAtualization }) {
  const [click, setClick] = useState(false);
  return (
    <>
      <Fade>
        <Container className="hover" onClick={() => setClick(!click)}>
          <Title><h1>{note.title}</h1></Title>
        </Container>
      </Fade>
      <Row />
      <NoteContent
        atualization={atualization}
        setAtualization={setAtualization}
        note={note}
        setClick={setClick}
        click={click}
        content={note.content}
      />
    </>

  );
}

function NoteContent({
  setClick, content, click, note, atualization, setAtualization,
}) {
  const [review, setReview] = useState(false);
  function Review() {
    const promise = api.patch(`notes/${note.id}/review`, {});
    promise.then((res) => {
      toast.success('Note successfully revised!');
      setReview(!review);
      setTimeout(() => {
        setAtualization(!atualization);
        setReview(false);
        setClick(false);
      }, [2500]);
    });
    promise.catch((err) => {
      console.log('err');
    });
  }

  return (
    <Fade opposite collapse when={click}>
      <Content data-color-mode="light">
        <MDEditor.Markdown
          source={content}
          linkTarget="_blank"
        />
        <Icon review={review}>
          <AiFillCheckCircle onClick={() => Review()} className="icon" />
        </Icon>
      </Content>
    </Fade>
  );
}

const Content = styled.div`
    padding: 15px;
    background: white;
    border-radius: 5px;
    .icon {
      margin-top: 5px;
      font-size: 35px;
    }
`;

const Icon = styled.div`
    display:flex;
    flex-direction:column;
    align-items:end;
    .icon {
      cursor:pointer;
      color: ${(props) => (props.review ? 'green' : 'gray')};
      font-size: 35px;
      @keyframes go-back {
      from {
        transform: translateY(5px);
      }
      to {
        transform: translateY(15px);
      }
      }
      animation: go-back 1s infinite alternate;
    }
`;

const Title = styled.div`
  max-width:500px;
  padding-left: 20px;
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
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
    height:55px;
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
