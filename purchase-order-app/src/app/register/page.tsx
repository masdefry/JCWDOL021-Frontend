'use client';
import { HiOutlineMail } from 'react-icons/hi';
import { TbLockPassword } from 'react-icons/tb';
import { FaRegUserCircle } from 'react-icons/fa';
import { Field, Formik } from 'formik';
import { registerValidationSchema } from '@/features/register/schemas/registerValidationSchema';

export default function RegisterPage() {
  return (
    <section className='flex flex-col items-center py-10'>
      <div className='w-96 flex flex-col items-center gap-3'>
        <h1 className='text-2xl font-bold'>Register User</h1>
        <Formik
          initialValues={{ username: '', email: '', password: '' }}
          validationSchema={registerValidationSchema}
          onSubmit={(values) => {

          }}
        >
          <form className='w-full flex flex-col gap-3'>
            <label className='input input-bordered flex items-center gap-2 rounded-full w-full'>
              <HiOutlineMail />
              <Field
                type='text'
                name='email'
                className='grow'
                placeholder='Type your email'
              />
            </label>

            <label className='input input-bordered flex items-center gap-2 rounded-full w-full'>
              <TbLockPassword />
              <Field
                type='password'
                name='password'
                className='grow'
                placeholder='Type your password'
              />
            </label>

            <label className='input input-bordered flex items-center gap-2 rounded-full w-full'>
              <FaRegUserCircle />
              <Field
                type='text'
                name='username'
                className='grow'
                placeholder='Type your username'
              />
            </label>

            <Field as Select
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

            <button
              type='submit'
              className='btn bg-green-700 text-white rounded-full w-full'
            >
              Register
            </button>
          </form>
        </Formik>
      </div>
    </section>
  );
}
