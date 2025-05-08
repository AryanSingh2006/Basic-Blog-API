import jwt from "jsonwebtoken";
import { JWT_EXPIRY, JWT_SECRET } from "../constants.js";

const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET,{expiresIn: JWT_EXPIRY});
}

const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
}

export default {
  generateToken,
  verifyToken
}