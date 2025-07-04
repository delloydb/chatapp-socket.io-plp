// controllers/authController.js

/**
 * Mock user login handler.
 * This simulates a login process using just a username.
 */
const loginUser = (req, res) => {
  const { username } = req.body;

  if (!username || username.trim() === "") {
    return res.status(400).json({ error: "Username is required" });
  }

  // In a real app, you'd verify against DB or JWT
  return res.status(200).json({
    success: true,
    username,
    message: "Login successful",
  });
};

module.exports = {
  loginUser,
};
