const jwt = require("jsonwebtoken");

const generateToken = (userId, res) => {

	console.log("Generating Token")
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "20s",
	});

	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // MS
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
		sameSite: "Lax",
		secure: false
	});

	console.log("Response Headers:", res.getHeaders());

	return token;
};

module.exports = generateToken;

