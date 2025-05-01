import userModel from '../models/user.model.js'

const registerUser = async (req,res) => {
   const { email, username, password} = req.body
   if ( !username || !password || !email){
      return res.status(400).json({
         success: false,
         message: "All fields are required"
      });
   }

   const existingUser = await userModel.findOne({email});

   if (existingUser){
      return res.status(400).json({
         success: false,
         message: "Email already exists"
      });
   }

   try{
      const creatUser = await userModel.create({ email, username, password});
      res.status(200).json({
         success: true,
         message: "Data recived",
         Data: req.body
      });
   }
   catch(err){
      res.status(500).json({
         success: false,
         message: "Something went wrong",
         error: err.message
      })
   }
};

export default registerUser;