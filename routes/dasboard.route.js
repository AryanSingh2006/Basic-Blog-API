import express from "express";
import renderdashboardPage from "../controllers/dashboard.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.get('/dashboard', authMiddleware, renderdashboardPage);

export default router;