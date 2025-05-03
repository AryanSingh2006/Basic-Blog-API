import express from "express";
import registerRoutes from './routes/register.routes.js';
import loginRoutes from './routes/login.routes.js';
import userRoutes from './routes/user.routes.js'

const app = express();

app.set('view engine', 'ejs');
app.set('views','./views')

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/', userRoutes);
app.use('/', registerRoutes)
app.use('/',loginRoutes);;


export default app;