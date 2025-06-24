import { db } from '@/utils/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = await params;

  const userRef = await doc(db, 'users', userId);
  const findUser = await getDoc(userRef);

  return NextResponse.json(
    {
      message: 'Session login success',
      user: {
        userId: findUser?.id,
        username: findUser?.data()?.username,
        email: findUser?.data()?.email,
        role: findUser?.data()?.role,
      },
    },
    { status: 200 }
  );
}

// http://localhost:3000/api/users/authentication/[userId] -> Dynamic route/dynamic url
