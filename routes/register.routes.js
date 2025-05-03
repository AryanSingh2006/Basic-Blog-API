import express from 'express';
import registerController from '../controllers/register.controller.js';
import upload from '../middleware/multer.middleware.js';

const router = express.Router();

router.get('/register', registerController.renderRegisterPage)

router.post('/register', upload.none() ,registerController.registerUser);

export default router