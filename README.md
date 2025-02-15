# Backend

This is the backend for the TODO application, which provides API endpoints for managing tasks. It's built using Node.js, Express, and MongoDB.

## Overview

The backend is responsible for handling the creation, retrieval, updating, and deletion of tasks. It connects to a MongoDB database to store the tasks data and provides RESTful API endpoints for the frontend to interact with.

**Key Features:**
- **Task Management:** Allows creation, retrieval, updating, and deletion of tasks.
- **Database Integration:** Uses MongoDB to store task data persistently.
- **API Endpoints:** Provides endpoints for CRUD (Create, Read, Update, Delete) operations on tasks.

**How It Works:**
1. **Task Creation:** Users can create new tasks by sending a POST request to the server. The server then saves the task in the MongoDB database.
2. **Retrieve Tasks:** Users can fetch all tasks by sending a GET request. The server queries the database and returns the list of tasks.
3. **Update Tasks:** Users can update task details or toggle their completion status by sending a PUT or PATCH request respectively. The server updates the task in the database.
4. **Delete Tasks:** Users can delete a task by sending a DELETE request. The server removes the task from the database.


