import { authMiddleware, clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

export default authMiddleware({
  publicRoutes: ["/api/uploadthing"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};