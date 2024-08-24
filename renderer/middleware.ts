import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl;
    if (pathname === "/") {
      // Redirect unauthenticated users trying to access the dashboard to /
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}
