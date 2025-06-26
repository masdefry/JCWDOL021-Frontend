'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Page() {
  const [products, setProducts] = useState<[] | any[]>([]);

  const onGetProduct = async () => {
    console.log('onGetProduct');
    const response = await axios.get('http://localhost:3001/api/products'); // arg1: url route api
    setProducts(response?.data?.products);
  };

  useEffect(() => {
    onGetProduct();
  }, []);

  return (
    <>
      {console.log('Element HTML')}
      <h1>Products Data</h1>
      {products?.map((item, index) => {
        return <p>{item?.name}</p>;
      })}
    </>
  );
}



// POST (Submit data)