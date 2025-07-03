import blogModel from "../models/blog.model.js"

const renderBlogpage = (req,res) => {
  res.render('createBlog')
}

const createBlog = async (req,res) => {
  const {title, content} = req.body;

  if (!title || !content){
    return res.status(400).json({
      success : false,
      message : "Content or Title is empty"
    })
  }
  
  try{
    await blogModel.create({title, content, author : req.user.id});
    res.redirect("/dashboard");
  }
  catch(err){
    return res.status(500).json({
      message : err.message
    })
  }
}

export default {
  renderBlogpage,
  createBlog
}