const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load .env
dotenv.config();

// Express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/api/form", require("./routes/formRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/visitor", require("./routes/visitorRoutes"));

// Base Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
