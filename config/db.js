const mongoose=require("mongoose");
const env=require("dotenv");
env.config();
mongoose.set('strictQuery', false);
const url="mongodb+srv://saurabh:saurabh@cluster0.juiju7v.mongodb.net/mock11?retryWrites=true&w=majority"
const connection=mongoose.connect(url);

module.exports=connection
    
