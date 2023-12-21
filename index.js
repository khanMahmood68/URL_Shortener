// importing express
import express from "express";

import bodyParser from "body-parser";
import userRouter from "./src/features/users/user.routes.js";

const port = 3000;

// Create server
const app = express();

// Body-parser
app.use(bodyParser.json());

// All request related to user
app.use('/api/user',userRouter)

// Default request handlers
app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

// listening app
app.listen(port, (err) => {
  if (err) {
    console.log(`Error to connect server ${err}`);
  }
  console.log(`The server is up on port: ${port}`);
});
