import express from 'express';
import loginController from "../controllers/login.controller.js";
import upload from '../middleware/multer.middleware.js';

const router = express.Router();

router.get('/login', loginController.renderLoginPage);
router.post('/login', upload.none(), loginController.loginUser);

export default router