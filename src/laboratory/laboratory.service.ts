// laboratory.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Laboratory, LaboratoryDocument } from './laboratory.entity';
import { CreateLaboratoryDto, UpdateLaboratoryDto } from './laboratory.dto';

@Injectable()
export class LaboratoryService {
  constructor(@InjectModel(Laboratory.name) private laboratoryModel: Model<LaboratoryDocument>) {}

  async findAll(): Promise<Laboratory[]> {
    return this.laboratoryModel.find().exec();
  }

  async findById(id: string): Promise<Laboratory> {
    return this.laboratoryModel.findById(id).exec();
  }

  async create(createLaboratoryDto: CreateLaboratoryDto): Promise<Laboratory> {
    const createdLaboratory = new this.laboratoryModel(createLaboratoryDto);
    return createdLaboratory.save();
  }

  async update(id: string, updateLaboratoryDto: UpdateLaboratoryDto): Promise<Laboratory> {
    return this.laboratoryModel.findByIdAndUpdate(id, updateLaboratoryDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Laboratory> {
    return this.laboratoryModel.findByIdAndDelete(id).exec();
  }
}
