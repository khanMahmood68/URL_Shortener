import mongoose from "mongoose";
import { userSchema } from "./user.Schema.js";

// Creating model from Schema
const UserModel = mongoose.model("User", userSchema);

// UserRepository class for handling user-related database operations
export default class UserRepository {
  // Method for user signup
  async signup(user) {
    try {
      // Create an instance of the UserModel using the provided user data
      const newUser = new UserModel(user);

      // Save the new user to the database
      await newUser.save();

      // Return the newly created user
      return newUser;
    } catch (error) {
      console.log(error);
    }
  }

  // Method for user signin
  async signin(email, password) {
    try {
      // Find a user with the given email and password in the database
      return await UserModel.findOne({ email, password });
    } catch (error) {
      console.log(error);
    }
  }

  // Method to find a user by email
  async findByEmail(email) {
    try {
      // Find a user with the given email in the database
      return await UserModel.findOne({ email });
    } catch (error) {
      console.log(error);
    }
  }
}
