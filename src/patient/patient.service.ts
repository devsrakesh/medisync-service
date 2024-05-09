import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient, PatientDocument } from './patient.entity';
import { CreatePatientDto, UpdatePatientDto } from './patient.dto';
import { Response } from 'src/common/interceptor/response.interface';
// Response interface for consistent structure

@Injectable()
export class PatientService {
  constructor(@InjectModel(Patient.name) private patientModel: Model<PatientDocument>) {}

  async findAll(
    page = 1, // Default page
    pageSize = 10, // Default number of items per page
    sortField = 'createdAt', // Default sorting field
    sortOrder = 'desc', // Default sorting order
  ): Promise<Response<Patient[]>> {
    try {
      const skip = (page - 1) * pageSize; // Calculate skip for pagination

      const patients = await this.patientModel.aggregate([
        {
          $sort: { [sortField]: sortOrder === 'asc' ? 1 : -1 }, // Sorting stage
        },
        {
          $skip: skip, // Skip documents for pagination
        },
        {
          $limit: pageSize, // Limit the number of documents returned
        },
      ]);

      const totalPatients = await this.patientModel.countDocuments(); // Total count for pagination metadata

      return {
        status: 200,
        message: 'Patients retrieved successfully',
        data: patients,
      };
    } catch (error) {
      throw new InternalServerErrorException(`Error fetching patients: ${error.message}`);
    }
  }

  async findById(id: string): Promise<Response<Patient>> {
    try {
      const patient = await this.patientModel.findById(id).exec();
      if (!patient) {
        throw new NotFoundException(`Patient with ID ${id} not found`);
      }
      return {
        status: 200,
        message: 'Patient retrieved successfully',
        data: patient,
      };
    } catch (error) {
      throw new InternalServerErrorException(`Error retrieving patient: ${error.message}`);
    }
  }

  async create(createPatientDto: CreatePatientDto): Promise<Response<Patient>> {
    console.log('hello');

    try {
      const newPatient = new this.patientModel(createPatientDto);
      const savedPatient = await newPatient.save();
      return {
        status: 201,
        message: 'Patient created successfully',
        data: savedPatient,
      };
    } catch (error) {
      throw new InternalServerErrorException(`Error creating patient: ${error.message}`);
    }
  }

  async update(id: string, updatePatientDto: UpdatePatientDto): Promise<Response<Patient>> {
    try {
      const updatedPatient = await this.patientModel.findByIdAndUpdate(id, updatePatientDto, { new: true }).exec();
      if (!updatedPatient) {
        throw new NotFoundException(`Patient with ID ${id} not found`);
      }
      return {
        status: 200,
        message: 'Patient updated successfully',
        data: updatedPatient,
      };
    } catch (error) {
      throw new InternalServerErrorException(`Error updating patient: ${error.message}`);
    }
  }

  async remove(id: string): Promise<Response<Patient>> {
    try {
      const deletedPatient = await this.patientModel.findByIdAndDelete(id).exec();
      if (!deletedPatient) {
        throw new NotFoundException(`Patient with ID ${id} not found`);
      }
      return {
        status: 200,
        message: 'Patient deleted successfully',
        data: deletedPatient,
      };
    } catch (error) {
      throw new InternalServerErrorException(`Error deleting patient: ${error.message}`);
    }
  }
}
