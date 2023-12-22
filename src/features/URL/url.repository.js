import mongoose from "mongoose";
import { urlSchema } from "./url.Schema.js";

// Creating model from Schema
const UrlModel = mongoose.model("Url", urlSchema);

export default class UrlRepository {
  // Method for shortening a URL and saving it to the database
  async shortUrl(url) {
    try {
      // Create an instance of the UrlModel with the provided URL data
      const newUrl = new UrlModel(url);

      // Save the new URL to the database
      await newUrl.save();

      // Return the newly created URL
      return newUrl;
    } catch (error) {
        console.error("Error in shortUrl:", error);
        // Throw the error with a 500 Internal Server Error status code
        throw { status: 500, message: "Internal Server Error" };
    }
  }

  // Method for finding a URL by its short URL
  async urlRedirect(shortUrl) {
    try {
      // Find a URL with the given short URL in the database
      return await UrlModel.findOne({ shortUrl });
    } catch (error) {
        console.error("Error in urlRedirect:", error);
        // Throw the error with a 500 Internal Server Error status code
        throw { status: 500, message: "Internal Server Error" };
    }
  }
}
