import express from "express";
import cookieParser from "cookie-parser";

import registerRoutes from './routes/register.routes.js';
import loginRoutes from './routes/login.routes.js';
import userRoutes from './routes/user.routes.js'
import homepageRoutes from './routes/homePage.route.js'
import logoutRoutes from "./routes/logout.routes.js"
import refreshRoutes from "./routes/refreshToken.route.js"
import blogRoutes from "./routes/blog.route.js"
import profilePageRoutes from "./routes/profilePage.route.js"

const app = express();

app.set('view engine', 'ejs');
app.set('views','./views')

app.use(express.static("public"));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/', userRoutes);
app.use('/', registerRoutes);
app.use('/',loginRoutes);;
app.use('/', homepageRoutes);
app.use('/', logoutRoutes);
app.use('', refreshRoutes);
app.use('', blogRoutes);
app.use('', profilePageRoutes);


export default app;