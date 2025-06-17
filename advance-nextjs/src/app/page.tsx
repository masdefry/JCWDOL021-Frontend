'use client';
import axios from 'axios';
import TodoList from './features/home/components/TodoList';
import { useEffect, useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([]);

  const onGetTodos = async () => {
    try {
      // GET, POST, PUT, PATCH, DELETE
      const response = await axios.get('http://localhost:3001/todos');
      setTodos(response.data); // [{}]
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log('componentDidMount Executed!');
    onGetTodos();
  }, []);

  if(todos.length === 0) return (
    <h1>Loading...</h1>
  )

  return (
    <>
      {console.log('Render')}
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
              return (
                <TodoList
                  key={index}
                  todo={item?.name}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
