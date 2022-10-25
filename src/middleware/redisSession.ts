import session from 'express-session';
import connectRedis from 'connect-redis';
import Redis from 'ioredis';
import { COOKIE_NAME, __prod__ } from '../constants';

export const createRedisSession = (url: string) => {
  const RedisStore = connectRedis(session);
  const redis = new Redis(url);
  return {
    session: session({
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
    redis,
  };
};
