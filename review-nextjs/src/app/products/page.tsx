'use client';
import Card from '@/features/products/components/Card';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Page() {
  const [products, setProducts] = useState<[] | any[]>([]);

  const onGetProduct = async () => {
    console.log('onGetProduct');
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}api/products`
    ); // arg1: url route api
    setProducts(response?.data?.products);
  };

  useEffect(() => {
    onGetProduct();
  }, []);

  return (
    <>
      <h1>Products Data</h1>
      <div className='grid grid-cols-5 gap-5'>
        {products?.map((item, index) => {
          return (
            <Link
              href={`/products/${item.objectId}`}
              key={index}
            >
              <Card
                name={item?.name}
                price={item?.price}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}

// POST (Submit data)
