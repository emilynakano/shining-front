import { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import styled from 'styled-components';
import CreditCardForm from './creditCardForm';

export default function Subscription() {
  const [openCard, setOpenCard] = useState(false);
  return (
    <Container>
      <h2>Payment</h2>
      <Box openCard={openCard}>
        <div onClick={() => setOpenCard(!openCard)}>
          <h2>Credit Card</h2>
          <AiOutlineRight color="white" size="50" />
        </div>
        <div>
          <CreditCardForm />
        </div>
      </Box>
    </Container>
  );
}

const Box = styled.div`
  width: 100%;
  max-width: 547px;
  margin-top: 10px;

  border: 2px solid #8F8383;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content:Center;

  > * {
        &:first-child {
          display: flex;
          align-items:Center;
          justify-content: space-between;
          height: 89px;
          cursor: pointer;
        }
      }
  > * {
        &:nth-child(2) {
          display: ${(props) => (props.openCard ? 'flex' : 'none')};
          flex-direction: column;
        }
      }
`;

const Container = styled.div`
    width: 85%;
    max-width: 545px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 20px;
    h2 {
      font-size: 23px;
      color: white;
    }
`;
