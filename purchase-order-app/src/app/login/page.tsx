'use client';
import { HiOutlineMail } from 'react-icons/hi';
import { TbLockPassword } from 'react-icons/tb';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { loginValidationSchema } from '@/features/login/schemas/loginValidationSchema';
import axios from 'axios';
import { IUsers } from '@/features/register/types';
import { toast } from 'react-toastify';
import { authStore } from '@/store/auth.store';

export default function Page() {
  const { setAuth } = authStore();

  const onAuthenticationUser = async ({
    email,
    password,
  }: Pick<IUsers, 'email' | 'password'>) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/users/authentication',
        {
          email,
          password,
        }
      );
    
      setAuth({
        email: response?.data.user?.email,
        username: response?.data?.user?.username,
        role: response?.data?.user?.role,
        userId: response?.data?.user?.userId
      });
      toast.success(response?.data?.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className='flex flex-col items-center py-10'>
        <div className='w-96 flex flex-col items-center gap-3'>
          <h1 className='text-2xl font-bold'>Login User</h1>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginValidationSchema}
            onSubmit={(values) => {
              onAuthenticationUser({
                email: values.email,
                password: values.password,
              });
            }}
          >
            <Form className='w-full flex flex-col gap-3'>
              <label className='input input-bordered flex items-center gap-2 rounded-full w-full'>
                <HiOutlineMail />
                <Field
                  type='text'
                  name='email'
                  className='grow'
                  placeholder='Type your email'
                />
              </label>
              <ErrorMessage
                name='email'
                className='text-red-500'
                component={'div'}
              />

              <label className='input input-bordered flex items-center gap-2 rounded-full w-full'>
                <TbLockPassword />
                <Field
                  type='password'
                  name='password'
                  className='grow'
                  placeholder='Type your password'
                />
              </label>
              <ErrorMessage name='password' />
              <button
                type='submit'
                className='btn bg-green-500 hover:bg-green-600 text-white rounded-full w-full'
              >
                Login
              </button>
            </Form>
          </Formik>
        </div>
      </section>
    </>
  );
}
