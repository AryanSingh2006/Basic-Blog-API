import express from "express";
import mongoose from "mongoose";
import connectMongoDB from "./config/db.config.js";

connectMongoDB();

const app = express();

export default app;