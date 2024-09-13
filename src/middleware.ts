import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const token = request.cookies.get('access_token');

  if (token) return response;

  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: '/my-info',
};
