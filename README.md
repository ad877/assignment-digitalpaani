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
   
    PORT_BOOK_MANAGEMENT= port <br>
    DEFAULT_GRAPHQL_PATH="/graphql"    //this endpoint only works if user is authenticated <br>
    ALLOWED_GRAPHQL_PATH= "/public"    //this endpoint exposes api's which can be public <br>
    NODE_ENV= "develop" <br>
    DATABASE_URL = databaseUri <br>
    JWT_SECRET = yoursecret <br>
   
5. Start the server using "npm start"


## Usage

After starting the server, you can open your below the endpoints which will open up the GraphQL playground in your browser and start making queries and mutations.<br>

endpoints : <br>
    http://localhost:<port>/graphql <br>
    http://localhost:<port>/public

## Mutations and Queries [endpoints]

### Graphql input parameters

1. addBooksInput : Represents the input for the addBooks mutation. It includes fields for author, isbn, numberOfPages, publicationDate, and title. All fields are required.

### Queries

1.getBooks : Adds new books. It takes an array of addBooksInput and returns an array of the added books.

### Mutations

1.addBooks : Adds new books. It takes an array of addBooksInput and returns an array of the added books. <br>
2.deleteBook : Deletes a book based on the provided isbn and title. It returns the deleted book. <br>
3.updateBook : Updates a book based on the provided author, isbn, numberOfPages, publicationDate, and title. The isbn is required while the other fields are optional. It returns the updated book. <br>
4.userSignUp : Registers a new user with the provided email, name, and password. All fields are required. It returns a UserSignUpResponse. <br>
5.login : Authenticates a user based on the provided email and password. It returns an authPayload which includes a JWT for the authenticated user. <br>

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Arpit Dhunna - arpitdhunna@gmail.com<br>
Project Link: https://github.com/ad877/assignment-digitalpaani
