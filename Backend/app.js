const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const path = require("path");

// Load env
dotenv.config();

const app = express();

// Middlewares
app.use(cors({
  origin: "http://localhost:5173",  
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// ⭐ Serve Uploads Folder (VERY IMPORTANT)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Connect DB
connectDB();

// Routes
app.use("/api/form", require("./routes/formRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/visitor", require("./routes/visitorRoutes"));
app.use("/api/chat", require("./routes/chatRoutes"));
app.use("/api/team", require("./routes/teamRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

// SOCKET.IO
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: { origin: "*" }
});

const chatSocket = require("./socket/chatSocket");
chatSocket(io);

// Base Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Server Start
const PORT = process.env.PORT || 5000;
http.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
