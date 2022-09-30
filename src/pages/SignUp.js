/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import { toast } from 'react-toastify';

import Header from '../components/Header';
import Input from '../components/form/Input';
import Button from '../components/form/Button';
import Title from '../components/form/Title';
import Form from '../components/form';

export default function SignUp() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  function ChangeInput(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function HandleSubmit(e) {
    e.preventDefault();

    try {
      console.log('signup');
    } catch (error) {
      toast.error(
        'Invalid email, choose another one',
      );
    }
  }

  return (
    <>
      <Header />
      <Form onSubmit={HandleSubmit}>
        <Title>
          <h1>Create an account</h1>
        </Title>
        <Input
          type="text"
          placeholder="Name"
          name="name"
          required
          value={user.name}
          onChange={ChangeInput}
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          required
          value={user.email}
          onChange={ChangeInput}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          required
          minLength={6}
          value={user.password}
          onChange={ChangeInput}
        />
        <Input
          type="password"
          placeholder="Confirm your password"
          name="confirmPassword"
          required
          pattern={user.password}
          value={user.confirmPassword}
          onChange={ChangeInput}
        />
        <Button type="submit">
          <span>Create Account</span>
        </Button>
      </Form>
    </>

  );
}
