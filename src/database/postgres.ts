import { Post } from 'entities/post.entity';
import 'dotenv/config';
import { User } from 'entities/user.entity';
import { DataSource } from 'typeorm';

import path from 'path';
import { Updoot } from 'entities/updoot.entity';
const isProduction = process.env.STATUS === 'production';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: isProduction ? 'host.docker.internal' : 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'reddit',
  migrations: [path.join(__dirname, '../migrations/*')],
  entities: [Post, User, Updoot],
  synchronize: true,
  logging: true,
});
