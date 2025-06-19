'use client';
import { HiOutlineMail } from 'react-icons/hi';
import { TbLockPassword } from 'react-icons/tb';
import { FaRegUserCircle } from 'react-icons/fa';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { registerValidationSchema } from '@/features/register/schemas/registerValidationSchema';
import { IUsers } from '@/features/register/types';
import axios from 'axios';

export default function RegisterPage() {
  // Parameter hanya 1: (name)
  // Parameter > 1: ({name, email, password, address, ...})
  const onRegisterUser = async ({
    username,
    email,
    password,
    role,
  }: IUsers) => {
    try {
      await axios.post('http://localhost:3000/api/users', {
        username,
        email,
        password,
        role,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='flex flex-col items-center py-10'>
      <div className='w-96 flex flex-col items-center gap-3'>
        <h1 className='text-2xl font-bold'>Register User</h1>
        <Formik
          initialValues={{ username: '', email: '', password: '', role: '' }}
          validationSchema={registerValidationSchema}
          onSubmit={(values) => {
            onRegisterUser({
              username: values.username,
              email: values.email,
              password: values.password,
              role: values.role,
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

            <label className='input input-bordered flex items-center gap-2 rounded-full w-full'>
              <FaRegUserCircle />
              <Field
                type='text'
                name='username'
                className='grow'
                placeholder='Type your username'
              />
            </label>
            <ErrorMessage name='username' />

            <Field
              as='select'
              name='role'
              className='select select-bordered rounded-full w-full text-gray-300'
            >
              <option
                value=''
                disabled
              >
                User Role
              </option>
              <option value='STAFF'>STAFF</option>
              <option value='MANAGER'>MANAGER</option>
            </Field>
            <ErrorMessage name='role' />
            <button
              type='submit'
              className='btn bg-green-700 text-white rounded-full w-full'
            >
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </section>
  );
}
