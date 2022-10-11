import { Vortex } from 'react-loader-spinner';
import styled from 'styled-components';

export default function Loading() {
  return (
    <Container>
      <Vortex
        visible
        height="70"
        width="70"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['black', 'black', 'black', 'black', 'black', 'red']}
      />
    </Container>
  );
}
const Container = styled.div`
   display: flex;
   width: 100%;
   height: calc(100vh - 60px);
   align-items:center;
   justify-content:center;
`;
