import styled from 'styled-components';

import Header from '../components/Header';
import Input from '../components/form/Input';
import Button from '../components/form/Button';
import Title from '../components/form/Title';
import Form from '../components/form';

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
          <Button type="submit">
            <span>Create Account</span>
          </Button>
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
