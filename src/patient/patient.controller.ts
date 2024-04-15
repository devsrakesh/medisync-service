// patient.controller.ts
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';

import { CreatePatientDto, UpdatePatientDto } from './patient.dto';
import { Patient } from './patient.entity';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientS) {}

  @Get()
  async findAll(): Promise<Patient[]> {
    return this.patientService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Patient> {
    return this.patientService.findById(id);
  }

  @Post()
  async create(@Body() createPatientDto: CreatePatientDto): Promise<Patient> {
    return this.patientService.create(createPatientDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto): Promise<Patient> {
    return this.patientService.update(id, updatePatientDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Patient> {
    return this.patientService.remove(id);
  }
}
