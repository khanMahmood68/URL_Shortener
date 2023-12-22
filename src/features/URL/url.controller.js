
import UrlRepository from "./url.repository.js";
import shortid from "shortid";

export default class UrlController {
  constructor() {
    // Create an instance of UrlRepository to interact with the database
    this.urlRepository = new UrlRepository();
  }

  async urlShortner(req, res) {
    try {

        // Extract the original URL from the request body
      const { originalUrl } = req.body;
      // Extracted from the JWT token during authentication
      const userId = req.userId;

      // Generate a short URL using the shortid library
      const shortUrl = shortid.generate();

      // Create a new instance of UrlModel with the provided data
    const newUrl = {
        originalUrl, shortUrl,userId
    }

      // Save the new URL to the database
      await this.urlRepository.shortUrl(newUrl);

      // Respond with the newly created URL
      return res.status(201).send(newUrl);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async urlRedirection(req, res) {
    try {

        // Extract the short URL parameter from the request
        const {shortUrl} = req.params;

        // Find the URL in the database based on the short URL
        const url = await this.urlRepository.urlRedirect(shortUrl)

         // Check if the URL is found
        if (!url) {
            // Respond with a 404 Not Found if the URL is not found
            return res.status(404).json({ error: 'URL not found' });
          }
           // Redirect to the original URL
          res.redirect(url.originalUrl)
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
