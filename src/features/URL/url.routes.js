import express from "express";
import UrlController from "./url.controller.js";
import jwtAuth from "../../middleware/jwt.middleware.js";

const urlRouter = express.Router();

// Create an instance of the UrlController
const userController = new UrlController();

// Route for URL shortening
urlRouter.post("/", (req, res) => {
  // Call the urlShortener method from UrlController to handle URL shortening
  userController.urlShortner(req, res);
});

// Route for URL redirection
urlRouter.get("/:shortUrl", (req, res) => {
  // Call the urlRedirection method from UrlController to handle URL redirection
  userController.urlRedirection(req, res);
});

export default urlRouter;
