import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function verifyToken(req) {
	const token = req.cookies.get("token")?.value;

	if (!token) {
		throw new Error("Unauthorized");
	}

	const { payload } = await jwtVerify(token, JWT_SECRET);
	return payload;
}
