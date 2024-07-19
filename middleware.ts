import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!.*\\..*|_next|sign-up).*)",  // This line excludes the sign-up route
    "/",
    "/(api|trpc)(.*)"
  ],
};
