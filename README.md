#Express Apollo Server with GraphQL

#Overview
This project sets up an Express server with Apollo Server for GraphQL. It provides a simple starting point for building GraphQL APIs using Node.js and Express.

#Installation
To get started, clone this repository and navigate to the project directory in your terminal. Then, run the following command to install the dependencies:

npm install

#Development
Once the dependencies are installed, you can start the development server by running:

npm run dev
This will start the Express server and expose the GraphQL endpoint.

#GraphQL Endpoint
The GraphQL endpoint will be available at 
http://localhost:3001/graphql by default. 
You can use tools like GraphiQL or Apollo Studio to interact with the API.

#Folder Structure
src/: Contains the source code for the server.

index.js: Entry point for the server.

typeDef: It is a folder which contains typeDef files which Defines the GraphQL schema.

resolvers: It is a folder which contains resolver files which Contains the resolver functions for GraphQL queries and mutations.

package.json: Lists project dependencies and defines scripts for running the server.

#Usage
Feel free to modify the schema and resolvers to suit your application's needs. You can add more types, queries, and mutations as required.
