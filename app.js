import express from "express";
import registerRoutes from './routes/register.routes.js'

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true}));
app.use('/user',registerRoutes);



export default app;