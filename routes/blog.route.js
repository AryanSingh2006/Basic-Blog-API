import express from "express";
import blogcontroller from "../controllers/blog.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/createBlog", authMiddleware, blogcontroller.renderBlogpage)
router.post("/create", authMiddleware, blogcontroller.createBlog);
router.get("/blogs/:id", blogcontroller.detailedBlog);
router.get("/blogs/:id/edit", authMiddleware, blogcontroller.renderEditPage);
router.post("/blogs/:id/edit", authMiddleware, blogcontroller.updateBlog);
router.post("/blogs/:id/delete", authMiddleware, blogcontroller.deleteBlog);

export default router;