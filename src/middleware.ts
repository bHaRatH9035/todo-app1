import { decode } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get('__Secure-next-auth.session-token');
  const token = await decode({
    token: sessionToken?.value, secret: process.env.NEXTAUTH_SECRET || ''
  })
  const path = request.nextUrl.pathname;
  console.log('token...', token)
  
  if (!token && path !== '/login') {
    console.log('token not found ', token);
    return NextResponse.redirect(new URL('/login', request.url));
  } else if (token && (path === '/login')) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/login'
  ]
}
