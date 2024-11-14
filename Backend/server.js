// import dotenv from "dotenv"; // Ensure this is imported at the top
// import app from "./app.js";
// import mongoose from "mongoose";
// import cloudinary from "cloudinary";
// import cors from "cors";

// dotenv.config(); // Load .env variables

// // Set up CORS configuration
// app.use(cors({
//     origin: 'http://localhost:5173', // Adjust this if your frontend runs on a different port
//     credentials: true,
//      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     allowedHeaders: "Content-Type,Authorization"
// }));

// // Cloudinary configuration
// cloudinary.v2.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log("MongoDB connected successfully!"))
// .catch(err => 
//     console.error("Could not connect to MongoDB:", err)
// );

// // Start the server
// app.listen(process.env.PORT || 4000, () => {
//     console.log(`Server listening on port ${process.env.PORT || 4000}`);
// });

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cloudinary from "cloudinary";
import cors from "cors";
import app from "./app.js";

dotenv.config(); // Load .env variables

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Apply CORS middleware before any routes
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'], // Allow your frontend origin
    credentials: true, // Allow cookies and authorization headers
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected Successfully!"))
.catch(err => console.error("Could not connect to MongoDB:", err));

// Start the server
app.listen(process.env.PORT || 4000, () => {
    console.log(`Server listening on port ${process.env.PORT || 4000}`);
});
