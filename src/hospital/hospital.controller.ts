// hospital.controller.ts
import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { CreateHospitalDto, UpdateHospitalDto } from './hospital.dto';
import { Hospital } from './hospital.entity';
import { Response } from 'src/common/interceptor/response.interface';

@Controller('hospital')
export class HospitalController {
  constructor(private readonly hospitalService: HospitalService) {}

  @Get()
  async findAll(
    @Query('page') page: string = '1', // Get page from query parameters, default to 1
    @Query('pageSize') pageSize: string = '10', // Get page size from query parameters, default to 10
    @Query('sortField') sortField?: string,
    @Query('sortOrder') sortOrder?: string,
  ): Promise<Response<Hospital[]>> {
    const defaultSortField = 'createdAt'; // Default sorting field
    const defaultSortOrder = 'desc'; // Default sorting order

    // If sortField is not provided, use the default
    const actualSortField = sortField ?? defaultSortField;

    // If sortOrder is not provided or invalid, use the default
    const actualSortOrder = sortOrder === 'asc' || sortOrder === 'desc' ? sortOrder : defaultSortOrder;
    return await this.hospitalService.findAll(parseInt(page), parseInt(pageSize), actualSortField, actualSortOrder); // Fetch paginated hospitals
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Response<Hospital>> {
    return this.hospitalService.findById(id);
  }

  @Post()
  async create(@Body() createHospitalDto: CreateHospitalDto): Promise<Response<Hospital>> {
    return this.hospitalService.create(createHospitalDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateHospitalDto: UpdateHospitalDto): Promise<Response<Hospital>> {
    return this.hospitalService.update(id, updateHospitalDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Response<Hospital>> {
    return this.hospitalService.remove(id);
  }
}
