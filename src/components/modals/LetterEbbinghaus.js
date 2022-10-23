import Modal from 'react-bootstrap/Modal';

export default function LetterEbbinghaus({ show, setShow }) {
  return (
    <Modal show={show} onHide={() => setShow(!show)}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    </Modal>
  );
}
