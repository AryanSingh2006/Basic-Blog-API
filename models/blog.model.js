import mongoose from "mongoose";
import userModel from "./user.model.js";

const blogSchema = new mongoose.Schema({
  title : {
    type : String,
    unique : true
  },

  content : {
    type : String,
  },
  author : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User",
    required : true
  }
},{
  timestamps : true
})

export default mongoose.model('Blog', blogSchema);