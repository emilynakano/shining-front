/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';
import HeaderUser from '../components/HeaderUser';

export default function Notes() {
  return (
    <>
      <HeaderUser />
      <Container>
        notes
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
`;
