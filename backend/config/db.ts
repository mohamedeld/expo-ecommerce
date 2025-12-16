import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV.DB_URL as string);
    console.log(`Connect to db`);
  } catch (error) {
    console.log(`Error db ${error}`);
    process.exit(1);
  }
};
