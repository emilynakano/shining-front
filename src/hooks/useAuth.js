import { createContext, useContext, useState } from 'react';
import api from '../services/api';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@shining:token');
    const user = localStorage.getItem('@shining:username');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user };
    }

    return {};
  });
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };

export async function signIn(user) {
  const promise = await api.post('sign-in', user);

  const { accessToken, username } = promise.data;

  localStorage.setItem('@shining:token', accessToken);
  localStorage.setItem('@shining:username', username);
}

export async function signUpAndLogin(user) {
  await api.post('sign-up', user);

  const userLogin = {
    email: user.email,
    password: user.password,
  };

  await signIn(userLogin);
}
