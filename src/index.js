//require('dotenv).config({path: './env})

import dotenv from "dotenv"
import connectDB from './db/index.js'
import app from "./app.js"


dotenv.config({
    path: './.env'
})


// as promises is returned after an async method, we handle it
connectDB().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`)
    });
}).catch((err) => {
    console.log("MongoDB connection failed!!", err);
});














// import mongoose from 'mongoose'
// import { DB_NAME } from './constants'
// // import express from 'express'
// const app = express()


// (async () => {
//     try{
//         await mongoose.connect(`process.env.MONGODB_URI/${DB_NAME}`)
//         app.on("errror", (error)  => {
//             console.log('Err', error);
//             throw error;
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${porcess.env.PORT}`);
//         })
//     }
//     catch(error){
//         console.log('Error',error)
//     }
// } )()