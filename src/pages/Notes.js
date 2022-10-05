import styled from 'styled-components';
import { AiFillPlusCircle } from 'react-icons/ai';
import HeaderUser from '../components/HeaderUser';

export default function Notes() {
  return (
    <>
      <HeaderUser />
      <Container>
        <Title>
          <h2>NOTES</h2>
          <AiFillPlusCircle color="#C50B0B" font-size={30} />
        </Title>
        <Row />
        <h2 className="zeroNotes">There are no notes yet, create one.</h2>
        <Note>
          <h1>WHAT I LEARNED FROM SAPIENS’BOOK</h1>
          <DataNote>
            <Date>
              <h2>Date: 01/10/22</h2>
            </Date>
            <Progress>
              <h2>Progress: 01/04</h2>
            </Progress>
          </DataNote>
        </Note>
        <Row />
      </Container>
    </>
  );
}

const Row = styled.div`
    width: 100%;
    height: 1px;
    box-shadow: 0px 1px 1px rgba(253, 253, 253, 0.1);
`;

const Note = styled.div`
   padding: 20px 0;
   display: flex;
   flex-direction: column;
   gap: 10px;
   h1 {
    color: white;
    font-size: 13px;
    margin-top: 5px
   }
`;

const DataNote = styled.div`
   display: flex;
   gap: 14px;
`;

const Date = styled.div`
   h1 {
    color: white;
    font-size: 13px;
    margin-top: 5px
   }
`;

const Progress = styled.div`
   h1 {
    color: white;
    font-size: 13px;
    margin-top: 5px
   }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  h2 {
    font-weight: 700;
    color: white;
  }
  .zeroNotes {
    padding: 30px 0;
    color: red;
  }
`;
const Title = styled.div`
  width: 100%;
  margin-top: 5px;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
  h2 {
    font-weight: 700;
    font-size: 20px;
    color: white;
  }
`;
