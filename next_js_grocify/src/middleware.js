import { NextResponse } from "next/server";

export function middleware(request) {
	const token = request.cookies.get("userEmail")?.value;

	// If user is authenticated, allow access
	if (token) {
		return NextResponse.next();
	}

	// If not authenticated, redirect to login
	return NextResponse.redirect(new URL("/auth/login", request.url));
}

// Only run middleware on protected routes
export const config = {
	matcher: [
		"/about/:path*",
		"/courses/:path*",
		"/dashBoard/:path*",
		"/enrolledStudents/:path*",
	],
};
