import express from "express"
import logoutUser from "../controllers/logout.controller.js"

const router = express.Router();

router.get("/logout", logoutUser);

export default router;