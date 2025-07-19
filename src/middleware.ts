
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


// Mảng các path cần áp dụng middleware
const protectedRoutes = ['/', '/products', '/orders', '/reviews', '/categories', '/users']

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const token = request.cookies.get('token_info')?.value;
    if (!token && protectedRoutes.some((route) => pathname.startsWith(route))) {
        return NextResponse.redirect(new URL('/auth/sign-in', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/',
        '/products',
        '/products/:path*',
        '/orders',
        '/orders/:path*',
        '/reviews',
        '/reviews/:path*',
        '/categories',
        '/categories/:path*',
        '/users',
        '/users/:path*',
    ],
}
