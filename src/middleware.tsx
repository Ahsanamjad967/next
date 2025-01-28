import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest,res:NextResponse) {
    const token = req.cookies.get('token');
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
}

export const config = {
    matcher: ['/products','/some'], 
};