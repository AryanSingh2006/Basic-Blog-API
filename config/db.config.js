import 'dotenv/config';
import mongoose from 'mongoose';
import { MONGODB_URI } from '../constants.js';

const connectMongoDB = () => {
  return mongoose.connect(MONGODB_URI)
.then(() => {
  console.log("✅ DataBase is connected Connected!");
})
.catch((err) => {
  console.log(err);
})
}

export default connectMongoDB;