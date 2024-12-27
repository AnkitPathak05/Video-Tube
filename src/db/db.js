//there are two ways of connecting database with the backend 
//1. is we directly connect in index.js and import express also 
//2. creating function in this folder, and then export 
import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB=async ()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB Host : ${connectionInstance.connection.host}`);
        
    }
    catch(error){
        console.error("MONGODB connection FAILED:", error);
        process.exit(1)
    }
}

export default connectDB;

