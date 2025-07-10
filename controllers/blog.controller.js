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
    res.redirect("/homePage");
  }
  catch(err){
    return res.status(500).json({
      message : err.message
    })
  }
}

const detailedBlog = async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.id).populate("author");
    if (!blog) {
      return res.status(404).send("Blog not found");
    }
    res.render("detailedBlog", { blog });
  } catch (err) {
    res.status(500).send("Server error");
  }
};

const renderEditPage = async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.id);

    if (!blog || blog.author.toString() !== req.user.id) {
      return res.status(403).send("Unauthorized");
    }

    res.render("editBlog", { blog });
  } catch (err) {
    res.status(500).send("Error loading edit page");
  }
};

const updateBlog = async (req, res) => {
  const { title, content } = req.body;

  try {
    const blog = await blogModel.findById(req.params.id);

    if (!blog || blog.author.toString() !== req.user.id) {
      return res.status(403).send("Unauthorized");
    }

    blog.title = title;
    blog.content = content;
    await blog.save();

    res.redirect("/profilePage");
  } catch (err) {
    res.status(500).send("Failed to update blog");
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.id);

    if (!blog || blog.author.toString() !== req.user.id) {
      return res.status(403).send("Unauthorized");
    }

    await blog.deleteOne();
    res.redirect("/profilePage");
  } catch (err) {
    res.status(500).send("Failed to delete blog");
  }
};



export default {
  renderBlogpage,
  createBlog,
  detailedBlog,
  renderEditPage,
  updateBlog,
  deleteBlog
}