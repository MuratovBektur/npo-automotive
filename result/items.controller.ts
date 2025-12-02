// @ts-nocheck
import { Controller, Get, Query, UseInterceptors } from "@nestjs/common";
import { CacheInterceptor, CacheTTL } from "@nestjs/cache-manager"; // время жизни кэша для этого эндпоинта
import { ItemsService } from "./items.service";
import { FindItemsQueryDto } from "./dto/find-item.dto";

@Controller("items")
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(3 * 60 * 1000 * 1000)
  findAll(@Query() query: FindItemsQueryDto) {
    return this.itemsService.findAll(query);
  }
}
