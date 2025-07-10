import express from "express";
import renderHomePage from "../controllers/homePage.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.get('/homePage', authMiddleware, renderHomePage);

export default router;