import userModel from "../models/user.model.js"
import blogModel from "../models/blog.model.js"

const renderProfilePage = async (req,res) => {
  try{
    const user = await userModel.findById(req.user.id)
    const blogs = await blogModel.find({author : req.user.id}).populate("author")

    res.render("profilePage",{
      user,
      blogs
    })
  }
  catch(err) {
    res.status(400).json({
      success : false,
      message : err.message
    })
  }
}

export default renderProfilePage;