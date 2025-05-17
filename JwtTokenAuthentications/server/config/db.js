import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const URI = process.env.MONGO_URI;
    console.log(URI);
    await mongoose.connect(URI);
    console.log("Database connected");
  } catch (error) {
    console.log("Connection failed!!");
  }
};

export default connectDb;
