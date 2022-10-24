import Modal from 'react-bootstrap/Modal';
import Typist from 'react-typist-component';
import styled from 'styled-components';

export default function LetterEbbinghaus({ show, setShow }) {
  return (
    <Modal show={show} onHide={() => setShow(!show)}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Typist>
            Woohoo, you're reading this text in a modal!
          </Typist>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

const Container = styled.div`
`;
