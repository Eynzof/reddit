import 'dotenv/config';
import 'reflect-metadata';

import express from 'express';
import 'express-async-errors';

import { MikroORM } from '@mikro-orm/core';
import { PublisherType } from 'contracts/enums/publisherType.enum';
import cors from 'cors';
import ormConfig from 'orm.config';
import { buildTypeDefsAndResolvers, registerEnumType } from 'type-graphql';
import { MyContext } from 'utils/interfaces/context.interface';
import { HelloResolver } from 'resolvers/hello.resolver';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginInlineTrace } from 'apollo-server-core';
import { PostResolver } from 'resolvers/post.resolver';
import { UserResolver } from 'resolvers/user.resolver';

import session from 'express-session';
import connectRedis from 'connect-redis';

import Redis from 'ioredis';
import { COOKIE_NAME, __prod__ } from './constants';
import { sendEmail } from 'utils/sendEmail';
import { createConnection, DataSource } from 'typeorm';

// TODO: create service for this
registerEnumType(PublisherType, {
  name: 'PublisherType',
  description: 'Type of the publisher',
});

const main = async () => {
  const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'reddit2',
    entities: [],
    synchronize: true,
    logging: true,
  });

  AppDataSource.initialize()
    .then(() => {
      // here you can start to work with your database
    })
    .catch((error) => console.log(error));

  // sendEmail('bob@bob.com', 'hello');

  const orm = await MikroORM.init(ormConfig);

  // await orm.em.nativeDelete(User, {});
  const migrator = await orm.getMigrator();

  await migrator.up();
  // try {
  //   const migrator = orm.getMigrator();
  //   const migrations = await migrator.getPendingMigrations();
  //   if (migrations && migrations.length > 0) {
  //     await migrator.up();
  //   }
  // } catch (error) {
  //   console.error('📌 Could not connect to the database', error);
  //   throw Error(error);
  // }

  const app = express();
  // 这一行允许 ApolloStudio 接管
  app.use(
    cors({
      origin: ['http://localhost:3000', 'https://studio.apollographql.com'],
      credentials: true,
    }),
  );
  // 构造 Redis 客户端
  // 相当于 let RedisStore = require("connect-redis")(session)
  const RedisStore = connectRedis(session);
  const redis = new Redis('redis://default:redispw@localhost:55000/');

  // const redisClient = redis.createClient({
  //   legacyMode: true,
  //   url: 'redis://default:redispw@localhost:55000',
  // });

  // [node.js - Redis NodeJs server error,client is closed - Stack Overflow](https://stackoverflow.com/questions/70185436/redis-nodejs-server-error-client-is-closed)
  // await redis.connect();

  // app.set('trust proxy', true);

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
      plugins: [ApolloServerPluginInlineTrace()],
      context: ({ req, res }): MyContext => ({
        em: orm.em,
        req,
        res,
        redis,
      }),
    });

    await server.start();

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
