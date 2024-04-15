// human-resources.controller.ts
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { HumanResourcesService } from './human-resources.service';
import { CreateHumanResourcesDto, UpdateHumanResourcesDto } from './human-resources.dto';
import { HumanResources } from './human-resources.entity';

@Controller('human-resources')
export class HumanResourcesController {
  constructor(private readonly humanResourcesService: HumanResourcesService) {}

  @Get()
  async findAll(): Promise<HumanResources[]> {
    return this.humanResourcesService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<HumanResources> {
    return this.humanResourcesService.findById(id);
  }

  @Post()
  async create(@Body() createHumanResourcesDto: CreateHumanResourcesDto): Promise<HumanResources> {
    return this.humanResourcesService.create(createHumanResourcesDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateHumanResourcesDto: UpdateHumanResourcesDto): Promise<HumanResources> {
    return this.humanResourcesService.update(id, updateHumanResourcesDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<HumanResources> {
    return this.humanResourcesService.remove(id);
  }
}
