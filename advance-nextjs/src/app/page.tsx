import Image from 'next/image';
import TodoList from './features/home/components/TodoList';

export default function Home() {
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
            <TodoList todo='Main futsal' />
            <TodoList todo='Nonton timnas' />
            <TodoList todo='Develop e-commerce' />
          </div>
        </div>
      </section>
    </>
  );
}
