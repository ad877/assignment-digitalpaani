# BOOK MANAGEMENT SYSTEM WITH CRUD OPERATIONS USING GRAPQHL WITH Nexus for Digital-Paani Assignment.

This project demonstrates how to implement crud operation, user authentication in a GraphQL API using Nexus and JSON Web Tokens (JWT).

## Features

- User registration
- User login
- JWT for user authentication
- Add Books
- Update Book
- Delete Book
- fetch all books
- fetch books by different filter (title,author etc.)
- Input Validation
- added helmet library for secuirity headers
- use of bcrypt for password encryption

## Technologies Used

- [Nexus](https://nexusjs.org/)
- [GraphQL](https://graphql.org/)
- [JWT](https://jwt.io/)
- [Mongoose](https://mongoosejs.com/)

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository
2. Install NPM packages using "npm install"
3. Create a `.env` file in the root directory and add the following:
    PORT_BOOK_MANAGEMENT= <port>
    DEFAULT_GRAPHQL_PATH="/graphql"   // this endpoint only works if user is authenticated
    ALLOWED_GRAPHQL_PATH= "/public"   // this endpoint exposes api's which can be public
    NODE_ENV= "develop"
    DATABASE_URL = <databaseUri>
    JWT_SECRET = yoursecret
4. Start the server using "npm start"


## Usage

After starting the server, you can open your below the endpoints which will open up the GraphQL playground in your browser and start making queries and mutations.

endpoints : 
    http://localhost:<port>/graphql
    http://localhost:<port>/public

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Arpit Dhunna - arpitdhunna@gmail.com
Project Link: https://github.com/ad877/assignment-digitalpaani
