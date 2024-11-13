
---

### Backend README.md

```markdown
# CandidateData - Backend

This is the backend of the CandidateData, built using **Node.js** and **Express.js**. It provides RESTful APIs for managing candidate data and uses **MongoDB** as the database.

---
 
### Project Structure
The project is organized as follows:

controllers/ - Contains controllers for handling API requests.
models/ - Mongoose models for MongoDB collections.
routes/ - Defines API routes for different resources.

### API Endpoints
Here’s a brief overview of the API endpoints:

GET /api/candidates - Fetch all candidates
POST /api/candidates - Add a new candidate





## Tech Stack

- **Node.js** - JavaScript runtime for server-side programming.
- **Express.js** - Web framework for Node.js.
- **MongoDB** - Database for storing candidate information.
- **Mongoose** - ODM for MongoDB.

---

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or above)
- **npm** (comes with Node.js)
- **MongoDB** (either locally or using MongoDB Atlas)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/bnvenky/candidates-backend.git
```
### Install Dependencies
npm install

### Set Up Environment Variables
Create a .env file in the backend directory with the following variables:

PORT=8080
MONGO_URI=mongodb+srv://bnvenkatesheee:Hn4eHx1RbgTOerGK@candidatedata.hk0hg.mongodb.net/?retryWrites=true&w=majority&appName=CandidateData
Replace <your_mongo_database_uri> with your MongoDB connection string. If using MongoDB Atlas, find your URI on the Atlas dashboard.

### Run the Backend
node index.js