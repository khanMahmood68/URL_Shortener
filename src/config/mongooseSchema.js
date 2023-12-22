import mongoose from "mongoose";

export const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Mongodb using mongoose");
  } catch (error) {
    console.log("Error while connecting to db");
    console.log(error);
  }
};
