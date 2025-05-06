import jwt, { verify } from "jsonwebtoken";
import { JWT_EXPIRY, JWT_SECRET } from "../constants";

const generateToken = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET,{expiresIn: JWT_EXPIRY})
}

const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
}

export default {
  generateToken,
  verifyToken
}