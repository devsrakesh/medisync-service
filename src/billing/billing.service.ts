// billing.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Billing, BillingDocument } from './billing.entity';
import { CreateBillingDto, UpdateBillingDto } from './billing.dto';

@Injectable()
export class BillingService {
  constructor(@InjectModel(Billing.name) private billingModel: Model<BillingDocument>) {}

  async findAll(): Promise<Billing[]> {
    return this.billingModel.find().exec();
  }

  async findById(id: string): Promise<Billing> {
    return this.billingModel.findById(id).exec();
  }

  async create(createBillingDto: CreateBillingDto): Promise<Billing> {
    const createdBilling = new this.billingModel(createBillingDto);
    return createdBilling.save();
  }

  async update(id: string, updateBillingDto: UpdateBillingDto): Promise<Billing> {
    return this.billingModel.findByIdAndUpdate(id, updateBillingDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Billing> {
    return this.billingModel.findByIdAndDelete(id).exec();
  }
}
