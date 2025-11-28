import { Pool } from 'pg';
import { Module } from '@nestjs/common';

import { DB_DATABASE, DB_PASSWORD, DB_USERNAME, DB_HOST } from './config';

const poolProvider = {
  provide: 'PG_POOL',
  useValue: new Pool({
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
  }),
};

@Module({
  providers: [poolProvider],
  exports: [poolProvider],
})
export class DatabaseModule {}
