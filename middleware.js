import { auth } from "./app/_lib/auth";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const session = await auth();

  // If user is logged in and visits "/", redirect them to "/account"
  if (session && request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/account", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/account"], // Apply middleware to both routes
};

// METHOD ONE:
// export const middleware = auth;
// export const config = { matcher: ["/account"] };

// FORMER METHOD OF USING MIDDLEWARE (METHOD TWO)
// export function middleware(request) {
//   console.log(request);

//   return NextResponse.redirect(new URL("login", request.url));
// }

// export const config = { matcher: ["/account"] };
