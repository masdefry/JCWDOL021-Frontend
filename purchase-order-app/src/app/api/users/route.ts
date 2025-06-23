import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/utils/firebase';
import { addDoc, collection } from 'firebase/firestore';

export async function POST(req: NextRequest) {
  // API memiliki kemampuan untuk mengambil data yg dikirim melalui request (request http)
  const { username, email, password, role } = await req.json();

  await addDoc(collection(db, 'users'), {
    username,
    email,
    password,
    role
  });

  return NextResponse.json(
    { message: 'Register user successfull!' },
    {
      status: 201,
    }
  );
}