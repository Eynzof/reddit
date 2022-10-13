import express from 'express';
import 'express-async-errors';

import { Connection, IDatabaseDriver, MikroORM } from '@mikro-orm/core';
import { PublisherType } from 'contracts/enums/publisherType.enum';
import cors from 'cors';
import { Server } from 'http';
import ormConfig from 'orm.config';
import { AuthorResolver } from 'resolvers/author.resolver';
import { BookResolver } from 'resolvers/book.resolver';
import { buildTypeDefsAndResolvers, registerEnumType } from 'type-graphql';
import { MyContext } from 'utils/interfaces/context.interface';
import { HelloResolver } from 'resolvers/hello.resolver';
import { Post } from 'entities/post.entity';
import { ApolloServer } from 'apollo-server-express';

import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { PostResolver } from 'resolvers/post.resolver';
import { UserResolver } from 'resolvers/user.resolver';

import session from 'express-session';
import connectRedis from 'connect-redis';

import parseurl from 'parseurl';

// 不能写成import redis from 'redis';
// it just depends on how the package is made and/or has been updated.
// older packages that use module.exports VS the newer es6 import / export statements often need to be imported using *.
// if you use typescript, often time you will get a warning saying something like [package name] doesn't have a default export
// [node.js - Redis is in docker undefined - Stack Overflow](https://stackoverflow.com/questions/64799055/redis-is-in-docker-undefined)

import * as redis from 'redis';
import { __prod__ } from './constants';

// import { resolvers, typeDefs } from 'minimal-apollo-setup';

// TODO: create service for this
registerEnumType(PublisherType, {
    name: 'PublisherType',
    description: 'Type of the publisher',
});

export default class Application {
    public orm: MikroORM<IDatabaseDriver<Connection>>;
    public host: express.Application;
    public server: Server;

    public connect = async (): Promise<void> => {
        try {
            this.orm = await MikroORM.init(ormConfig);
            const migrator = this.orm.getMigrator();
            const migrations = await migrator.getPendingMigrations();
            if (migrations && migrations.length > 0) {
                await migrator.up();
            }
        } catch (error) {
            console.error('📌 Could not connect to the database', error);
            throw Error(error);
        }
    };

    private insertTestData = async () => {
        await this.orm.em.nativeInsert(Post, { title: 'first' });
    };

    public init = async (): Promise<void> => {
        const app = express();

        // 这一行允许 ApolloStudio 接管
        app.use(cors());

        // 相当于 let RedisStore = require("connect-redis")(session)
        const RedisStore = connectRedis(session);

        // 构造 Redis 客户端
        const url = 'redis://default:redispw@localhost:55001';
        const redisClient = redis.createClient({
            legacyMode: true,
            url: url,
        });

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
                    secure: false, // if true: only transmit cookie over https, in prod, always activate this
                    httpOnly: true, // if true: prevents client side JS from reading the cookie
                    maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // session max age in milliseconds
                    // explicitly set cookie to lax
                    // to make sure that all cookies accept it
                    // you should never use none anyway
                    sameSite: 'lax',
                },
            }),
        );

        app.use(function (req, res, next) {
            if (!req.session.views) {
                req.session.views = {};
            }

            // get the url pathname
            const pathname = parseurl(req)?.pathname;

            // count the views
            req.session.views[pathname!] =
                (req.session.views[pathname!] || 0) + 1;

            next();
        });

        app.get('/', function (req, res, next) {
            res.send(
                'you viewed this page ' + req.session.views!['/foo'] + ' times',
            );
        });

        // const RedisStore = connectRedis(session);

        // const url = 'redis://default:redispw@localhost:55001';
        // const redisClient = redis.createClient({
        //     url,
        // });

        // redisClient.connect().catch(console.error);
        // redisClient.on('error', console.error);
        // app.use(
        //     session({
        //         name: 'qid',
        //         store: new RedisStore({
        //             client: redisClient,
        //             disableTouch: true,
        //         }),
        //         cookie: {
        //             path: '/',
        //             maxAge: 1000 * 60 * 60 * 24 * 30 * 10, // 10 years
        //             httpOnly: true,
        //             sameSite: 'lax',
        //             secure: !__prod__,
        //         },
        //         saveUninitialized: false,
        //         secret: 'masoniclab',
        //         resave: false,
        //     }),
        // );

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
                    em: this.orm.em.fork(),
                    req,
                    res,
                }),
            });

            // succeeded
            this.insertTestData();

            const port = 4000;

            await server.start();
            server.applyMiddleware({
                app,
            });

            app.listen(port, () => {
                console.log(`server listening on port ${port}`);
            });
        } catch (error) {
            console.error('📌 Could not start server', error);
        }
    };
}
