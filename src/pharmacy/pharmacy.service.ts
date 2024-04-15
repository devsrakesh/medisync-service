// pharmacy.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pharmacy, PharmacyDocument } from './pharmacy.entity';
import { CreatePharmacyDto, UpdatePharmacyDto } from './dto';

@Injectable()
export class PharmacyService {
  constructor(@InjectModel(Pharmacy.name) private pharmacyModel: Model<PharmacyDocument>) {}

  async findAll(): Promise<Pharmacy[]> {
    return this.pharmacyModel.find().exec();
  }

  async findById(id: string): Promise<Pharmacy> {
    return this.pharmacyModel.findById(id).exec();
  }

  async create(createPharmacyDto: CreatePharmacyDto): Promise<Pharmacy> {
    const createdPharmacy = new this.pharmacyModel(createPharmacyDto);
    return createdPharmacy.save();
  }

  async update(id: string, updatePharmacyDto: UpdatePharmacyDto): Promise<Pharmacy> {
    return this.pharmacyModel.findByIdAndUpdate(id, updatePharmacyDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Pharmacy> {
    return this.pharmacyModel.findByIdAndDelete(id).exec();
  }
}
