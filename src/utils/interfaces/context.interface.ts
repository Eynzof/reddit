import { Connection, EntityManager, IDatabaseDriver } from '@mikro-orm/core';
import { Request, Response, Express } from 'express';

export interface MyContext {
  req: Request & { session?: Express.Session };
  res: Response;
  em: EntityManager<IDatabaseDriver<Connection>>;
}
