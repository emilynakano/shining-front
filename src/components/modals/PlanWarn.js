import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import noteService from '../../services/noteService';

const modalStyle = {
  content: {
    padding: '20px',
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
    overflowY: 'hidden',
    overflowX: 'hidden',
    border: 'none',
    gap: '20px',
  },
  overlay: {
    background: 'rgba(255, 255, 255, 0.1)',
  },
};

export default function PlanWarn({
  modalIsOpen, setModalIsOpen,
}) {
  const navigate = useNavigate();
  return (
    <Modal isOpen={modalIsOpen} style={modalStyle} closeTimeoutMS={500}>
      <ModalText>
        <h3>You have reached the maximum number of notes per day</h3>
        <h4>Would you like to subscribe to the premium plan for unlimited notes?</h4>
      </ModalText>
      <ModalButtons>
        <ModalCancelButton onClick={() => setModalIsOpen(false)}>
          No, go back
        </ModalCancelButton>
        <ModalDeleteButton onClick={() => {
          setModalIsOpen(false);
          navigate('/plan');
        }}
        >
          Yes, subscribe
        </ModalDeleteButton>
      </ModalButtons>
    </Modal>
  );
}

const ModalText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 27px;
    line-height: 35px;
    text-align: center;
    color: #FFFFFF;
    width: 100%;
    word-wrap: break-word;
    h4 {
        font-size: 18px;
        line-height: 30px;
    }
`;

const ModalDeleteButton = styled.button`
    background: #1877F2;
    border: none;
    border-radius: 10px;
    padding: 8px 15px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    width: 47%;
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
