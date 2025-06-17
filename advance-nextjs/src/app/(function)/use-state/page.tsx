'use client';
import { useState } from 'react';

export default function UseState() {
  const [counter, setCounter] = useState(0);
  const [numbers, setNumbers] = useState([]);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  function decrementCounter() {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Belajar State</h1>
      <button
        onClick={decrementCounter}
        className='btn bg-blue-300'
      >
        -
      </button>
      <h1>{counter}</h1>
      <button
        onClick={incrementCounter}
        className='btn bg-blue-300'
      >
        +
      </button>
    </>
  );
}



// axios -> fungsinya untuk apa