// laboratory.controller.ts
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { LaboratoryService } from './laboratory.service';
import { CreateLaboratoryDto, UpdateLaboratoryDto } from './laboratory.dto';
import { Laboratory } from './laboratory.entity';

@Controller('laboratory')
export class LaboratoryController {
  constructor(private readonly laboratoryService: LaboratoryService) {}

  @Get()
  async findAll(): Promise<Laboratory[]> {
    return this.laboratoryService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Laboratory> {
    return this.laboratoryService.findById(id);
  }

  @Post()
  async create(@Body() createLaboratoryDto: CreateLaboratoryDto): Promise<Laboratory> {
    return this.laboratoryService.create(createLaboratoryDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateLaboratoryDto: UpdateLaboratoryDto): Promise<Laboratory> {
    return this.laboratoryService.update(id, updateLaboratoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Laboratory> {
    return this.laboratoryService.remove(id);
  }
}
