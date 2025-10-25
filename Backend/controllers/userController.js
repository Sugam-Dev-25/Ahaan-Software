const User = require('../models/user');
const bcrypt = require('bcryptjs'); // Import bcrypt for password comparison



exports.createUser = async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      // Ensure password is not empty or undefined
      if (!password) {
        return res.status(400).json({ message: "Password is required" });
      }
  
      // Remove password hashing here, let the pre-save hook handle it
      const newUser = new User({
        username,
        email,
        password, // Pass the plain password, hashing will happen in the model
      });
  
      await newUser.save();
      res.status(201).json({ message: "New user created successfully", user: newUser });
    } catch (error) {
      console.error(error);
      res.status(501).json({ message: "Server error" });
    }
  };
  




exports.loginUser = async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const loginField = username || email; // Use either username or email for login
  
      // Find user by username or email
      const user = await User.findOne({
        $or: [{ username: loginField }, { email: loginField }],
      });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Log the entered password and hashed password in the database for debugging
      console.log("Entered password: ", password);
      console.log("Hashed password in DB: ", user.password);
  
      // bcrypt.compare does the job of comparing the entered password with the stored hash
      const isMatch = await bcrypt.compare(password, user.password); // bcrypt compares entered password with stored hashed password
  
      // Log the result of the comparison
      console.log("Password match result: ", isMatch);
  
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      // If login is successful, create a session for the user
      req.session.userId = user._id; // Store user ID in session
      req.session.username = user.username; // Optionally, store other info
  
      // Send response with user data
      res.status(200).json({
        message: "Login successful",
        user: {
          username: user.username,
          email: user.email,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  };
  

  
  
  
  // Logout user
exports.logoutUser = (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Could not log out" });
      }
      res.status(200).json({ message: "Logged out successfully" });
    });
  };
  