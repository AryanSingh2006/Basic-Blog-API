import 'dotenv/config';
import mongoose from "mongoose";
import connectMongoDB from "./config/db.config.js";
import app from "./app.js"

const PORT = process.env.PORT || 3000;

connectMongoDB()
  .then(()=>{
    app.listen(PORT,()=> {
      console.log(`Server is live on http://localhost:${PORT}`)
      console.log(`➡️ Try accessing: http://localhost:${PORT}/user`);
    })
  })
  .catch((err)=>{
    console.log(err);
  })
