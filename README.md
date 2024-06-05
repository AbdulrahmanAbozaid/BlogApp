# BlogApp

BlogApp is a simple blogging platform built with Node.js, Express, and MongoDB. This project demonstrates basic CRUD operations, user authentication, and file uploads.

## Features

- User registration and authentication
- Create, read, update, and delete blog posts
- File uploads for blog images
- API documentation with Swagger

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [MongoDB](https://www.mongodb.com/) (running locally or a cloud instance)

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/AbdulrahmanAbozaid/BlogApp.git
    cd BlogApp
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following variables:

    ```plaintext
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/blogapp
    JWT_SECRET=your_jwt_secret
    ```

    - `PORT`: The port number on which the server will run.
    - `MONGO_URI`: The connection string for your MongoDB database.
    - `JWT_SECRET`: A secret key for signing JSON Web Tokens.

4. **Run the server:**

    ```bash
    npm start
    ```

    The server will start on `http://localhost:8081`.

5. **View API documentation:**

    Open your browser and navigate to `http://localhost:8081/api-docs` to view the Swagger API documentation.

## Scripts

- `npm start`: Starts the server.
- `npm run dev`: Starts the server with nodemon for development.
- `npm test`: Runs tests (if available).

## Project Structure

- `config/`: Configuration files (e.g., Swagger setup).
- `controllers/`: Request handlers for different routes.
- `models/`: Mongoose models for MongoDB.
- `routes/`: Express routes for different API endpoints.
- `middleware/`: Custom middleware functions.
- `uploads/`: Directory for uploaded files.

## License

This project is licensed under the MIT License.
