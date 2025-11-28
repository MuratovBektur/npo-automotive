import { Controller, Get, Query } from '@nestjs/common';
import { ItemsService } from './items.service';
import { FindItemsQueryDto } from './dto/find-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(@Query() query: FindItemsQueryDto) {
    return this.itemsService.findAll(query);
  }
}
