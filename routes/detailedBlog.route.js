import express from "express"
import detailedBlog from "../controllers/detailedBlog.controller.js";

const router = express.Router();

router.get("/blogs/:id", detailedBlog);

export default router;