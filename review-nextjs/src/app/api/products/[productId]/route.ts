import Backendless from '@/lib/backendless';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  _: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    const { productId } = await params;

    const response = await Backendless.Data.of('Products-OL021').findById(
      productId
    );

    return NextResponse.json(
      {
        message: `Get product with id ${productId} successful`,
        product: response,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(error);
  }
}

// http://localhost:3000/api/products/[productId]
