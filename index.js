const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const { mergedResolvers } = require("./resolvers");
const { mergedTypeDef } = require("./typeDef");
const http = require("http");
const {
  ApolloServerPluginDrainHttpServer,
} = require("@apollo/server/plugin/drainHttpServer");
const app = express();
app.use(cors)
app.use(bodyParser.json());
const httpServer = http.createServer(app);

const startAppoloServer = async () => {
  const apolloServer = new ApolloServer({
    typeDefs: mergedTypeDef,
    resolvers: mergedResolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await apolloServer.start();
  app.use("/graphql", expressMiddleware(apolloServer));
};

app.get("/", (req, res, next) => {
  res.send("Hello world");
});

app.listen(3001, () => {
  startAppoloServer();
  console.log("SERVER STARTED ON PORT :" + 3001);
});
