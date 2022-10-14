import {
  createContext, useCallback, useContext, useState,
} from 'react';
import api from '../services/api';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState(() => {
    const accessToken = localStorage.getItem('@shining:token');
    const username = localStorage.getItem('@shining:username');

    if (accessToken && username) {
      api.defaults.headers.authorization = `Bearer ${accessToken}`;

      return { accessToken, username };
    }

    return {};
  });

  const signIn = useCallback(async (user) => {
    const promise = await api.post('sign-in', user);

    const { accessToken, username } = promise.data;

    localStorage.setItem('@shining:token', accessToken);
    localStorage.setItem('@shining:username', username);

    api.defaults.headers.authorization = `Bearer ${accessToken}`;

    setData({ accessToken, username });
  }, []);

  const auth = !!Object.keys(data).length;

  return (
    <AuthContext.Provider value={{ signIn, auth }}>
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

// export async function signIn(user) {
//  const promise = await api.post('sign-in', user);
//
//  const { accessToken, username } = promise.data;
//
//  localStorage.setItem('@shining:token', accessToken);
//  localStorage.setItem('@shining:username', username);
// }

// export async function signUpAndLogin(user) {
//  await api.post('sign-up', user);
//
//  const userLogin = {
//   email: user.email,
//   password: user.password,
//  };
//
// await signIn(userLogin);
// }
