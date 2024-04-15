// hospital.controller.ts
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { CreateHospitalDto, UpdateHospitalDto } from './hospital.dto';
import { Hospital } from './hospital.entity';

@Controller('hospital')
export class HospitalController {
  constructor(private readonly hospitalService: HospitalService) {}

  @Get()
  async findAll(): Promise<Hospital[]> {
    return this.hospitalService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Hospital> {
    return this.hospitalService.findById(id);
  }

  @Post()
  async create(@Body() createHospitalDto: CreateHospitalDto): Promise<Hospital> {
    return this.hospitalService.create(createHospitalDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateHospitalDto: UpdateHospitalDto): Promise<Hospital> {
    return this.hospitalService.update(id, updateHospitalDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Hospital> {
    return this.hospitalService.remove(id);
  }
}
