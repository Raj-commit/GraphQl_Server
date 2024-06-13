const { mergeResolvers } = require("@graphql-tools/merge");
const userResolver = require("./user.resolver.js");

const mergedResolvers = mergeResolvers([userResolver]);

module.exports = {
  mergedResolvers
};
