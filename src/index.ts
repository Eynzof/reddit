import 'dotenv/config';
import 'reflect-metadata';

import express from 'express';
import 'express-async-errors';

import { MikroORM } from '@mikro-orm/core';
import { PublisherType } from 'contracts/enums/publisherType.enum';
import cors from 'cors';
import ormConfig from 'orm.config';
import { AuthorResolver } from 'resolvers/author.resolver';
import { BookResolver } from 'resolvers/book.resolver';
import { buildTypeDefsAndResolvers, registerEnumType } from 'type-graphql';
import { MyContext } from 'utils/interfaces/context.interface';
import { HelloResolver } from 'resolvers/hello.resolver';
import { ApolloServer } from 'apollo-server-express';

import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { PostResolver } from 'resolvers/post.resolver';
import { UserResolver } from 'resolvers/user.resolver';

import session from 'express-session';
import connectRedis from 'connect-redis';

import * as redis from 'redis';
import { __prod__ } from './constants';

// TODO: create service for this
registerEnumType(PublisherType, {
  name: 'PublisherType',
  description: 'Type of the publisher',
});

const main = async () => {
  let orm = null;
  try {
    orm = await MikroORM.init(ormConfig);
    const migrator = orm.getMigrator();
    const migrations = await migrator.getPendingMigrations();
    if (migrations && migrations.length > 0) {
      await migrator.up();
    }
  } catch (error) {
    console.error('📌 Could not connect to the database', error);
    throw Error(error);
  }

  const app = express();
  // 这一行允许 ApolloStudio 接管
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    }),
  );

  // 相当于 let RedisStore = require("connect-redis")(session)
  const RedisStore = connectRedis(session);

  // 构造 Redis 客户端
  const url = 'redis://default:redispw@localhost:55000';
  const redisClient = redis.createClient({
    legacyMode: true,
    url: url,
  });

  // [node.js - Redis NodeJs server error,client is closed - Stack Overflow](https://stackoverflow.com/questions/70185436/redis-nodejs-server-error-client-is-closed)
  await redisClient.connect();

  app.set('trust proxy', true);

  app.use(
    session({
      store: new RedisStore({
        client: redisClient,
      }),
      secret: 'masoniclab',
      resave: false,
      saveUninitialized: false,
      name: 'qid',
      cookie: {
        // keep this false, or the cookie won't be saved to local browser,
        // which caused the view counter not working properly
        secure: false, // if true: only transmit cookie over https, in prod, always activate this
        httpOnly: true, // if true: prevents client side JS from reading the cookie
        maxAge: 1000 * 60 * 30, // session max age in milliseconds
        // explicitly set cookie to lax
        // to make sure that all cookies accept it
        // you should never use none anyway
        sameSite: 'lax',
      },
    }),
  );

  try {
    const { typeDefs, resolvers } = await buildTypeDefsAndResolvers({
      resolvers: [
        BookResolver,
        AuthorResolver,
        HelloResolver,
        PostResolver,
        UserResolver,
      ],
    });

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      csrfPrevention: true,
      cache: 'bounded',
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
      context: ({ req, res }): MyContext => ({
        em: orm.em,
        req,
        res,
      }),
    });

    const port = 4000;

    await server.start();
    server.applyMiddleware({
      app,
      cors: false,
    });

    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  } catch (error) {
    console.error('📌 Could not start server', error);
  }
};
main().catch((err) => {
  console.error(err);
});
