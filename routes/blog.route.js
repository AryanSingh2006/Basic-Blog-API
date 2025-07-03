import express from "express";
import blogcontroller from "../controllers/blog.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/createBlog", authMiddleware, blogcontroller.renderBlogpage)
router.post("/create", authMiddleware, blogcontroller.createBlog);

export default router;