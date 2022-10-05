import api from '../services/api';

export async function signIn(user) {
  const promise = await api.post('sign-in', user);

  const { accessToken } = promise.data;

  localStorage.setItem('@shining:token', accessToken);
}

export async function signUpAndLogin(user) {
  await api.post('sign-up', user);

  const userLogin = {
    email: user.email,
    password: user.password,
  };

  await signIn(userLogin);
}
