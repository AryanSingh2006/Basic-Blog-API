import express from "express";
import renderProfilePage from "../controllers/Profilepage.controller.js";
import authmiddleware from "../middleware/auth.middleware.js"

const router = express.Router();

router.get("/profilePage", authmiddleware, renderProfilePage)

export default router