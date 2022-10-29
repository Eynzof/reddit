import { Post } from 'entities/post.entity';
import 'dotenv/config';
import { User } from 'entities/user.entity';
import { DataSource } from 'typeorm';

import path from 'path';
import { Updoot } from 'entities/updoot.entity';
// const isProduction = process.env.STATUS === 'production';
const isProduction = process.env.NODE_ENV === 'production';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: isProduction
    ? process.env.POSTGRES_HOST_PROD
    : process.env.POSTGRES_HOST_DEV,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  migrations: [path.join(__dirname, '../migrations/*')],
  entities: [Post, User, Updoot],
  synchronize: true,
  logging: true,
});
