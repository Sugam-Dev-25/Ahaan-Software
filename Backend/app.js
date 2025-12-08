const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const path = require("path");
const http = require("http");

dotenv.config();

const app = express();

// CORS Setup
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://your-frontend-url.onrender.com"
  ],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect to MongoDB Atlas
connectDB();

// Routes
app.use("/api/form", require("./routes/formRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/visitor", require("./routes/visitorRoutes"));
app.use("/api/chat", require("./routes/chatRoutes"));
app.use("/api/team", require("./routes/teamRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

// Create server for socket.io
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: { origin: "*" }
});

const chatSocket = require("./socket/chatSocket");
chatSocket(io);

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
