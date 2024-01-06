const express = require ("express");
const mongoose = require ("mongoose");
const userRouter = require("./src/routes/userRoutes");
const noteRouter = require("./src/routes/noteroutes");

const app = express();

app.use(express.json());

app.use((req,res,next)=>{
    console.log("HTTP Method - " + req.method + ", URL -"+ req.url);
    next();
})

app.use("/user",userRouter);
app.use("/note",noteRouter);


mongoose.connect('mongodb://0.0.0.0:27017/booksLibrary')

.then(()=>{
    console.log("Mongodb is connected")
})
.catch((error)=>{
console.log(error);
})
app.listen(3000,()=>{
    console.log("App is running");
})