'use client';
import { authStore } from '@/store/auth.store';

export default function Navbar() {
  const { auth } = authStore();
  console.log('NAVBAR');
  console.log(auth);
  return (
    <>
      <div className='h-[50px] bg-green-500 text-white'>
        <h1>{auth?.username}</h1>
      </div>
    </>
  );
}
