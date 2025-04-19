// middleware/authenticateUser.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authenticateUser = (req, res, next) => {
	try {
        
		const token = req.headers.authorization?.split(" ")[1]; // assuming "Bearer <token>"
        console.log(token)
		if (!token) {
			return res.status(401).json({
				success: false,
				message: "Authorization token missing",
			});
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)
		req.userId = decoded.userId; // you stored `id` in JWT payload
		next();
	} catch (err) {
		return res.status(403).json({
			success: false,
			message: "Invalid or expired token",
		});
	}
};
