import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const session = await getServerSession({
    secret: process.env.AUTH_SECRET,
  });
  console.log('>>', session);
  return NextResponse.json({ message: 'OK' });
};
