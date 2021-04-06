import { Connection, EntityManager, IDatabaseDriver } from '@mikro-orm/core';
import { Request, Response } from 'express';
import { Session } from 'express-session';
import { Redis } from "ioredis";

// TODO: I do not understand what Ive done here, it came from a blend of this stack overflow link: https://stackoverflow.com/questions/65108033/property-user-does-not-exist-on-type-session-partialsessiondata
// It appears to be working the way I want, come back later and understand why
// Pretty sure I extended the Session class with a new attribute called userId that I can then set, does this mean I must do this for anything I want to add to the session?
declare module 'express-session' {
  interface Session {
    userId: number;
  }
}

export type MyContext = {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
  req: Request & { session: Session }; // & in typescript joins the two types
  redis: Redis;
  res: Response;
};
