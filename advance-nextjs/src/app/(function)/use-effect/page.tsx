'use client';
import { useEffect, useState } from 'react';

export default function UseEffect() {
  const [counter, setCounter] = useState<number>(0);
  const [arrays, setArrays] = useState<any>([]);
  // componentDidMount
  useEffect(() => {
    console.log('useEffect DidMount Jalan');
  }, []);

  //   componentDidUpdate
  useEffect(() => {
    if(counter !== 0){
        console.log('componentDidUpdate Jalan'); 
    }
  }, [counter]);

  //   componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('compoentnWillUnmount Jalan');
    };
  }, []);

  return (
    <>
      <h1>Belajar Life Cycle Methods</h1>
      <button onClick={() => setCounter(1)}>Set Counter</button>
      <button onClick={() => setArrays([1, 2, 3])}>Set Arrays</button>
    </>
  );
}
