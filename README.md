# TravelEase
TravelEase is a full stack web application for travel agencies, developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application enables users to search, book, and manage tours, and includes features such as:  Advanced tour search by city, distance, and group size. Detailed tour information with booking functionality. 

# Project Structure
The project is divided into two main folders: frontend and backend.

## Frontend
The frontend is built with React.js. Follow these instructions to set it up:

1. Navigate to the frontend directory:
  command to write in terminal -> cd frontend

2. Install dependencies:
  npm install

3. Start the development server:
   npm start

The frontend will be available at http://localhost:3000.

4. Usage:

Home Page: Displays the main interface.
Tours Page: Accessible via the header menu, lists all available tours.
Tour Details: Click on a tour title to view details. Here you can book the tour, and the total amount will be calculated dynamically based on the number of guests and the tour price.
Login Page
Register Page
Header section / footer section
Newsletter section

## Backend
The backend is built with Node.js and Express.js, and it connects to MongoDB. Follow these instructions to set it up:

1. Navigate to the backend directory:
   cd backend
   
2. Install dependencies:
   Install the necessary libraries:
     npm install express dotenv mongoose cors cookie-parser

3. Create a .env file in the backend directory with the necessary environment variables. Example .env content:
   MONGO_URI=your_mongodb_connection_string
   PORT=4000
   
4. Start the development server:
    npm run start-dev

5. Backend Setup:

  Express: Framework for building the server.
  dotenv: Loads environment variables from the .env file for sensitive information like database connection strings.
  mongoose: ODM library for MongoDB, used for database interactions.
  cors: Middleware for enabling Cross-Origin Resource Sharing, allowing your frontend to interact with the backend.
  cookie-parser: Middleware for parsing cookies, useful for managing sessions and other cookie-based data.


API Endpoints:

POST /tours: Create a new tour.
DELETE /tours/:id: Delete a tour by ID.
PUT /tours/:id: Update a tour by ID.
GET /tours: Get all tours.
GET /tours/:id: Get a single tour by ID.
