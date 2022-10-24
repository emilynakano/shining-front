import Modal from 'react-bootstrap/Modal';
import Typist from 'react-typist-component';
import styled from 'styled-components';

export default function LetterEbbinghaus({ show, setShow }) {
  return (
    <Modal centered show={show} onHide={() => setShow(!show)}>
      <Modal.Header closeButton />
      <Modal.Body>
        <Container>
          <Typist typingDelay={70}>
            <h1>
              Dear unforgettable person
            </h1>
            <br />
            <br />
            <h2>
              I came from the depths of my long rest just to reveal to
              you the secret of how to have an excellent memory to provide
              you with a quality study and consequently a happier life.
              For that, we need to defeat an old and fearless villain...
              are you ready for this adventure?
            </h2>
          </Typist>
        </Container>
      </Modal.Body>
    </Modal>

  );
}

const Container = styled.div`
  h1 {
    font-family: 'Nabla', cursive;
    font-size: 35px;
  }
  h2 {
    font-family: 'Silkscreen', cursive;

  }
`;
