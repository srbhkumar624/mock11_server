const express=require("express");
const {connection}=require("./config/db");
const{user}=require("./routes/auth_router");
const {authenticate}=require("./middleware/authentication")
const app = express();
const cors=require("cors");


app.get("/",(req,res)=>{
    res.send("WELCOME TO MOCK!!")
})
app.use(express.json());
app.use(cors({
    origin:"*"
}))

app.use("/users",user)
app.use(authenticate)


app.listen(8080, ()=>{
    try{
         connection
    }catch(err){
        console.log(err)
    }
    console.log("Port is listing on http://localhost:8080")
})