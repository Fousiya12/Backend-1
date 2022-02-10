import express from "express";
const router4= express.Router();
import Task from '../models/task'  

 
 // getting all 
  router4.get('/', async(req,res) =>{ 
    try{ 
      const tasks = await Task.find();
       res.json(tasks);
     }catch (err)
     { res.json({message:err}); 
     } 
   });

 // getting w r t associate uid
 
 router4.get("/:associate", async (req, res) => {
  try {
    const task = await Task.find({associate:req.params.associate})
    ;
    res.json(task);
  } catch (err) {
    res.json({ message: err });
  }
});



 

 // creating task

 router4.post('/',(req,res)=>{ 
     const task = new Task({
                taskname:req.body.taskname,
                taskid:req.body.taskid,
                taskdescription:req.body.taskdescription,
                files:req.body.files,
                leader:req.body.leader,
                associate:req.body.associate,
                status:req.body.status,
                approval:req.body.approval

                  });
                   task.save(). then(data =>{ res.json(data); }).catch (err=>{ res.json({message:err}); }) }); 

 // deleting task

 router4.delete('/:taskid', async(req,res) =>{ 
   try{
      const removepost = await Task.deleteOne({taskid: req.params.taskid});
       res.json(removepost); }
       catch(err){ res.json({message:err});
       }
       } ); 

//updating a user by id

    router4.patch("/:taskid", async (req, res) => {
    try {
      const task= await Task.findOne({ taskid: req.params.taskid });
      console.log("user done",task)
    
      if (req.body.taskname) {
        task.taskname= req.body.taskname;
      }
      if (req.body.taskdescription) {
        task.taskdescription= req.body.taskdescription;
      }
      if (req.body.approval) {
        task.approval= req.body.approval;
      }
      if (req.body.status) {
        task.status= req.body.status;
      }
      console.log(task)
      await task.save((err)=>{if(err){console.log("err",err)}});
      res.json(task);
     
    } catch (err) {
      res.json({ message: err });
    }
  });
  

 export default router4;