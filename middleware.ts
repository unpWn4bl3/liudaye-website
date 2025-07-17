import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/middleware'

// Add the routes that need authentication here
const protectedRoutes = ['/private']

export async function middleware(request: NextRequest) {
    const { supabase, response } = createClient(request)

    // Get the user's session
    const { data: { session } } = await supabase.auth.getSession()

    // Check if the current path requires authentication
    const isProtectedRoute = protectedRoutes.some(route =>
        request.nextUrl.pathname.startsWith(route)
    )

    if (isProtectedRoute && !session) {
        // Redirect to login if accessing protected route without session
        const redirectUrl = new URL('/login', request.url)
        return NextResponse.redirect(redirectUrl)
    }

    return response
}

export const config = {
    matcher: [
        // Only run middleware on the protected routes
        '/private/:path*'
    ]
}