import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { Item } from './entities/item.entity';
import { FindItemsQueryDto } from './dto/find-item.dto';

@Injectable()
export class ItemsService {
  constructor(@Inject('PG_POOL') private pool: Pool) {}

  async findAll(query: FindItemsQueryDto) {
    const { limit, offset } = query;

    const SQL_Query = ['SELECT * FROM items'];
    const params: any[] = [];

    if (limit !== undefined) {
      params.push(limit);
      SQL_Query.push(`LIMIT $${params.length}`);
    }

    if (offset !== undefined) {
      params.push(offset);
      SQL_Query.push(`OFFSET $${params.length}`);
    }

    const result = await this.pool.query(SQL_Query.join(' '), params);
    return result.rows as Item[];
  }
}
