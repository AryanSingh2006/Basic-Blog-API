import jwt from "jsonwebtoken";
import { 
  JWT_EXPIRY,
  JWT_SECRET,
  JWT_REFRESH_SECRET,
  JWT_REFRESH_EXPIRY
} from "../constants.js";

const generateAccessToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET,{expiresIn: JWT_EXPIRY});
}
const generateRefreshToken = (payload) => {
  return jwt.sign(payload, JWT_REFRESH_SECRET, {expiresIn: JWT_REFRESH_EXPIRY});
}

const verifyAccessToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
}
const verifyRefreshToken = (token) => {
  return jwt.verify(token, JWT_REFRESH_SECRET);
}

export default {
  generateAccessToken,
  verifyAccessToken,
  generateRefreshToken,
  verifyRefreshToken
}