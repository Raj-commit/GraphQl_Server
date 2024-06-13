//@INFO: Define modal and then add type as query for to get data and Mutation to post data

const userTypeDef = `#graphql
  type User {
    _id: ID!
    username: String!
    name: String!
    password: String!
    profilePicture: String
    gender: String!
  }

  type Query {
    userDetails: [User]
    userById(id: ID!): User
    usersByGender(gender: String!): [User]
  }

  type Mutation {
    addUser(username: String!, name: String, profilePicture: String, gender: String):User
  }
`;
module.exports = userTypeDef;
