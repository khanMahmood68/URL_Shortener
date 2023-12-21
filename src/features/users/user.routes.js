import express from "express";
import UserController from "./user.controller.js";
import jwtAuth from "../../middleware/jwt.middleware.js";

const userRouter = express.Router();

const userController = new UserController();

userRouter.get("/", jwtAuth, userController.getAllUser);
userRouter.post("/signup", userController.signUp);
userRouter.post("/signin", userController.signIn);

export default userRouter;
