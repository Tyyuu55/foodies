import mongoose from "mongoose";
export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://shivanshtyagi7974:tyagi7974shiv@cluster0.39hognu.mongodb.net/food-del').then(()=>console.log("DB connected")); 
}
