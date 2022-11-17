import { AiOutlineRight } from 'react-icons/ai';
import styled from 'styled-components';
import CreditCardForm from './creditCardForm';

export default function Subscription() {
  return (
    <Container>
      <h2>To sign</h2>
      <Box>
        <h2>Monthly signature</h2>
        <h2>R$ 10.00/month</h2>
        <div className="creditCard">
          <div>
            <h2>Credit Card</h2>
            <AiOutlineRight color="white" size="50" />
          </div>
          <div>
            <CreditCardForm />
          </div>
        </div>
      </Box>
    </Container>
  );
}

const Box = styled.div`
    width: 100%;
    max-width: 547px;

    mix-blend-mode: normal;
    border: 3px solid #FFFFFF;

    padding: 20px;
    
    display: flex;
    flex-direction: column;
    gap: 10px;

    .creditCard {
      cursor: pointer;

      width: 100%;
      margin-top: 10px;

      border: 2px solid #8F8383;
      padding-left: 10px;

      display: flex;
      flex-direction: column;
      justify-content:Center;

      > * {
            &:first-child {
                display: flex;
                align-items:Center;
                justify-content: space-between;
                height: 89px;
            }
        }
        > * {
            &:nth-child(2) {
                display: flex;
                flex-direction: column;
            }
        }
    }
`;

const Container = styled.div`
    width: 80%;
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
