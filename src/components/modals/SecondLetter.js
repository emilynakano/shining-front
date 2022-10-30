import Modal from 'react-bootstrap/Modal';
import Typist from 'react-typist-component';
import styled from 'styled-components';

export default function SecondLetter({ show, setShow }) {
  return (
    <Modal centered show={show} onHide={() => setShow(!show)}>
      <Modal.Header closeButton />
      <Modal.Body>
        <Container>
          <Typist typingDelay={70}>
            <h1>
              Dear Courageous Person.
            </h1>
            <Typist.Delay ms={1000} />
            <br />
            <br />
            <h2>
              I am very happy that you accepted this challenge!
              <Typist.Delay ms={1000} />
              <br />
              Now, without further ado, the monster you must fight is the forgetting curve!
              <Typist.Delay ms={1000} />
              {' '}
              Look what a scary situation, it makes you forget 80% of what you learned in just
              one month!
              <Typist.Delay ms={1000} />
              <br />
              Your mission is not to let her ruin your life anymore.
              <Typist.Delay ms={1000} />
              {' '}
              To do this is simple, you just need to do 4 revisions, and this platform
              called Shining will help you in this whole fight!
              <Typist.Delay ms={2000} />
              <br />
              <br />
              P.S: How I wish there was an app like this in my time, rip :(
            </h2>
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
