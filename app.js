import express from "express";
import userRoutes from "./routes/register.routes.js"

const app = express();

app.use('/user',userRoutes);



export default app;