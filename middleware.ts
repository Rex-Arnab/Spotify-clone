import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  // Token will exist if the user is logged in
  const token = await getToken({ req, secret: process.env.SECRET });
  const { pathname } = req.nextUrl;

  // Allow the requests if the following is true
  //   1. If the token exists, the user is logged in
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  // Otherwise, redirect to the login page
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.rewrite(url);
  }
}

export const config = {
  matcher: ["/login", "/api/auth", "/"],
};
