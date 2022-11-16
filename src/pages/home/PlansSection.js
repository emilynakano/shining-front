import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Fade from 'react-reveal';
import Button from '../../components/form/Button';
import { Title as TitleStyle } from './FirstSection';

export default function PlansSection() {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>
        <Fade left>
          <h1>Choose your plan</h1>
        </Fade>
      </Title>
      <Plans>
        <Plan>
          <Text>
            <h1>Free</h1>
            <h1>R$ 00,00/mounth</h1>
            <h1>5 notes/day</h1>
          </Text>
          <div onClick={() => navigate('/sign-up', { state: { plan: 'free' } })}>
            <Button text="GET STARTED" />
          </div>
        </Plan>
        <Plan>
          <Text>
            <h1>Premium</h1>
            <h1>R$ 10,00/mounth</h1>
            <h1>Ilimited Notes</h1>
          </Text>
          <div onClick={() => navigate('/sign-up', { state: { plan: 'premium' } })}>
            <Button text="GET STARTED" />
          </div>
        </Plan>
      </Plans>
    </Container>
  );
}
const Container = styled.div`
    margin: 50px 0;
    display: flex;
    flex-direction:column;
    align-items:center;
`;

const Plans = styled.div`
    margin: 50px 0;
    display: flex;
    align-items:center;

    gap: 20px;
    @media(max-width: 600px) {
      flex-direction:column;
    }
`;

const Plan = styled.div`
  width: 250px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  opacity: 1;
  border: 2px solid #FFFFFF;

  padding: 15px;
`;

const Text = styled.div`
  text-align:center;
  display: flex;
  flex-direction:column;
  gap: 15px;
  h1 {
    color: white;
    font-size: 19px;
  }
`;

const Title = styled(TitleStyle)`
    text-align:center;
    h1 {
        color: white;
    }
`;
