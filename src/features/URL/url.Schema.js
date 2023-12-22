import mongoose from "mongoose";

// Define the schema for URL documents
export const urlSchema = new mongoose.Schema({
  originalUrl: String,
  shortUrl: String,
  userId: String,
});
