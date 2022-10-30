import 'dotenv/config';
import 'reflect-metadata';

import express from 'express';
import 'express-async-errors';

import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import { HelloResolver } from 'resolvers/hello.resolver';
import { PostResolver } from 'resolvers/post.resolver';
import { UserResolver } from 'resolvers/user.resolver';
import { buildTypeDefsAndResolvers } from 'type-graphql';
import { MyContext } from 'utils/interfaces/context.interface';

import { AppDataSource } from 'database/postgres';
import { createRedisSession } from 'database/redis';
import { DataSource } from 'typeorm';
import { createUpdootLoader } from 'utils/createUpdootLoader';
import { createUserLoader } from 'utils/createUserLoader';

export let IDataSource: DataSource;

// now you can use myDataSource anywhere in your application
const main = async () => {
  console.log('--------------------');
  console.log('process.env.NODE_ENV', process.env.NODE_ENV);
  console.log('REDIS_URL', process.env.REDIS_URL);
  console.log('POSTGRES_URL', process.env.DATABASE_URL);
  console.log('--------------------');
  // console.log(process.env.NODE_ENV === 'production');

  AppDataSource.initialize()
    .then(() => {
      // here you can start to work with your database
      AppDataSource.runMigrations();
    })
    .catch((error) => console.log(error));

  IDataSource = AppDataSource;

  // sendEmail('bob@bob.com', 'hello');

  const app = express();

  // setup redis connection
  const { session, redis } = createRedisSession();
  app.use(session);

  // for nginx proxy
  app.set('proxy', 1);

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
      // plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
      // plugins: [ApolloServerPluginLandingPageLocalDefault()],
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
      context: ({ req, res }): MyContext => ({
        req,
        res,
        redis,
        userLoader: createUserLoader(),
        updootLoader: createUpdootLoader(),
      }),
    });

    await server.start();
    // 这一行允许 ApolloStudio 接管
    // app.use(
    //   cors({
    //     origin: ['http://localhost:3000', 'https://studio.apollographql.com'],
    //     credentials: true,
    //   }),
    // );

    server.applyMiddleware({
      app,
      cors: {
        origin: process.env.CORS_ORIGIN,
        credentials: true,
      },
    });

    app.listen(parseInt(process.env.PORT), () => {
      console.log(`server listening on port 4000`);
    });
  } catch (error) {
    console.error('📌 Could not start server', error);
  }
};
main().catch((err) => {
  console.error(err);
});
