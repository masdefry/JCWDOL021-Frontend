// 1 Function GET
// 1 Function POST
// 1 Function PUT/PATCH
// 1 Function DELETE
import Backendless from '@/lib/backendless';
import { NextResponse } from 'next/server';

export async function GET() {
    const response = await Backendless.Data.of('Products-OL021').find();

    return NextResponse.json(
        { 
            message: 'Get products successful', 
            products: response
        },
        { status: 200 }
    )
}

export async function POST() {}

export async function DELETE() {}

export async function PATCH() {}
