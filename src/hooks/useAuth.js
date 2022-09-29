import api from '../services/api';

export async function signIn(user) {
  const promise = await api.post('sign-in', user);

  const { accessToken, refreshToken } = promise.data;

  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
}
