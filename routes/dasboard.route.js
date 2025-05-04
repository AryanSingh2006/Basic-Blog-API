import express from "express";
import renderdashboardPage from "../controllers/dashboard.controller.js";

const router = express.Router();

router.get('/dashboard', renderdashboardPage);

export default router;