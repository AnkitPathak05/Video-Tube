import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app=express();
corsdetails={
    origin: process.env.CORS_ORIGIN,
    credentials: true,

}
app.use(cors(corsdetails));
//generally for middlewares we use "app.use"
//data in json format
app.use(express.json({
    limit:"16kb"
}))
 
//data in form of url
app.use(express.urlencoded({
    extended: true ,//obj inside obj function available
    limit:"16kb"
}))

app.use(express.static("public"))//for saving temp img or etc in the server 

app.use(cookieParser());//mere server se user ke browser ke andar ki cookies ko access aur set kr paun.


export {app}