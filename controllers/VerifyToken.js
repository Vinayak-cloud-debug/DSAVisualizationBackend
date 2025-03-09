
const jwt = require("jsonwebtoken");
const User = require("../models/user.models");

const VerifyToken = async (req, res, next) => {
	try {
		const token = req.cookies.jwt;
        console.log(token)

		if (!token) {
			return res.status(401).json({ error: "Unauthorized - No Token Provided" });
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		if (!decoded) {
			return res.status(401).json({ error: "Unauthorized - Invalid Token" });
		}

		const user = await User.findById(decoded.userId).select("-password");

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		req.user = user;

		res.status(200).json({message: "Valid Guy",output:1})
	} catch (error) {
		console.log("Error in protectRoute middleware: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

module.exports = VerifyToken;