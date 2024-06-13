const { mergeTypeDefs } = require("@graphql-tools/merge");
const user = require("./user.typeDef");

const mergedTypeDef = mergeTypeDefs([user]);

module.exports = {
  mergedTypeDef,
};
