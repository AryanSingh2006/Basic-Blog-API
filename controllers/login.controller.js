import userModel from "../models/user.model.js";
import jwtUtil from "../utils/jwt.js";
import { NODE_ENV  } from "../constants.js";

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

    const token = jwtUtil.generateAccessToken ({id : user._id, email : user.email});
    const refreshToken = jwtUtil.generateRefreshToken ({id : user._id, email : user.email});

    //saving refresh token in the db
    user.refreshToken = refreshToken;
    await user.save();

    res.cookie("token", token, {
      httpOnly: true,
      secure: NODE_ENV  === "production",
      sameSite: "Strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    })
    return res.redirect("/homePage");

  } catch (err) {
    res.status(500).render("loginPage", {
      error: "Something went wrong",
    });
  }
};

export default {
  renderLoginPage,
  loginUser
}