const { Router } = require("express");
const taskModel = require("../Model/taskModel");

const taskRouter=Router();

taskRouter.post("/create",async(req,res)=>{
    const payload=req.body
   try {
       let task= new taskModel(payload);
       await task.save();
       res.send("task Created")
   } catch (error) {
     res.send({"err":err.message,"msg":"something went wrong"})
   }
})

taskRouter.get("/",async(req,res)=>{
    try {
        let data=taskModel.find();
        res.send(data)
    } catch (error) {
        res.send({"err":err.message,"msg":"something went wrong"})
    }
})

taskRouter.delete("/delete/:id", async(req,res)=>{
    const ID=req.params.id;

    try {
        let taskDelete= taskModel.findIdAndDelete({_id:ID})
        res.send("task has been Deleted")
    } catch (error) {
        res.send({"err":err.message,"msg":"task not deleted"})
    }
})

taskRouter.patch("/update/:id", async(req,res)=>{
    const ID=req.params.id;
    const payload=req.body
    try {
        let taskUpdated= taskModel.findIdAndUpdate({_id:ID,payload})
        res.send(taskUpdated)
    } catch (error) {
        res.send({"err":err.message,"msg":"task not deleted"})
    }
})

module.exports=taskRouter