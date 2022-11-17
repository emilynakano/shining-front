import styled from 'styled-components';
import Header from '../components/Header';
import Subscription from '../components/plan/Subscription';
import { Title as TitleStyle } from './home/FirstSection';

export default function Plan() {
  return (
    <>
      <Header />
      <Container>
        <Title>
          <h1>You chose</h1>
        </Title>
        <PlanContent>
          <h2>Premium</h2>
          <h2>R$ 10.00/month</h2>
        </PlanContent>
        <ChangePlan>
          <h2>Change to free plan</h2>
        </ChangePlan>
        <Subscription />
      </Container>
    </>
  );
}
const Title = styled(TitleStyle)`
    margin-top: 50px;
    text-align:center;
    h1 {
        font-size: 36px;
        color: white;
    }
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;

    gap: 20px;

    h2 {
      font-weight: 800;
      font-size: 25px;
    }
`;

const ChangePlan = styled.div`
    width: 80%;
    max-width: 545px;
    display: flex;
    justify-content: end;
    h2 {
      cursor: pointer;
      font-size: 20px;
      color: white;
    }
`;

const PlanContent = styled.div`
    width: 80%;
    max-width: 545px;
    height: 98px;

    background: #B92C2C;
    border-radius: 0px 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 20px;

    h2 {
      color: black;
    }

    @media(max-width: 400px) {
      h2 {
        font-size: 20px;
      }
    }
   

`;
