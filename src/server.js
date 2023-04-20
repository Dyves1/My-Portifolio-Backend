import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import allRoutes from "./Routes/allRoutes.js"

mongoose.set('strictQuery', false)

// configuring dotenv
dotenv.config();

// create server instance
const app = express();

// use of cors and body parse
app.use(cors({origin:'*'}))
app.use(bodyParser.json({limit:"50mb",type:"application/json"}))
app.use(bodyParser.urlencoded({extended:true}))

// route - home route
app.get("/", (req, res)=> {
  res.status(200).send(`
  <h1 style="text-align: center; color: blue; margin-top: 20vh">Welcome to our api home page</h1>
  `)
})

app.use("/", allRoutes)

// define some variables
const port = process.env.PORT;
const host = process.env.HOST;

// database some variables
const con =()=> mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  });

// instance to listen to our server
const startServer = ()=>app.listen(port);

Promise.all([con(), startServer()])
 .then(()=>{
  console.log(`MongoDB connected and server listening at http://${host}:${port}`);
 })
 .catch((err) =>console.log(err))


