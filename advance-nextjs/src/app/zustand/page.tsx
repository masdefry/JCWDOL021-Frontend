'use client';
import { counterStore } from '@/zustand/counter.store';

export default function Page() {
  const { counter, increment, decrement } = counterStore();

  return (
    <div className='px-3'>
      <h1>Belajar Zustand</h1>
      <button onClick={decrement}>-</button>
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
}
