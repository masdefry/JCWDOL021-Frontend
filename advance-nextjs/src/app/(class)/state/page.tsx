/*
    STATE
    Mirip seperti variabel, digunakan untuk menyimpan data dalam scope lokal.
    State datanya bisa berubah, dan ketika terjadi perubahan pada state akan men-trigger component
    untuk di render ulang.
*/
'use client';
import React from 'react';

interface IState {
  counter: number;
}

class State extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <>
        <div className='flex items-center flex-col'>
          <h1>Belajar State</h1>
          <div className='flex items-center gap-3'>
            <button className='btn bg-red-300'>-</button>
            <h1>{this?.state?.counter}</h1>
            <button
              className='btn bg-red-300'
              onClick={this.increment}
            >
              +
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default State;
