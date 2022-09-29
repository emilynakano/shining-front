import styled from 'styled-components';

import Header from '../components/Header';
import Input from '../components/form/Input';
import Button from '../components/form/Button';
import Title from '../components/form/Title';
import Form from '../components/form';

export default function SignIn() {
  return (
    <>
      <Header />
      <Container>
        <Title>
          <h1>Log in</h1>
        </Title>
        <Form>
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button type="submit">
            <span>Log in</span>
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
