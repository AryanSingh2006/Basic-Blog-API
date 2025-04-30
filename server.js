import 'dotenv/config';
import mongoose from "mongoose";
import connectMongoDB from "./config/db.config.js";
import app from "./app.js"

connectMongoDB()
  .then(()=>{
    app.listen(PORT, ()=>{
      console.log(`🚀 Server is live on http://localhost:${PORT}`)
    })
  })
  .catch((err)=>{
    console.log(err);
  })
