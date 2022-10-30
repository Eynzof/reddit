import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'redditx',
  entities: ['dist/entities/*.entity.js'],
  logging: true,
  synchronize: false,
  migrationsRun: false,
  migrations: ['dist/migrations/*.js'],
  migrationsTableName: 'history',
});
