import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(request) {
	try {
		// ✅ Get token from cookie
		const token = request.cookies.get("token")?.value;

		if (!token) {
			throw new Error("No token provided");
		}

		// ✅ Verify token
		await jwtVerify(token, secret);

		// ✅ Token is valid
		return NextResponse.next();
	} catch (err) {
		// ❌ Token invalid or missing, redirect
		return NextResponse.redirect(new URL("/auth/login", request.url));
	}
}

export const config = {
	matcher: [
		"/about/:path*",
		"/courses/:path*",
		"/dashBoard/:path*",
		"/enrolledStudents/:path*",
	],
};
