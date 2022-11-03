import styled from 'styled-components';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import Wave from '../../components/Wave';
import ForgettingCurveSection from './ForgettingCurveSection';
import MotivationSection from './MotivationSection';

export default function Home() {
  return (
    <Container>
      <FirstSection />
      <SecondSection />
      <Wave />
      <ForgettingCurveSection />
      <MotivationSection />
    </Container>
  );
}
const Container = styled.div`
`;
