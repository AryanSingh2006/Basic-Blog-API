import userModel from "../models/user.model.js";

const renderLoginPage = (req, res) => {
  res.render('loginPage');
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        username: user.username,
        email: user.email
      }
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err.message,
    });
  }
};

export default {
  renderLoginPage,
  loginUser
}