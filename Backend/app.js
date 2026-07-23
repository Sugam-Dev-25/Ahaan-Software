const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const path = require("path");

// Load ENV
dotenv.config();

const app = express();

// Allowed CORS Origins
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://admin.ahaanmedia.com",
  "https://ahaan-software-admin.vercel.app",
  "https://stagging.ahaanmedia.com",
  "https://ahaan-software.vercel.app",
  "https://ahaansoftware.com",
  // "https://design-portfolio.ahaanmedia.com",
  "https://portfolio-ahaanmedia.vercel.app",
  "https://ahaan-software-consulting-llp.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("❌ Blocked by CORS:", origin);
        callback(new Error("CORS Blocked"));
      }
    },
    credentials: true,
  })
);


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve Uploads Folder
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect MongoDB Atlas
connectDB();

// Routes
app.use("/api/form", require("./routes/formRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/visitor", require("./routes/visitorRoutes"));
app.use("/api/chat", require("./routes/chatRoutes"));
app.use("/api/team", require("./routes/teamRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/designs", require("./routes/designRoutes"));
app.use("/api/developments", require("./routes/developmentRoutes"));
app.use("/api/newsletter", require("./routes/newsletterRoutes"));

// SOCKET.IO Setup
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: allowedOrigins,
    credentials: true,
  },
});

// Chat Socket
const chatSocket = require("./socket/chatSocket");
chatSocket(io);

// Default Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Server Start
const PORT = process.env.PORT || 5000;
http.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
