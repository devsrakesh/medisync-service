// pharmacy.controller.ts
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PharmacyService } from './pharmacy.service';
import { CreatePharmacyDto, UpdatePharmacyDto } from './dto';
import { Pharmacy } from './pharmacy.entity';

@Controller('pharmacy')
export class PharmacyController {
  constructor(private readonly pharmacyService: PharmacyService) {}

  @Get()
  async findAll(): Promise<Pharmacy[]> {
    return this.pharmacyService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Pharmacy> {
    return this.pharmacyService.findById(id);
  }

  @Post()
  async create(@Body() createPharmacyDto: CreatePharmacyDto): Promise<Pharmacy> {
    return this.pharmacyService.create(createPharmacyDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePharmacyDto: UpdatePharmacyDto): Promise<Pharmacy> {
    return this.pharmacyService.update(id, updatePharmacyDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Pharmacy> {
    return this.pharmacyService.remove(id);
  }
}
