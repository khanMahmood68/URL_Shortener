import express from "express";
import UserController from "./user.controller.js";

const userRouter = express.Router();


// Create an instance of the UserController
const userController = new UserController();

// Route for user signup
userRouter.post("/signup", (req, res) => {

    // Call the signUp method from UserController to handle the signup logic
    userController.signUp(req, res);
  });

// Route for user signin
userRouter.post("/signin",  (req, res) => {

    // Call the signIn method from UserController to handle the signin logic
    userController.signIn(req, res);
  });

export default userRouter;
