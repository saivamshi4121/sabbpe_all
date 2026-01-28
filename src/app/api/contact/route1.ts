// /app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  console.log('Contact:', data);
  // TODO: Send email, save to DB
  return NextResponse.json({ success: true });
}