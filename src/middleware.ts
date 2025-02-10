import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value || '';
  
  if (!token) {
    console.log('token not found ', token, process.env);
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.rewrite(new URL('/', request.url));
}

export const config = {
  matcher: [
    '/'
  ]
}
