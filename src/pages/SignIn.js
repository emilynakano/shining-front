import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Input from '../components/form/Input';
import Button from '../components/form/Button';
import Form from '../components/form';
import { useAuth } from '../hooks/useAuth';
import Header from '../components/Header';
import Title from '../components/form/Title';

export default function SignIn() {
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  function ChangeInput(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  async function HandleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn(user);
      navigate('/home');
    } catch (error) {
      setLoading(false);
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
          data-cy="input-email"
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={ChangeInput}
          required
          data-cy="input-password"
        />
        <Button text="Log in" loading={loading} data-cy="button-submit" type="submit" />
        <h2>
          Don't have an account yet?
          {' '}
          <span className="red" onClick={() => navigate('/sign-up')}>Register</span>
        </h2>
      </Form>
    </>
  );
}
