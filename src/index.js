//  whenever we run npm run dev nodemon restarts the server
// require('dotenv').config({path: './env'})//so that sabhi ko env variable ka access ho
import connectDB from "./db/db.js";
import dotenv from "dotenv"
dotenv.config({
    path: './env'
})

connectDB() //an async function also gives back a promise, hance we used try/catch for debugging errors
.then(()=>{
    app.on("error", (error)=>{
        console.log("error after connecting", error);
        throw error;
    })
    app.listen(process.env.PORT|| 8000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`)
    });
})
.catch((err)=>{
    console.log("Mongodb connection failed!! ,", err);
})
//semicolon good practice
// always remember "DB IS IN ANOTHER CONTINENT, SO USE ASYNC AWAIT"

/*
;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("Err:", error); 
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
})();
*/