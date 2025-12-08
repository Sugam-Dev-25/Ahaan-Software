const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("⏳ Connecting to MongoDB...");

    if (!process.env.MONGO_URI) {
      throw new Error("❌ MONGO_URI is missing in environment variables!");
    }

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Avoid long wait time
    });

    console.log("✅ MongoDB Atlas Connected Successfully!");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed!");
    console.error("Error Message:", error.message);

    // Show Atlas specific error info
    if (error.reason) {
      console.error("Reason:", error.reason);
    }

    // Exit only in production (avoid crash during development)
    if (process.env.NODE_ENV === "production") {
      process.exit(1);
    }
  }
};

module.exports = connectDB;
