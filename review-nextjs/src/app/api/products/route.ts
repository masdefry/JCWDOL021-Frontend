// 1 Function GET
// 1 Function POST
// 1 Function PUT/PATCH
// 1 Function DELETE
import Backendless from '@/lib/backendless';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const response = await Backendless.Data.of('Products-OL021').find();

  return NextResponse.json(
    {
      message: 'Get products successful',
      products: response,
    },
    { status: 200 }
  );
}

export async function POST(req: NextRequest) {
  try {
    const { name, price } = await req.json();

    await Backendless.Data.of('Products-OL021').save({
      name,
      price,
    });

    return NextResponse.json(
        { message: 'Create product successful' },
        { status: 201 }
    )
  } catch (error) {
    console.log(error)
  }
}

export async function DELETE() {}

export async function PATCH() {}

// fe -> mengirim data ke api -> api akan meneruskan db (backendless)

// 3 cara pengiriman datanya
// 1. req.body
// 2. req.url
// 3. req.headers

// Frontend side (axios):
// 1. req.body (post, put, patch)
// axios.post('urlAPI', {name, price})
// axios.put('urlAPI', {newName, newPrice})
// axios.patch('urlAPI', {newName, newPrice})

// 2. req.url (get, post, put, patch, delete)
// axios.get('urlAPI/data')
// axios.post('urlAPI/data')
// axios.put('urlAPI/data')
// > req.url.params: http://localhost:3000/api/products/[productId]

// > req.url.query: http://localhost:3000/api/products + ?product-name=Mangga&product-price=15000
