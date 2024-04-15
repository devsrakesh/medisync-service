// finance.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Finance, FinanceDocument } from './finance.entity';
import { CreateFinanceDto, UpdateFinanceDto } from './finance.dto';

@Injectable()
export class FinanceService {
  constructor(@InjectModel(Finance.name) private financeModel: Model<FinanceDocument>) {}

  async findAll(): Promise<Finance[]> {
    return this.financeModel.find().exec();
  }

  async findById(id: string): Promise<Finance> {
    return this.financeModel.findById(id).exec();
  }

  async create(createFinanceDto: CreateFinanceDto): Promise<Finance> {
    const createdFinance = new this.financeModel(createFinanceDto);
    return createdFinance.save();
  }

  async update(id: string, updateFinanceDto: UpdateFinanceDto): Promise<Finance> {
    return this.financeModel.findByIdAndUpdate(id, updateFinanceDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Finance> {
    return this.financeModel.findByIdAndDelete(id).exec();
  }
}
