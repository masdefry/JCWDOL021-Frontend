'use client';
import { authStore } from '@/store/auth.store';
import axios from 'axios';
import { ReactNode, useEffect } from 'react';

interface ISessionAuthProviderProps {
  children: ReactNode;
}

export default function SessionAuthProvider({
  children,
}: ISessionAuthProviderProps) {
  const { userId, setAuth } = authStore();

  const onSessionLoginUser = async (userId: string) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/users/authentication/${userId}`
      );
      console.log(response?.data?.user);
      setAuth({
        email: response?.data?.user?.email, 
        username: response?.data?.user?.username, 
        role: response?.data?.user?.role, 
        userId: response?.data?.user?.userId
      })
    } catch (error) {
      console.log(error);
    }
  };

  //   ComponentDidUpdate
  useEffect(() => {
    console.log('useEffect');
    if (userId) {
      onSessionLoginUser(userId);
    }
  }, [userId]);

  return <>{children}</>;
}
