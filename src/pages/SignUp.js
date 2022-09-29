import styled from 'styled-components';
import Header from '../components/Header';

export default function SignUp() {
  return (
    <>
      <Header />
      <Container>
        <Title>
          <h1>Create an account</h1>
        </Title>
        <Form>
          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm your password" />
          <Button type="submit"><span>Create Account</span></Button>
        </Form>
      </Container>
    </>

  );
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items:center;

  gap: 20px;

  margin-top: 50px;
`;

const Title = styled.form`
  width: 100%;
  max-width: 420px;
  h1 {
    color: white;
  }
`;

const Input = styled.input`
  background: none;
  width: 100%;
  margin-bottom: 15px;
  padding: 12px 16px;
  border-radius: 4px;
  border: 2px solid #ddd;
  font-size: 15px;
  color: white;
  height: 55px;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;
  max-width: 420px;

  display: block;
  background: white;
  color: black;
  border: 0;
  
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
  padding: 16px;
  font-weight: bold;
  font-size: 15px;
  transition: background-color 0.2s;
  height: 50px;

  &:hover {
    background-color: #FFE0E0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;
  max-width: 420px;
`;
