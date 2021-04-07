import 'reflect-metadata';
import { COOKIE_NAME, __prod__ } from './constants';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';
import { PostResolver } from './resolvers/post';
import { UserResolver } from './resolvers/user';
import Redis from 'ioredis';
import session from 'express-session';
import connectRedis from 'connect-redis';
import { MyContext } from './types';
import cors from 'cors';
import { createConnection } from "typeorm";
import { Post } from './entities/Post';
import { User } from './entities/User';
import { sleep } from './utils/sleep';

const main = async () => {
  const connection = createConnection({
    type: 'postgres',
    database: 'notReddit',
    username: 'postgres',
    password: 'postgres',
    logging: true,
    synchronize: true,
    entities: [Post, User]
  });

  // const orm = await MikroORM.init(mikroConfig);
  // FOR TEST PURPOSES: Delete all users
  // await orm.em.nativeDelete(User, {})
  // await orm.getMigrator().up();

  const app = express();

  const RedisStore = connectRedis(session);
  const redis = new Redis();

  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );
  // the order you add express middleware is the order that they will run
  app.use(
    session({
      name: COOKIE_NAME ,
      store: new RedisStore({
        client: redis,
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
    context: ({ req, res }): MyContext => ({ req, res, redis }),
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(4000, () => {
    // The log was showing up above where I wanted it to so I splept it so it showed up later
    sleep( 1000, () => console.log('server started on localhost:4000'));
  });
};

main().catch((err) => {
  console.error(err);
});
