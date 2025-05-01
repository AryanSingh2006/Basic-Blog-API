import express from 'express';
import registerUser from '../controllers/register.controller.js';
import upload from '../middleware/multer.middleware.js';

const router = express.Router();

router.post('/register', upload.none() ,registerUser);

export default router