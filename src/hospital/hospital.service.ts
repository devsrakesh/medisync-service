import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hospital, HospitalDocument } from './hospital.entity';
import { CreateHospitalDto, UpdateHospitalDto } from './hospital.dto';
import { Response } from 'src/interceptor/response.interface';

@Injectable()
export class HospitalService {
  constructor(@InjectModel(Hospital.name) private hospitalModel: Model<HospitalDocument>) {}

  async findAll(
    page = 1, // Default to page 1
    pageSize = 10, // Default to 10 results per page
    sortField = 'createdAt', // Default sorting field
    sortOrder = 'desc', // Default sort order
  ): Promise<Response<Hospital[]>> {
    try {
      const skip = (page - 1) * pageSize; // Calculate skip for pagination

      const hospitals = await this.hospitalModel.aggregate([
        {
          $sort: { [sortField]: sortOrder === 'asc' ? 1 : -1 }, // Sort by the specified field and order
        },
        {
          $skip: skip, // Skip documents for pagination
        },
        {
          $limit: pageSize, // Limit the number of results for pagination
        },
      ]);

      const totalHospitals = await this.hospitalModel.countDocuments(); // Total count for pagination metadata

      return {
        status: 200,
        message: 'Hospitals retrieved successfully',
        data: hospitals,
      };
    } catch (error) {
      throw new InternalServerErrorException(`Error fetching hospitals: ${error.message}`);
    }
  }

  async findById(id: string): Promise<Response<Hospital>> {
    try {
      const hospital = await this.hospitalModel.findById(id).exec();
      if (!hospital) {
        throw new NotFoundException(`Hospital with ID ${id} not found`);
      }
      return {
        status: 200,
        message: 'Hospital retrieved successfully',
        data: hospital,
      };
    } catch (error) {
      throw new InternalServerErrorException(`Error retrieving hospital: ${error.message}`);
    }
  }

  async create(createHospitalDto: CreateHospitalDto): Promise<Response<Hospital>> {
    try {
      const newHospital = new this.hospitalModel(createHospitalDto);
      const savedHospital = await newHospital.save();
      return {
        status: 201,
        message: 'Hospital created successfully',
        data: savedHospital,
      };
    } catch (error) {
      throw new InternalServerErrorException(`Error creating hospital: ${error.message}`);
    }
  }

  async update(id: string, updateHospitalDto: UpdateHospitalDto): Promise<Response<Hospital>> {
    try {
      const updatedHospital = await this.hospitalModel.findByIdAndUpdate(id, updateHospitalDto, { new: true }).exec();
      if (!updatedHospital) {
        throw new NotFoundException(`Hospital with ID ${id} not found`);
      }
      return {
        status: 200,
        message: 'Hospital updated successfully',
        data: updatedHospital,
      };
    } catch (error) {
      throw new InternalServerErrorException(`Error updating hospital: ${error.message}`);
    }
  }

  async remove(id: string): Promise<Response<Hospital>> {
    try {
      const deletedHospital = await this.hospitalModel.findByIdAndDelete(id).exec();
      if (!deletedHospital) {
        throw new NotFoundException(`Hospital with ID ${id} not found`);
      }
      return {
        status: 200,
        message: 'Hospital deleted successfully',
        data: deletedHospital,
      };
    } catch (error) {
      throw new InternalServerErrorException(`Error deleting hospital: ${error.message}`);
    }
  }
}
