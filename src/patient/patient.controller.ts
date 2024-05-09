import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  UsePipes,
  ValidationPipe,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import { Response } from 'src/common/interceptor/response.interface';
import { Patient } from './patient.entity';
import { CreatePatientDto, UpdatePatientDto } from './patient.dto';

@Controller('patients') // Base route for the patient endpoints
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get() // Endpoint to fetch all patients with pagination and sorting
  async findAll(
    @Query('page') page: number = 1, // Default page 1
    @Query('pageSize') pageSize: number = 10, // Default page size
    @Query('sortField') sortField: string = 'createdAt', // Default sorting field
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'desc', // Default sort order
  ): Promise<Response<Patient[]>> {
    return await this.patientService.findAll(page, pageSize, sortField, sortOrder);
  }

  @Get(':id') // Endpoint to fetch a patient by ID
  async findById(@Param('id') id: string): Promise<Response<Patient>> {
    const patient = await this.patientService.findById(id);
    if (!patient) {
      throw new NotFoundException(`Patient with ID ${id} not found`);
    }
    return patient; 
  }

  @Post() // Endpoint to create a new patient
  async create(@Body() createPatientDto: CreatePatientDto): Promise<Response<Patient>> {
    try {
      return await this.patientService.create(createPatientDto);
    } catch (error) {
      throw new InternalServerErrorException(`Error creating patient: ${error.message}`);
    }
  }

  @Put(':id') // Endpoint to update a patient by ID
  @UsePipes(ValidationPipe) // Apply validation on the DTO
  async update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto): Promise<Response<Patient>> {
    try {
      const updatedPatient = await this.patientService.update(id, updatePatientDto);
      if (!updatedPatient) {
        throw new NotFoundException(`Patient with ID ${id} not found`);
      }
      return updatedPatient;
    } catch (error) {
      throw new InternalServerErrorException(`Error updating patient: ${error.message}`);
    }
  }

  @Delete(':id') // Endpoint to delete a patient by ID
  async remove(@Param('id') id: string): Promise<Response<Patient>> {
    try {
      const deletedPatient = await this.patientService.remove(id);
      if (!deletedPatient) {
        throw new NotFoundException(`Patient with ID ${id} not found`);
      }
      return deletedPatient;
    } catch (error) {
      throw new InternalServerErrorException(`Error deleting patient: ${error.message}`);
    }
  }
}
