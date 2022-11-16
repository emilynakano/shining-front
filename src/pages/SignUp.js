import { useState } from 'react';
import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Input from '../components/form/Input';
import Button from '../components/form/Button';
import Title from '../components/form/Title';
import Form from '../components/form';

import { useAuth } from '../hooks/useAuth';

export default function SignUp() {
  const { signUpAndLogin } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
    setLoading(true);
    try {
      await signUpAndLogin(user);
      toast.success('Account created successfully!');
      setTimeout(() => {
        navigate('/home');
      }, [3500]);
    } catch (error) {
      setLoading(false);
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
          data-cy="input-name"
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          required
          value={user.email}
          onChange={ChangeInput}
          data-cy="input-email"
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          required
          minLength={6}
          value={user.password}
          onChange={ChangeInput}
          data-cy="input-password"
        />
        <Input
          type="password"
          placeholder="Confirm your password"
          name="confirmPassword"
          required
          pattern={user.password}
          value={user.confirmPassword}
          onChange={ChangeInput}
          data-cy="input-confirm-password"
        />
        <Button text="Create Account" loading={loading} data-cy="button-submit" type="submit" />
        <h2>
          Already have an account?
          {' '}
          <span className="red" onClick={() => navigate('/sign-in')}>Sign in</span>
        </h2>
      </Form>
    </>

  );
}
