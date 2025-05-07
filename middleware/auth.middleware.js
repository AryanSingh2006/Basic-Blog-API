import jwtUtil from "../utils/jwt.js";

const authMiddleware = (req,res,next) => {
  const token = req.cookies.token;

  if (!token){
    return res.status(401).json({
      success:false,
      message: "No token found"
    });
  }

  try{
    const decoded = jwtUtil.verifyToken(token);

    req.user = decoded;
  }
  catch(err){
    res.status(401).json({
      success:false,
      message:"Invalid token",
      Error: err.message
    })
  }
}

export default authMiddleware;