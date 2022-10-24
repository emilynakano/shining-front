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
              I came from the depths
              of my long rest just to reveal to
              you the secret of how to have an excellent memory!
              <Typist.Delay ms={1000} />
              {' '}
              This will provide you with a quality study
              and consequently a happier life.
              <Typist.Delay ms={1000} />
              <br />
              For that, we need to defeat an old and fearless villain...
              <Typist.Delay ms={1000} />
              <br />
              Are you ready for this adventure?
            </h2>

            <Typist.Delay ms={1000} />

            <br />
            <div className="buttons">
              <SuccessButton>
                Yes, let's destroy
                this monster!
              </SuccessButton>

              <Typist.Delay ms={1000} />

              <UnsuccessButton>
                No, go rest in peace, Ebbi
              </UnsuccessButton>
            </div>
          </Typist>

        </Container>
      </Modal.Body>
    </Modal>

  );
}

const Container = styled.div`
  min-height: 300px;
  h1 {
    font-family: 'Nabla', cursive;
    font-size: 35px;
  }
  h2 {
    font-family: 'Silkscreen', cursive;
    line-height: 20px;
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 20px;
  }
 
`;
const SuccessButton = styled.div`
  width: 170px;
  padding: 13px;
  border: none;
  border-radius: 20px;
  text-align: center;
  background-color: #138808;
  color: black;
  cursor: pointer;
`;
const UnsuccessButton = styled(SuccessButton)`
  background-color: #da2222;
`;
