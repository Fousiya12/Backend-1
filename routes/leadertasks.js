import express from "express";
const router2= express.Router();
import Task from '../models/task'
 // getting all 
  router2.get('/userdetails/:leader', async(req,res) =>{ 
    try{ 
      const tasks = await Task.find({leader:req.params.leader});
       res.json(tasks);
     }catch (err)
     { res.json({message:err}); 
     } 
   });
      //leader api
      //total count
   router2.get('/totalcount/:leader', async(req,res) =>{ 
    try{ 

     
      const count = await Task.count({leader:req.params.leader});
      console.log("COUNT", count)
          res.json({Count:
            count
          })
     }catch (err)
     { res.json({message:err}); 
     } 
   });
   //new count
   router2.get('/newcount/:leader', async(req,res) =>{ 
    try{ 
     
      const count = await Task.count({leader:req.params.leader,status:"new"});
      console.log("COUNT", count)
          res.send({
            count
          })
     }catch (err)
     { res.json({message:err}); 
     } 
   });
   //inprogress
   router2.get('/inprogresscount/:leader', async(req,res) =>{ 
    try{ 
     
      const count = await Task.count({leader:req.params.leader,status:"inprogress"});
      console.log("COUNT", count)
          res.send({
            count
          })
     }catch (err)
     { res.json({message:err}); 
     } 
   });
   //completed
   router2.get('/completedcount/:leader', async(req,res) =>{ 
    try{ 
     
      const count = await Task.count({leader:req.params.leader,status:"completed"});
      console.log("COUNT", count)
          res.send({
            count
          })
     }catch (err)
     { res.json({message:err}); 
     } 
   });
 




   

  //  router.get("/:taskid", async (req, res) => {
  //   try {
  //     const task = await Task.find({taskid:req.params.taskid})
  //     res.json(task);
  //   } catch (err) {
  //     res.json({ message: err });
  //   }
  // });

  
  export default router2;
