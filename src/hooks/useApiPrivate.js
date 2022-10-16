import { useEffect } from 'react';

import { useAuth } from './useAuth';

import api from '../services/api';

const useApiPrivate = () => {
  const { logout } = useAuth();

  useEffect(() => {
    const responseIntercept = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error?.response?.status === 401) {
          logout();
        }
        return Promise.reject(error);
      },
    );

    return () => {
      api.interceptors.response.eject(responseIntercept);
    };
  }, []);

  return api;
};

export default useApiPrivate;
