import express from 'express';
import loginUser from "../controllers/login.controller.js";
import upload from '../middleware/multer.middleware.js';

const router = express.Router();

router.post('/login', upload.none(), loginUser);

export default router