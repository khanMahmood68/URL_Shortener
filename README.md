# URL Shortener Service

## Description

This project is a URL shortener service built using Node.js, Express.js, and MongoDB. It allows users to submit lengthy URLs, generates unique short URLs, and provides secure access through user registration and login functionalities.

## Technologies Used

- Node.js
- Express.js
- MongoDB

## Configuration
-Create a .env file in the project root and add the following configurations:
DB_CONNECTION_STRING=<your-database-connection-string>
SECRET_KEY=<your-secret-key-for-authentication>

# Start the server
npm start

# API Endpoints
- `POST /shorten`: Submit a lengthy URL and get a shortened URL.
- `GET /shorten/:shortUrl`: Access the original URL by visiting the generated short URL.

# User Registration and Login

- `POST /api/user/signup`: For registration name, email and password are required
- `POST /api/user/signin`:For login email and password are required

# Security Considerations
- JWT authentiaction is used for the authentication


## Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd <project-directory>

# Install dependencies
npm install
