const asyncHandler = require("express-async-handler");

// @route /api/users
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  }
  res.send("Register route");
});

// @route /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  res.send("Login route");
});

module.exports = {
  registerUser,
  loginUser,
};
