import userModel from '../models/user.model.js';
import jwtUtil from "../utils/jwt.js";
import { NODE_ENV } from '../constants.js';

const renderRegisterPage = (req, res) => {
  res.render('registerPage');
};

const registerUser = async (req, res) => {
  const { email, username, password } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  const existingUser = await userModel.findOne({ email });

  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "Email already exists"
    });
  }

  try {
    const createdUser = await userModel.create({ email, username, password });

    const accessToken = jwtUtil.generateAccessToken({ id: createdUser._id, email: createdUser.email });
    const refreshToken = jwtUtil.generateRefreshToken({ id: createdUser._id, email: createdUser.email });

    createdUser.refreshToken = refreshToken;
    await createdUser.save();

    res.cookie("token", accessToken, {
      httpOnly: true,
      secure: NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 24 * 60 * 60 * 1000
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.redirect('/dashboard');
  } catch (err) {
    res.status(500).render("registerPage", {
      error: "Something went wrong. Please try again."
    });
  }
};

export default {
  renderRegisterPage,
  registerUser
};
