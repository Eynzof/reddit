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

import session from 'express-session';
import connectRedis from 'connect-redis';

import Redis from 'ioredis';
import { COOKIE_NAME, __prod__ } from './constants';
import { sendEmail } from 'utils/sendEmail';
import { DataSource } from 'typeorm';
import { Post } from 'entities/post.entity';
import { User } from 'entities/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'reddit2',
  entities: [Post, User],
  synchronize: true,
  logging: true,
});

const main = async () => {
  AppDataSource.initialize()
    .then(() => {
      // here you can start to work with your database
    })
    .catch((error) => console.log(error));

  // sendEmail('bob@bob.com', 'hello');

  const app = express();

  // 构造 Redis 客户端
  // 相当于 let RedisStore = require("connect-redis")(session)
  const RedisStore = connectRedis(session);
  const redis = new Redis('redis://default:redispw@localhost:6379/');

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
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
      secret: 'masoniclab',
      resave: false,
      saveUninitialized: false,
    }),
  );

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
      // 直接在 localhost 嵌入 apollo studio 的内容，形同graphql playground
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
