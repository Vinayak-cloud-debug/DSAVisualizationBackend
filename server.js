
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRoutes = require("./auth.routes.js");
const connectToMongoDB = require("./connectToMongoDB");
const cors = require('cors');

const User = require("./user.models.js"); // Your Mongoose User model
dotenv.config();

const app = express();

const allowedOrigins = ['https://algorithmerz.in', 'https://dsavisualizationbackend-tmii.onrender.com','https://dsavisualizationfrontend-62nc.onrender.com'];


app.use(cors({
  origin: allowedOrigins, // Allow specific origins
  methods: ['GET', 'POST'], // Allow specific HTTP methods (adjust as needed)
  credentials: true, // If you need to send cookies or authorization headers
}));


// PORT should be assigned after calling dotenv.config() because we need to access the env variables. Didn't realize while recording the video. Sorry for the confusion.
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes);




app.get("/api/user-count", async (req, res) => {
  try {
    const count = await User.countDocuments();
    console.log(count);
    res.json({count});
  } catch (error) {
    res.status(500).json({ message: "Error fetching user count", error });
  }
});




app.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});




const BACKEND_URL = "https://dsavisualizationbackend-4.onrender.com"; // Replace with your real backend URL

setInterval(async () => {
    try {
        await fetch(`${BACKEND_URL}/api/auth/login`);
        console.log("Pinged server to keep it awake");
    } catch (err) {
        console.error("Ping failed", err);
    }
}, 60 * 1000); // Ping every 1 minute





