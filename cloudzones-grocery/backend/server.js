const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/grocery")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// ✅ Correct route
app.get("/products", (req, res) => {
    res.json([
        { name: "Rice", price: 50 },
        { name: "Milk", price: 30 },
        { name: "Vegetables", price: 40 }
    ]);
});

// Start server
app.listen(5000, "0.0.0.0", () => {
    console.log("Server running on port 5000");
});
