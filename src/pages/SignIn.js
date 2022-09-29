import styled from 'styled-components';

import { useState } from 'react';
import Header from '../components/Header';
import Input from '../components/form/Input';
import Button from '../components/form/Button';
import Title from '../components/form/Title';
import Form from '../components/form';
import { signIn } from '../hooks/useAuth';

export default function SignIn() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  function ChangeInput(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function HandleSubmit(e) {
    e.preventDefault();

    try {
      await signIn(user);
    } catch (error) {
      console.log('error');
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Title>
          <h1>Log in</h1>
        </Title>
        <Form>
          <Input
            type="text"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={(e) => ChangeInput(e)}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={(e) => ChangeInput(e)}
          />
          <Button type="submit" onClick={(e) => HandleSubmit(e)}>
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
