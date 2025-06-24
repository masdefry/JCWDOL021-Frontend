import { db } from '@/utils/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json(); // req.json -> req.body

    const queryFindUser = query(
      collection(db, 'users'),
      where('email', '==', email),
      where('password', '==', password)
    );
    const findUser = await getDocs(queryFindUser);
    if (!findUser?.docs[0]?.data())
      return NextResponse.json(
        {
          message: 'Email or password are invalid',
        },
        { status: 404 }
      );

    return NextResponse.json(
      {
        message: 'Login success',
        user: {
          userId: findUser?.docs[0].id,
          username: findUser?.docs[0]?.data().username,
          email: findUser?.docs[0]?.data().email,
          role: findUser?.docs[0]?.data().role,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}

// GET: req.url & req.headers, POST: req.body, req.url, & req.headers, PUT/PATCH: req.body, req.url, & req.headers, DELETE: req.url & req.headers
// 1. req.body
// 2. req.url/req.query/req.params
// 3. req.headers