import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(@Inject('PG_POOL') private pool: Pool) {}

  async findAll() {
    const result = await this.pool.query('SELECT * FROM items');
    return result.rows as Item[];
  }
}
