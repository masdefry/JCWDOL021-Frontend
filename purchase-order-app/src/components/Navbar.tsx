'use client';
import { authStore } from '@/store/auth.store';
import Link from 'next/link';

export default function Navbar() {
  const { auth } = authStore();

  return (
    <nav className='bg-green-500 shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          {/* Logo */}
          <div className='flex items-center'>
            <Link href='/'>
              <span className='text-white font-bold text-3xl cursor-pointer'>
                logo.
              </span>
            </Link>
          </div>

          {/* Login/User Info */}
          <div className='flex items-center space-x-3'>
            {auth?.username ? (
              <>
                <p className='text-white'>{auth?.email}</p>
                <div className='w-10 h-10 rounded-full bg-white'></div>
              </>
            ) : (
              <Link
                href='/login'
                className='text-white font-medium hover:bg-green-600 p-2 rounded-sm'
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
