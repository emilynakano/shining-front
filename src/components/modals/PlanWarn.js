import Modal from 'react-modal';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import noteService from '../../services/noteService';

const modalStyle = {
  content: {
    padding: '28px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'black',
    borderRadius: '20px',
    maxWidth: '340px',
    height: '205px',
    overflowY: 'hidden',
    overflowX: 'hidden',
    border: 'none',
  },
  overlay: {
    background: 'rgba(255, 255, 255, 0.1)',
  },
};

export default function PlanWarn({
  modalIsOpen, setModalIsOpen,
}) {
  return (
    <Modal isOpen={modalIsOpen} style={modalStyle} closeTimeoutMS={500}>
      <ModalText>
        you reach the maximum number of notes per day,
        subscribe to the premium plan for unlimited notes
      </ModalText>
      <ModalButtons>
        <ModalCancelButton onClick={() => setModalIsOpen(false)}>
          No, go back
        </ModalCancelButton>
        <ModalDeleteButton onClick={() => setModalIsOpen(false)}>
          Yes, delete it
        </ModalDeleteButton>
      </ModalButtons>
    </Modal>
  );
}

const ModalText = styled.h3`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 27px;
    line-height: 41px;
    text-align: center;
    color: #FFFFFF;
    width: 100%;
    word-wrap: break-word;
`;

const ModalDeleteButton = styled.button`
    background: #1877F2;
    border: none;
    border-radius: 10px;
    padding: 8px 20px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
`;

const ModalCancelButton = styled(ModalDeleteButton)`
    background: #FFFFFF;
    color: #1877F2;
`;

const ModalButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
