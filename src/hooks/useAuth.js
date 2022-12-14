import {
  createContext, useCallback, useContext, useState,
} from 'react';
import api from '../services/api';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState(() => {
    const accessToken = localStorage.getItem('@shining:token');
    const username = localStorage.getItem('@shining:username');
    const plan = localStorage.getItem('@shining:plan');

    if (accessToken && username) {
      api.defaults.headers.authorization = `Bearer ${accessToken}`;

      return { accessToken, username, plan };
    }

    return {};
  });

  const signIn = useCallback(async (user) => {
    const promise = await api.post('sign-in', user);

    const { accessToken, username, plan } = promise.data;

    localStorage.setItem('@shining:token', accessToken);
    localStorage.setItem('@shining:username', username);
    localStorage.setItem('@shining:plan', plan);

    api.defaults.headers.authorization = `Bearer ${accessToken}`;

    setData({ accessToken, username, plan });
  }, []);

  const signUpAndLogin = useCallback(async (user) => {
    await api.post('sign-up', user);

    const userLogin = {
      email: user.email,
      password: user.password,
    };

    await signIn(userLogin);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('@shining:token');
    localStorage.removeItem('@shining:username');

    setData({});
  }, []);

  const getPremiumAccount = useCallback(async () => {
    localStorage.setItem('@shining:plan', 'PREMIUM');

    setData({ ...data, plan: 'PREMIUM' });
  }, [data]);

  const getFreeAccount = useCallback(async () => {
    localStorage.setItem('@shining:plan', 'FREE');

    setData({ ...data, plan: 'FREE' });
  }, [data]);

  const auth = !!Object.keys(data).length;

  return (
    <AuthContext.Provider value={{
      signIn, signUpAndLogin, auth, logout, data, getPremiumAccount, getFreeAccount,
    }}
    >
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
