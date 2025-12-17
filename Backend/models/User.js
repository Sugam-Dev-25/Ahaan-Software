const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: { type: String, required: true },

    designation: {
      type: String,
      enum: ['web_developer', 'designer', 'project_manager', 'ceo'],
      required: true,
    },

    profilePicture: String,

    // ✅ ADD THIS
    role: {
      type: String,
      enum: ['super_admin', 'admin'],
      default: 'admin',
    },

    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

// Password hashing
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// JWT
userSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      id: this._id,
      role: this.role,          // ✅ IMPORTANT
      designation: this.designation,
    },
    process.env.JWT_SECRET,
    { expiresIn: '3d' }
  );
};

module.exports = mongoose.model('User', userSchema);
