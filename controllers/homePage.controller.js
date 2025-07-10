import blogModel from "../models/blog.model.js"

const renderdashboardPage = async (req,res) => {
  try{
    const blogs = await blogModel.find().populate("author");

    res.render('homePage',{ 
      blogs,
      user : req.user
    });
  }
  catch(err){
    res.status(500).json({
      success : false,
      message : err.message
    });
  }
};

export default renderdashboardPage;