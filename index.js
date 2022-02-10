
import express from "express";
import router from "./routes/auth";
import router1 from "./routes/login";
import router2 from "./routes/leadertasks";
import router3 from "./routes/associatetasks";
import router4 from "./routes/taskreport";
import router5 from "./routes/taskcreation";
import cors from 'cors'
import mongoose  from "mongoose";
 //app.use(express.json());
//import router2 from "./routes/taskauth";
const app = express();
app.use(express.json());
app.use('/login',router1)
app.use(cors({origin:'http://localhost:3000'}));
app.use('/add', router);
app.listen(3002);


app.use('/atasks',router3 )
app.use('/ltasks',router2);
app.use('/tasks',router4) 
app.use('/taskcreation',router5)
app.use('/tasks',router2);
 //Routes // listening
mongoose.connect("mongodb://localhost:27017/userdb1",() =>{ console.log("Connected to DB"); });
 app.listen(3001);

