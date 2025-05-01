import express from "express";
import registerRoutes from './routes/register.routes.js';
import loginRoutes from './routes/login.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/user',registerRoutes);
app.use('/user',loginRoutes);;


export default app;