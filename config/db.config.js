import 'dotenv/config';
import mongoose from 'mongoose';

const connectMongoDB = () => {
  return mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log("✅ DataBase is connected Connected!");
})
.catch((err) => {
  console.log(err);
})
}

export default connectMongoDB;