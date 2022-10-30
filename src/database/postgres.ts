import { Post } from 'entities/post.entity';
import 'dotenv/config';
import { User } from 'entities/user.entity';
import { DataSource } from 'typeorm';

import path from 'path';
import { Updoot } from 'entities/updoot.entity';
import { __prod__ } from '../constants';

export const POSTGRES_URL = __prod__
  ? process.env.POSTGRES_URL_PROD
  : process.env.POSTGRES_URL_DEV;
export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  migrations: [path.join(__dirname, '../migrations/*')],
  entities: [Post, User, Updoot],
  // synchronize: true,
  logging: true,
});
