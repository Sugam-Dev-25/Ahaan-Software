const mongoose = require("mongoose");

const designSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    link: { type: String, required: true },
    image: { type: String, required: true }, // Cloudinary URL
    designer: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Design", designSchema);

 