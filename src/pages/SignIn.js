import { useState } from 'react';
import { toast } from 'react-toastify';
import Input from '../components/form/Input';
import Button from '../components/form/Button';
import Form from '../components/form';
import { signIn } from '../hooks/useAuth';
import Header from '../components/Header';
import Title from '../components/form/Title';

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
      toast.error(
        'Invalid email or password, check your credentials',
      );
    }
  }
  return (
    <>
      <Header />

      <Form onSubmit={HandleSubmit}>
        <Title>
          <h1>Log in</h1>
        </Title>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={ChangeInput}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={ChangeInput}
          required
        />
        <Button type="submit">
          <span>Log in</span>
        </Button>
      </Form>
    </>

  );
}
