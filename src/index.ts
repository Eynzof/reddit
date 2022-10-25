import 'dotenv/config';
import 'reflect-metadata';

import express from 'express';
import 'express-async-errors';

import cors from 'cors';
import { buildTypeDefsAndResolvers, registerEnumType } from 'type-graphql';
import { MyContext } from 'utils/interfaces/context.interface';
import { HelloResolver } from 'resolvers/hello.resolver';
import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginInlineTrace,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import { PostResolver } from 'resolvers/post.resolver';
import { UserResolver } from 'resolvers/user.resolver';

import { COOKIE_NAME, __prod__ } from './constants';
import { sendEmail } from 'utils/sendEmail';

import { createRedisSession } from 'database/redis';
import { AppDataSource } from 'database/postgres';

export let DataSource;

const main = async () => {
  AppDataSource.initialize()
    .then(() => {
      // here you can start to work with your database
    })
    .catch((error) => console.log(error));

  DataSource = AppDataSource;
  // sendEmail('bob@bob.com', 'hello');

  const app = express();

  // setup redis connection
  const { session, redis } = createRedisSession();
  app.use(session);

  try {
    const { typeDefs, resolvers } = await buildTypeDefsAndResolvers({
      resolvers: [HelloResolver, PostResolver, UserResolver],
      validate: false,
    });

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      // csrfPrevention: true,
      // cache: 'bounded',
      // 直接在 localhost 嵌入 apollo studio 的内容，形同graphql playgrounds
      plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
      context: ({ req, res }): MyContext => ({
        req,
        res,
        redis,
      }),
    });

    await server.start();
    // 这一行允许 ApolloStudio 接管
    app.use(
      cors({
        origin: ['http://localhost:3000', 'https://studio.apollographql.com'],
        credentials: true,
      }),
    );
    server.applyMiddleware({
      app,
      cors: false,
    });

    app.listen(4000, () => {
      console.log(`server listening on port 4000`);
    });
  } catch (error) {
    console.error('📌 Could not start server', error);
  }
};
main().catch((err) => {
  console.error(err);
});
