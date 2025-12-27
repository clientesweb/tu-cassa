import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Set cache control headers to prevent aggressive caching
  response.headers.set("Cache-Control", "no-cache, no-store, must-revalidate, max-age=0")
  response.headers.set("Pragma", "no-cache")
  response.headers.set("Expires", "0")

  // Add version header for debugging
  response.headers.set("X-CSS-Version", "1.0.0")

  return response
}

// Configure which routes to apply middleware to
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
