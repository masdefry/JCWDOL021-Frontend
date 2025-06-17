/*
    LifeCycleMethods
    1. Dimuat didalam DOM -> componentDidMount()
    2. Diupdate ketika terjadi perubahan state/props -> componentDidUpdate() 
    3. Dihapus dari dalam DOM -> componentWillUnmount()
*/
'use client';
import Link from 'next/link';
import React from 'react';

class LifeCycleMethods extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0,
      string: '', 
      arrays: []
    };

    this.increment = this.increment.bind(this);
  }

    // Fetching Data (Pengambilan dari server)   
  componentDidMount() {
    console.log('componentDidMount Jalan');
  }

    // Special Case   
  componentDidUpdate() {
    console.log('componentDidUpdate Jalan');
  }

    // Edit Profile > Gak sengaja meng-klik halaman lain > confirmation box(are you sure discard this change)   
  componentWillUnmount() {
    console.log('componentWillUnmount Jalan');
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    console.log('Render Jalan');
    return (
      <>
        <h1>Life Cycle Methods</h1>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>+</button>

        <Link href='/state'>Go to State</Link>
      </>
    );
  }
}

export default LifeCycleMethods;
