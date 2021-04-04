import 'reflect-metadata';
import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import mikroConfig from './mikro-orm.config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';
import { PostResolver } from './resolvers/post';
import { UserResolver } from './resolvers/user';
import redis from 'redis';
import session from 'express-session';
import connectRedis from 'connect-redis';
import { MyContext } from './types';
import cors from 'cors';

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();

  const app = express();

  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();

  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );
  // the order you add express middleware is the order that they will run
  app.use(
    session({
      name: 'realmsid',
      store: new RedisStore({
        client: redisClient,
        disableTouch: true, // this keeps sessions alive forever
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // in miliseconds, so 10 years of time total that the cookie is valid
        httpOnly: true,
        sameSite: 'lax', // https://owasp.org/www-community/SameSite
        secure: __prod__, // secure means only cookie is valid in https, in dev we dont have that so turn on only in prod
      },
      saveUninitialized: false,
      secret: 'ibalwbvlwVBWlcwueclbwVBL',
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({ em: orm.em, req, res }),
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(4000, () => {
    console.log('server started on localhost:4000');
  });
};

main().catch((err) => {
  console.error(err);
});
