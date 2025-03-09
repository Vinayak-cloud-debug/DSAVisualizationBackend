const jwt = require("jsonwebtoken");

const generateToken = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "7d", // Set token expiration to 7 days
	});

	

	res.cookie("jwt", token, {
		httpOnly: true, // Prevents client-side JS access (security)
		sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax", // Allows cross-site cookies in production
		secure: process.env.NODE_ENV === "production", // Must be true if sameSite is None
		maxAge: 7 * 24 * 60 * 60 * 1000, // Matches JWT expiration (7 days)
	});
};

module.exports = generateToken;
