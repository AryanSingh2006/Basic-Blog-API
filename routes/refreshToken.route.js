import express, { Router } from "express";
import refreshAccessToken from "../controllers/refreashToken.controller.js";

const router = express.Router();

router.get("/refreashAccessToken", refreshAccessToken);

export default router;