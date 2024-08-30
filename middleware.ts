import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getLoggedUser } from "./app/actions";

export async function middleware(request: NextRequest) {
  // const authenticated = await getLoggedUser();
  const authenticated = true;

  const { pathname } = request.nextUrl;

  if (
    authenticated &&
    (pathname.startsWith("/auth/login") ||
      pathname.startsWith("/auth/register"))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (
    !authenticated &&
    !pathname.startsWith("/auth/login") &&
    !pathname.startsWith("/auth/register")
  ) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|favicon.ico).*)"], // Apply to all routes except the specified ones
};
