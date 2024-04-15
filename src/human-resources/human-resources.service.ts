// human-resources.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HumanResources, HumanResourcesDocument } from './human-resources.entity';
import { CreateHumanResourcesDto, UpdateHumanResourcesDto } from './human-resources.dto';

@Injectable()
export class HumanResourcesService {
  constructor(@InjectModel(HumanResources.name) private humanResourcesModel: Model<HumanResourcesDocument>) {}

  async findAll(): Promise<HumanResources[]> {
    return this.humanResourcesModel.find().exec();
  }

  async findById(id: string): Promise<HumanResources> {
    return this.humanResourcesModel.findById(id).exec();
  }

  async create(createHumanResourcesDto: CreateHumanResourcesDto): Promise<HumanResources> {
    const createdHumanResources = new this.humanResourcesModel(createHumanResourcesDto);
    return createdHumanResources.save();
  }

  async update(id: string, updateHumanResourcesDto: UpdateHumanResourcesDto): Promise<HumanResources> {
    return this.humanResourcesModel.findByIdAndUpdate(id, updateHumanResourcesDto, { new: true }).exec();
  }

  async remove(id: string): Promise<HumanResources> {
    return this.humanResourcesModel.findByIdAndDelete(id).exec();
  }
}
