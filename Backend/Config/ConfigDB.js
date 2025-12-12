import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv()
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('MongoDB Database is connected.')
        
    } catch (error) {
        console.error(error)
    }
}

export default connectDB