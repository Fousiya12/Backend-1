
import express from "express";
import users from "../models/user";
import bcrypt from 'bcryptjs'
const router = express.Router();

/*      /api/auth/add        */
router.post("/ad", (req, res)=> {
    const { id,name,roleid,uid,email,password,addedby} = req.body
    //console.log(id)
    //console.log(req.body)
    users.findOne({ where: { id: id }}).then(async existing_user => {
        if(existing_user){
            res.send({message: "User already exist"})
        } else {
            const new_user = new users({  
                id,
                name,
                roleid,
                uid,
                email,
                password,
                addedby
            })
            //console.log("hi")
            //console.log(new_user.password)
            /* var bpass = bcrypt.hash(new_user.password,8);
            new_user.password = JSON.stringify(bpass).toString() */
            async function hashIt(pwd){
                const salt = await bcrypt.genSalt(6);
                return await bcrypt.hash(pwd, salt);
              }
            new_user.password = await hashIt(new_user.password);
            console.log(new_user.password);
            // const hash = (new_user, salt, next) => {
            //     bcrypt.hash(new_user.password, salt, (error, newHash) => {
            //     if (error) {
            //     return next(error)
            //     }
            //     new_user.password = newHash
            //     return next()
            //     })
            //     }

            new_user.save().then(response => {
                if(response) {
                    res.send( { message: "Added Successfully" })
                }
            }).catch((err) => {
                res.send(err)
            })
        }
    }).catch((error) => {
        console.log(error)
    })
}) 


export default router