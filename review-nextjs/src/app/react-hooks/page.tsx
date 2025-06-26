'use client';
import { useState, useEffect } from 'react';

export default function ReactHooksPage() {
  const [counter, setCounter] = useState<number>(0);

  const onIncrement = () => {
    setCounter(1);
  }

  useEffect(() => {
    console.log('>>>')
  }, [])

  return (
    <>
      <h1>Review React Hooks</h1>
      <h1>{counter}</h1>
      <button onClick={onIncrement}>Increment</button>
    </>
  );
}

// REACT HOOKS
// State -> Pengganti Variable
// State? Punya kemampuan untuk merender ulang halamannya ketika terjadi perubahan data
// useState()



// Lifecycle Methods
// - ComponentDidMount  -> Method yg akan dijalankan pada saat halaman akan dibuka
// - ComponentDidUpdate -> Method yg akan dijalankan pada saat halaman telah dibuka dan terjadi perubahan state/props
// - ComponentWillUnmount -> Method yg akan dijalankan pada saat halaman akan dihapus/ditutup

// useEffect