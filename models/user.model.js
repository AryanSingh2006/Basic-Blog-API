import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  email : {
    type : String,
    required : [true,'Email is required'],
    unique : true,
    trim : true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email format'],
  },
  username : {
    type : String,
    required : [true,'Username is required'],
    trim : true,
  },
  password : {
    type : String,
    required : [true,'Password is required'],
    trim : true
  },
  refreshToken: {
    type: String,
    default: ""
  }
},
{
  timestamps : true
})

//hasing the password before saveing it in the Database 
userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  try {
    this.password = await bcrypt.hash(this.password, 12); 
    next();
  } catch (err) {
    next(err); 
  }
});
//Comparision of the password before hashing and after hassing
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model('User',userSchema);