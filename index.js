// Importing dotenv file
import './env.js'
// importing express
import express from "express";
// Importing body-parser for parsing json data
import bodyParser from "body-parser";

import userRouter from "./src/features/users/user.routes.js";
import { connectUsingMongoose } from './src/config/mongooseSchema.js';
import urlRouter from './src/features/URL/url.routes.js';
import jwtAuth from './src/middleware/jwt.middleware.js';

const port = 3000;

// Create server
const app = express();

// Body-parser
app.use(bodyParser.json());

// Middleware for user routes
app.use('/api/user',userRouter)

// Middleware for URL routes with JWT authentication
app.use('/shorten',jwtAuth,urlRouter)

// Default request handlers
app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

// Middleware to handle 404 requests
app.use((req, res) => {
  res
    .status(404)
    .send(
      "API not found. Please check our documentation for more information at localhost:3100/api-docs"
    );
});

// listening app
app.listen(port,async (err) => {
  if (err) {
    console.log(`Error to connect server ${err}`);
  }
  console.log(`The server is up on port: ${port}`);
  try {
    await connectUsingMongoose();
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`);
  }
});
