# Smart Parking System Backend

This project is the backend for a simple smart parking system. It allows users to book and release parking spots. The system uses Node.js, Express.js for the server, SQLite3 as the database, Knex.js for query building, and JWT for authentication.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

-   Node.js
-   npm (Node Package Manager)

### Installing

A step-by-step series of examples that tell you how to get a development environment running.

First, clone the repository:

`git clone [repo-link]
&& cd smart-parking-system` 

Install the necessary packages:

`npm install` 

### Setting Up the Database

Create a SQLite3 database and use Knex.js to handle migrations.

**1. Configure Knex:**

Ensure your `knexfile.js` has the correct settings for your SQLite3 database.

**2. Generate Migration File:**

To create a new migration file to set up your tables:

`npx knex migrate:make setup_parking` 

Modify the generated file in the `/migrations` directory with your table schema.

**3. Run Migrations:**

To update the database with your new schema:

`npx knex migrate:latest` 

### Populating the Database

To populate the database with initial data (20 parking spots):

`-- Execute the following SQL commands in your SQLite3 environment
INSERT INTO parking_spot (name, status) VALUES
('Spot 1', 'vacant'),
...
('Spot 20', 'vacant');` 

### Running the Server

To start the Express.js server:

`node server.js` 

The server should now be running on http://localhost:3000.

### Using the API

**Endpoints:**

-   **Register:** `POST /register`
-   **Login:** `POST /login`
-   **List Parking Spots:** `GET /parking_spots`
-   **Book a Spot:** `POST /book_spot`
-   **Release a Spot:** `POST /release_spot`

### Authentication

This project uses JWT for authentication. Ensure you're sending a valid token obtained from the login endpoint in the `Authorization` header for routes that require authentication.

### Environment Variables

Set the following environment variables:

-   `SECRET_KEY`: A secret key for JWT.

### Running Tests

Explain how to run the automated tests for this system.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/c/link) for details on our code of conduct, and the process for submitting pull requests to us.


## Authors

-   **Anish Karn**

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/c/LICENSE.md) file for details.
