import { DataSource } from 'typeorm';
import {
  DB_DATABASE,
  DB_TYPE,
  DB_PASSWORD,
  DB_USERNAME,
  DB_HOST,
  DB_PORT,
  DB_SYNCHRONIZE,
} from './config';

export const AppDataSource = new DataSource({
  type: DB_TYPE,
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  entities: [],
  migrations: ['src/migrations/*.ts'],
  synchronize: DB_SYNCHRONIZE,
});
