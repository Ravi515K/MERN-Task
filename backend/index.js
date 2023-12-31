const express=require("express");
const Connection  = require("./db");
const cors=require('cors')
const userRouter = require("./Routers/userRouter");
const taskRouter = require("./Routers/taskRouter");


const app = express();
app.use(express.json());
app.use(cors())

app.get("/",(req,res)=>{
    try {
       
        res.send("Home Page")
    } catch (error) {
        res.send("went something wrong")
    }
})
app.use("/user",userRouter)
//  app.use(authenticate)
app.use("/task",taskRouter)


app.listen(8080,async()=>{
    try{
        await Connection
        console.log("DB is connected")
    }catch(err){console.log(err)}
    console.log("server is Running on Port 8080")
})