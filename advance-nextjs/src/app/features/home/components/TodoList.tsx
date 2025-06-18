import { Dispatch, SetStateAction } from 'react';

interface ITodoListProps {
  todo: string;
  idToUpdate: string;
  id: string;
  setIdToUpdate: Dispatch<SetStateAction<string>>;
}

export default function TodoList({
  todo,
  idToUpdate,
  id,
  setIdToUpdate,
}: ITodoListProps) {
  return (
    <div className='flex items-center gap-3 border-b-2 border-gray-200 p-3'>
      <input
        type='radio'
        className='radio'
      />
      {String(idToUpdate) === id ? (
        <>
          <input
            type='text'
            className='grow w-full input'
            placeholder='Update new todo'
          />
          <button
            onClick={() => setIdToUpdate(id)}
            className='btn bg-green-400 text-white ml-auto'
          >
            Save
          </button>
        </>
      ) : (
        <>
          <h3>{todo}</h3>
          <button
            onClick={() => setIdToUpdate(id)}
            className='btn bg-green-400 text-white ml-auto'
          >
            Update
          </button>
        </>
      )}
    </div>
  );
}
