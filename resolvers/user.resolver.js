const { users } = require("../dummyData/data");

const userResolver = {
  Query: {
    userDetails: () => {
      return users;
    },
    userById: (_, { id }) => {
      console.log(
        users.filter((val) => val._id == id),
        "ID"
      );
      return users.filter((val) => val._id == id)[0];
    },
    usersByGender: (parent, { gender }, context) => {
      return users.filter(
        (val) => val.gender.toLocaleLowerCase() == gender.toLocaleLowerCase()
      );
    },
  },

  Mutation: {
    addUser: (_, args) => {
      console.log({...args})
      return { ...args };
    },
  },
};
module.exports = userResolver;
