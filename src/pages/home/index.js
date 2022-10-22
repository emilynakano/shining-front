import styled from 'styled-components';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import Wave from '../../components/Wave';

export default function Home() {
  return (
    <Container>
      <FirstSection />
      <SecondSection />
      <Wave />
    </Container>
  );
}
const Container = styled.div`

`;
