'use client';
import axios from 'axios';
import TodoList from './features/home/components/TodoList';
import { useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([]);

  const onGetTodos = async () => {
    try {
      // GET, POST, PUT, PATCH, DELETE
      const response = await axios.get('http://localhost:3001/todos');
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section
        id='banner'
        className='flex justify-center'
      >
        <div className='w-[540px] pt-32'>
          {/* title */}
          <h1 className='text-3xl text-white font-bold'>T O D O</h1>
          {/* input create todo */}
          <label className='input w-full mt-10'>
            <input
              type='radio'
              className='radio'
            />
            <input
              type='search'
              className='grow w-full'
              placeholder='Create a new todo'
            />
          </label>
          {/* component todo list */}
          <div className='bg-white rounded-md shadow-md mt-5 p-5'>
            {/* Mapping: Method untuk Me-looping */}
            {todos?.map((item, index) => {
              return <TodoList todo={item?.name} />;
            })}
          </div>

          <button
            className='btn bg-purple-300 text-white w-full'
            onClick={onGetTodos}
          >
            Fetch Todos
          </button>
        </div>
      </section>
    </>
  );
}
