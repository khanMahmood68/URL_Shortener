import mongoose from "mongoose";

// Defining the user Schema using Mongoose Schema
export const userSchema = new mongoose.Schema({
    name:String,
    email:{type:String, unique:true},// user's email set as unique
    password:String
})