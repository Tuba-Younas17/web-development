import { Token } from "../../../../models/tokenModel.js";
import { User } from "../../../../models/UserModel.js";

export const userVerifyTokenController = async (req, res) => {
	try {
		const { userId, token } = req.params;
		const user = await User.findOne({ _id: userId });

		if (!user) {
			return res.status(400).send("<h2>Invalid Link</h2>");
		}

		const verificationToken = await Token.findOne({
			userId: user._id,
			token: token,
		});

		if (!verificationToken) {
			return res.status(400).send("<h2>Invalid Token</h2>");
		}

		// Update the user as verified
		await User.updateOne({ _id: user._id }, { $set: { verified: true } });

		// Remove the token from the database
		await Token.deleteOne({ _id: verificationToken._id });

		return res.redirect(`http://localhost:5173/auth/VerifySuccess`);

	
	} catch (error) {
		console.error("Email Verification Error:", error);
		res.status(500).send("<h2>Internal Server Error</h2>");
	}
};
