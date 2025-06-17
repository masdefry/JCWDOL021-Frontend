'use client';
import { useRef } from 'react';

export default function Page() {
  const firstInput = useRef<HTMLInputElement>(null);
  const secondInput = useRef<HTMLInputElement>(null);

  const onSubmit = () => {
    console.log(firstInput.current!.value);
    console.log(secondInput.current!.value);
  };

  return (
    <>
      <input
        ref={firstInput}
        className='input'
        placeholder='Type anything'
      />
      <input
        ref={secondInput}
        className='input'
        placeholder='Type anything'
      />
      <button
        onClick={onSubmit}
        className='btn bg-purple-400 text-white'
      >
        Submit
      </button>
    </>
  );
}
