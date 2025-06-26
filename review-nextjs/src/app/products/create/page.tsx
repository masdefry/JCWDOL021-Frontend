'use client';
import { Form, Formik, ErrorMessage, Field } from 'formik';
import { createProductSchema } from '@/features/products/schemas/createProductSchema';
import axios from 'axios';

export default function Page() {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          price: 0,
        }}
        validationSchema={createProductSchema}
        onSubmit={async (values) => {
          try {
            const response = await axios.post(
              'http://localhost:3000/api/products',
              {
                name: values.name,
                price: values.price,
              }
            );

            alert(response?.data?.message);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <Form className='mx-auto w-1/2 mt-32'>
          <fieldset className='fieldset'>
            <legend className='fieldset-legend'>Product name</legend>
            <Field
              name='name'
              type='text'
              className='input w-full'
              placeholder='Type here'
            />
            <ErrorMessage
              name='name'
              component={'p'}
              className='label'
            />
          </fieldset>
          <fieldset className='fieldset'>
            <legend className='fieldset-legend'>Product price</legend>
            <Field
              name='price'
              type='number'
              className='input w-full'
              placeholder='Type here'
            />
            <ErrorMessage
              name='price'
              component={'p'}
              className='label'
            />
          </fieldset>
          <button className='btn bg-purple-400 text-white w-full'>
            Create Product
          </button>
        </Form>
      </Formik>
    </>
  );
}
