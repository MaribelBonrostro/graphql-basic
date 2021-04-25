import "dotenv/config";
import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createConnections } from "typeorm";
import cookieParser from "cookie-parser";
import { resolvers } from "./schema/resolvers";
import { typeDefs } from "./schema/typeDefs";

(async () => {
  const app = express();

  const port = process.env.PORT || 3002;
  app.use(cookieParser());
  app.listen(port, () => {
    console.log("running at port 4000");
  });

  app.get("/", (_req, res) => {
    res.send("cool it works!");
  });

  await createConnections();
  // await createConnections();
  const apolloServer = new ApolloServer({
    resolvers,
    typeDefs,
    context: ({ req, res }) => ({ req, res })
  });

  apolloServer.applyMiddleware({ app });
})();
