import session from 'express-session';
import connectRedis from 'connect-redis';
import redis from 'redis';

const RedisStore = connectRedis(session);
const url = 'redis://default:redispw@localhost:55001';
const redisClient = redis.createClient({
  url,
});

export default session({
  store: new RedisStore({ client: redisClient }),
  secret: 'mySecret',
  resave: false,
  saveUninitialized: false,
  name: 'sessionId',
  cookie: {
    secure: false, // if true: only transmit cookie over https, in prod, always activate this
    httpOnly: true, // if true: prevents client side JS from reading the cookie
    maxAge: 1000 * 60 * 30, // session max age in milliseconds
    // explicitly set cookie to lax
    // to make sure that all cookies accept it
    // you should never use none anyway
    sameSite: 'lax',
  },
});
