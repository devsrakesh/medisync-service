// hospital.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hospital, HospitalDocument } from './hospital.entity';
import { CreateHospitalDto, UpdateHospitalDto } from './hospital.dto';

@Injectable()
export class HospitalService {
  constructor(@InjectModel(Hospital.name) private hospitalModel: Model<HospitalDocument>) {}

  async findAll(): Promise<Hospital[]> {
    return this.hospitalModel.find().exec();
  }

  async findById(id: string): Promise<Hospital> {
    return this.hospitalModel.findById(id).exec();
  }

  async create(createHospitalDto: CreateHospitalDto): Promise<Hospital> {
    const createdHospital = new this.hospitalModel(createHospitalDto);
    return createdHospital.save();
  }

  async update(id: string, updateHospitalDto: UpdateHospitalDto): Promise<Hospital> {
    return this.hospitalModel.findByIdAndUpdate(id, updateHospitalDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Hospital> {
    return this.hospitalModel.findByIdAndUpdate(id).exec();
  }
}
