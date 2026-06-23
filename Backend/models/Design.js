const mongoose = require("mongoose");

const designSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    link: { type: String, required: true },
    image: { type: String, required: true }, // Cloudinary URL
    designer: { type: String, required: true },
    category: {
  type: String,
  required: true,
  enum: [
    "Electronics",
    "Education & Books",
    "Business & Services",
    "Cars & Motorcycles",
    "Sports, Outdoors & Travel",
    "Fashion & Beauty",
    "Defense/Security",
    "IT/Tech",
    "Food & Restaurant",
    "Entertainment",
    "Travel",
    "Society & People",
    "Medical (Healthcare)",
    "Real Estate",
    "Others",
  ],
},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Design", designSchema);

 